import csv
import json

# creates types.ts for site to use


def infer_type(value):
    """Infer TypeScript type based on the value from the data."""
    if isinstance(value, int):
        return "number"
    elif isinstance(value, float):
        return "number"
    elif isinstance(value, bool):
        return "boolean"
    elif isinstance(value, list):
        if value and isinstance(value[0], dict):
            return f"{infer_type(value[0])}[]"
        else:
            return "any[]"
    elif isinstance(value, dict):
        return "Record<string, any>"
    else:
        return "string"


def format_type_definition(field_name, type_name):
    """Generate the formatted TypeScript field declaration."""
    return f"  {field_name}: {type_name};"


def generate_types_from_csv(file_path, output_file):
    """Read the CSV data, infer the types, and generate a TypeScript types file."""
    with open(file_path, mode="r", newline="", encoding="utf-8") as file:
        csv_reader = csv.DictReader(file)
        field_types = {}

        for row in csv_reader:
            for field, value in row.items():
                try:

                    value = json.loads(value)  # Convert to appropriate type
                except json.JSONDecodeError:
                    pass  # Value remains a string if not JSON
                field_type = infer_type(value)

                if field not in field_types:
                    field_types[field] = field_type
                elif field_types[field] != field_type:
                    field_types[field] = "any"  # Fall back to 'any' if inconsistent

        with open(output_file, mode="w", encoding="utf-8") as output:
            output.write("export interface WeaponData {\n")
            for field_name, field_type in field_types.items():
                output.write(format_type_definition(field_name, field_type) + "\n")
            output.write("}\n")

    print(f"TypeScript types have been generated and saved to {output_file}.")


file_path = "csv/Weapons.csv"  # Path to your CSV file
output_file = "WeaponTypes.ts"  # Output TypeScript file
generate_types_from_csv(file_path, output_file)
