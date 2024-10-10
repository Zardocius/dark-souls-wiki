import csv
import json
from collections import defaultdict
import re
import os

# exports raw weapon data to readable format now with descs


def generate_slug(weapon_name):
    return re.sub(r"[^a-z0-9-]+", "", weapon_name.lower().replace(" ", "-"))


def is_variant(name):
    return bool(re.search(r"\+\d+", name))


def load_weapons_from_csv(csv_file_path):
    weapons = defaultdict(list)

    with open(csv_file_path, mode="r", newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)

        for row in reader:
            if is_variant(row["Name"]):
                weapon_name = re.sub(r" \+\d+", "", row["Name"]).strip()
            else:
                weapon_name = row["Name"].split(" [")[0].strip()

            weapons[weapon_name].append(row)

    return weapons


def compare_with_base(base_weapon, variant_weapon):
    differences = {}

    for key, base_value in base_weapon.items():
        variant_value = variant_weapon.get(key, base_value)
        if base_value != variant_value:
            differences[key] = variant_value

    return differences


def load_descriptions(normal_desc_file, dlc_desc_file):
    descriptions = {}
    all_files = [normal_desc_file, dlc_desc_file]

    for desc_file in all_files:
        current_description = ""
        current_ids = []

        with open(desc_file, "r", encoding="utf-8") as file:
            for line in file:
                line = line.strip()
                if line.startswith("###"):

                    if current_ids:
                        if not current_description.strip():
                            print(
                                f"Warning: Empty description for weapon ID(s): {', '.join(current_ids)}"
                            )
                        else:
                            for weapon_id in current_ids:
                                descriptions[weapon_id] = current_description.strip()
                                print(f"Assigned description to weapon ID: {weapon_id}")

                        current_ids = []

                    ids = line[3:].split("###")
                    current_ids = [id.strip() for id in ids if id.strip()]

                    current_description = ""
                else:
                    current_description += line + "\n"

            if current_ids:
                if not current_description.strip():
                    print(
                        f"Warning: Empty description for weapon ID(s): {', '.join(current_ids)}"
                    )
                else:
                    for weapon_id in current_ids:
                        descriptions[weapon_id] = current_description.strip()
                        print(f"Assigned description to weapon ID: {weapon_id}")

    return descriptions


def process_weapons(weapons, descriptions):
    processed_weapons = {}
    empty_description_log = []

    for weapon_name, variants in weapons.items():

        base_weapon = variants[0]
        base_weapon["slug"] = generate_slug(weapon_name)

        weapon_id = base_weapon.get("ID")
        if weapon_id in descriptions:
            base_weapon["description"] = descriptions[weapon_id]
        else:
            base_weapon["description"] = ""
            empty_description_log.append(
                f"{weapon_name} (ID: {weapon_id}) has no description"
            )

        processed_weapons[weapon_name] = {"base": base_weapon, "variants": []}

        for variant in variants[1:]:
            differences = compare_with_base(base_weapon, variant)
            if differences:
                processed_weapons[weapon_name]["variants"].append(
                    {
                        "name": variant["Name"],
                        "differences": differences,
                    }
                )

    return processed_weapons, empty_description_log


def save_weapon_to_file(weapon_name, weapon_data, output_folder):
    file_name = f"{generate_slug(weapon_name)}.json"
    file_path = os.path.join(output_folder, file_name)

    with open(file_path, "w", encoding="utf-8") as jsonfile:
        json.dump(weapon_data, jsonfile, indent=4, ensure_ascii=False)


def log_empty_descriptions(empty_description_log, log_file="empty_descriptions.log"):

    if os.path.exists(log_file):
        os.remove(log_file)

    with open(log_file, "w", encoding="utf-8") as file:
        for weapon in empty_description_log:
            file.write(f"{weapon}\n")


def main(file_path, output_folder, normal_desc_file, dlc_desc_file):
    os.makedirs(output_folder, exist_ok=True)

    descriptions = load_descriptions(normal_desc_file, dlc_desc_file)

    weapons = load_weapons_from_csv(file_path)

    processed_weapons, empty_description_log = process_weapons(weapons, descriptions)

    for weapon_name, weapon_data in processed_weapons.items():
        save_weapon_to_file(weapon_name, weapon_data, output_folder)

    log_empty_descriptions(empty_description_log)


csv_file_path = "csv/Weapons.csv"
normal_desc_file = "txt/DescriptionWeapons.fmgmerge.txt"
dlc_desc_file = "txt/DescriptionWeapons_Patch.fmgmerge.txt"
output_folder_path = "outputDesc"


main(csv_file_path, output_folder_path, normal_desc_file, dlc_desc_file)
