import csv
import json
from collections import defaultdict
import re
import os

# exports raw weapon data to readable format


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
                weapon_name = re.sub(
                    r" \+\d+", "", row["Name"]
                ).strip()  # Remove +number for base name
            else:
                weapon_name = (
                    row["Name"].split(" [")[0].strip()
                )  # Adjust column name if needed

            weapons[weapon_name].append(row)

    return weapons


def compare_with_base(base_weapon, variant_weapon):
    differences = {}

    for key, base_value in base_weapon.items():
        variant_value = variant_weapon.get(
            key, base_value
        )  # Default to base value if key missing
        if base_value != variant_value:
            differences[key] = variant_value

    return differences


def process_weapons(weapons):
    processed_weapons = {}

    for weapon_name, variants in weapons.items():

        base_weapon = variants[0]
        base_weapon["slug"] = generate_slug(weapon_name)  # Add slug to base weapon

        processed_weapons[weapon_name] = {"base": base_weapon, "variants": []}

        for variant in variants[1:]:
            differences = compare_with_base(base_weapon, variant)
            if differences:
                processed_weapons[weapon_name]["variants"].append(
                    {
                        "name": variant["Name"],  # Keep the full variant name
                        "differences": differences,
                    }
                )

    return processed_weapons


def save_weapon_to_file(weapon_name, weapon_data, output_folder):
    file_name = f"{generate_slug(weapon_name)}.json"
    file_path = os.path.join(output_folder, file_name)

    with open(file_path, "w", encoding="utf-8") as jsonfile:
        json.dump(weapon_data, jsonfile, indent=4, ensure_ascii=False)

    print(f"Saved {weapon_name} to {file_path}")


def main(file_path, output_folder):

    os.makedirs(output_folder, exist_ok=True)

    weapons = load_weapons_from_csv(file_path)
    processed_weapons = process_weapons(weapons)

    for weapon_name, weapon_data in processed_weapons.items():
        save_weapon_to_file(weapon_name, weapon_data, output_folder)


csv_file_path = "csv/Weapons.csv"  # Change this to your CSV file path
output_folder_path = "output"  # Change this to your desired output file path


main(csv_file_path, output_folder_path)
