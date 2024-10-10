import json
import re

# creates index.ts for website to use


def generate_slug(name):

    name = name.lower()

    name = name.replace(" ", "-")

    name = name.replace("'", "")
    return name


weapon_data = weapon_data = {
    "Fist": ["Caestus", "Claw", "Dark Hand", "Dragon Bone Fist"],
    "Hammers": [
        "Blacksmith Giant Hammer",
        "Blacksmith Hammer",
        "Hammer of Vamos",
        "Club",
        "Mace",
        "Morning Star",
        "Pickaxe",
        "Reinforced Club",
        "Warpick",
    ],
    "Great Hammers": [
        "Demon's Great Hammer",
        "Dragon Tooth",
        "Grant",
        "Great Club",
        "Large Club",
        "Smough's Hammer",
    ],
    "Axes": [
        "Battle Axe",
        "Butcher Knife",
        "Crescent Axe",
        "Gargoyle Tail Axe",
        "Golem Axe",
        "Hand Axe",
    ],
    "Greataxes": [
        "Black Knight Greataxe",
        "Demon's Greataxe",
        "Dragon King Greataxe",
        "Greataxe",
        "Stone Greataxe",
    ],
    "Daggers": [
        "Bandit's Knife",
        "Dagger",
        "Dark Silver Tracer",
        "Ghost Blade",
        "Parrying Dagger",
        "Priscilla's Dagger",
    ],
    "Thrusting Swords": [
        "Estoc",
        "Mail Breaker",
        "Rapier",
        "Ricard's Rapier",
        "Velka's Rapier",
    ],
    "Straight Swords": [
        "Astora's Straight Sword",
        "Balder Side Sword",
        "Barbed Straight Sword",
        "Broadsword",
        "Broken Straight Sword",
        "Crystal Straight Sword",
        "Dark Sword",
        "Drake Sword",
        "Longsword",
        "Shortsword",
        "Silver Knight Straight Sword",
        "Straight Sword Hilt",
        "Sunlight Straight Sword",
    ],
    "Greatswords": [
        "Abyss Greatsword",
        "Bastard Sword",
        "Black Knight Sword",
        "Claymore",
        "Crystal Greatsword",
        "Flamberge",
        "Great Lord Greatsword",
        "Greatsword of Artorias",
        "Greatsword of Artorias (Cursed)",
        "Man Serpent Greatsword",
        "Moonlight Greatsword",
        "Obsidian Greatsword",
        "Stone Greatsword",
    ],
    "Ultra Greatswords": [
        "Black Knight Greatsword",
        "Demon Great Machete",
        "Dragon Greatsword",
        "Greatsword",
        "Zweihander",
    ],
    "Katanas": ["Chaos Blade", "Iaito", "Uchigatana", "Washing Pole"],
    "Curved Swords": [
        "Falchion",
        "Gold Tracer",
        "Jagged Ghost Blade",
        "Painting Guardian Sword",
        "Quelaag's Fury Sword",
        "Scimitar",
        "Shotel",
    ],
    "Curved Greatswords": ["Gravelord Sword", "Murakumo", "Server"],
    "Spears": [
        "Channeler's Trident",
        "Demon's Spear",
        "Dragonslayer Spear",
        "Four-Pronged Plow",
        "Moonlight Butterfly Horn",
        "Partizan",
        "Pike",
        "Silver Knight Spear",
        "Spear",
        "Winged Spear",
    ],
    "Halberds": [
        "Black Knight Halberd",
        "Gargoyle's Halberd",
        "Giant's Halberd",
        "Great Scythe",
        "Halberd",
        "Lifehunt Scythe",
        "Lucerne",
        "Scythe",
        "Titanite Catch Pole",
    ],
    "Bows": [
        "Black Bow of Pharis",
        "Composite Bow",
        "Darkmoon Bow",
        "Long Bow",
        "Short Bow",
    ],
    "Crossbows": ["Avelyn", "Heavy Crossbow", "Light Crossbow", "Sniper Crossbow"],
    "Greatbows": ["Dragonslayer Greatbow", "Gough's Greatbow"],
    "Whips": ["Guardian Tail", "Notched Whip", "Whip"],
    "Catalysts": [
        "Beatrice's Catalyst",
        "Demon's Catalyst",
        "Izalith Catalyst",
        "Logan's Catalyst",
        "Manus Catalyst",
        "Oolacile Catalyst",
        "Oolacile Ivory Catalyst",
        "Sorcerer's Catalyst",
        "Tin Banishment Catalyst",
        "Tin Crystallization Catalyst",
        "Tin Darkmoon Catalyst",
    ],
    "Talismans": [
        "Canvas Talisman",
        "Darkmoon Talisman",
        "Ivory Talisman",
        "Sunlight Talisman",
        "Talisman",
        "Thorolund Talisman",
        "Velka's Talisman",
    ],
    "Pyromancy Flames": ["Ascended Pyromancy Flame", "Pyromancy Flame"],
    "Small Shields": [
        "Buckler",
        "Caduceus Round Shield",
        "Cracked Round Shield",
        "Effigy Shield",
        "Leather Shield",
        "Plank Shield",
        "Red and White Round Shield",
        "Small Leather Shield",
        "Target Shield",
        "Warrior's Round Shield",
    ],
    "Normal Shields": [
        "Balder Shield",
        "Black Knight Shield",
        "Bloodshield",
        "Caduceus Kite Shield",
        "Crest Shield",
        "Dragon Crest Shield",
        "East-West Shield",
        "Gargoyle's Shield",
        "Grass Crest Shield",
        "Heater Shield",
        "Hollow Soldier Shield",
        "Iron Round Shield",
        "Knight Shield",
        "Large Leather Shield",
        "Sanctus",
        "Silver Knight Shield",
        "Spider Shield",
        "Sunlight Shield",
        "Tower Kite Shield",
        "Wooden Shield",
    ],
    "Large Shields": [
        "Black Iron Greatshield",
        "Bonewheel Shield",
        "Cleansing Greatshield",
        "Eagle Shield",
        "Giant Shield",
        "Greatshield of Artorias",
        "Havel's Greatshield",
        "Stone Greatshield",
        "Tower Shield",
    ],
    "Unique Shields": [
        "Crystal Ring Shield",
        "Crystal Shield",
        "Spiked Shield",
        "Pierce Shield",
    ],
    "Other": ["Dark Hand", "Skull Lantern"],
}


formatted_categories = []


for category, weapons in weapon_data.items():

    formatted_category = {
        "category": category,
        "slug": generate_slug(category),
        "weapons": [],
    }

    for weapon in weapons:
        formatted_weapon = {"name": weapon, "slug": generate_slug(weapon)}
        formatted_category["weapons"].append(formatted_weapon)

    formatted_categories.append(formatted_category)


output_file = "formatted_weapon_categories_with_weapons.json"
with open(output_file, "w") as f:
    json.dump(formatted_categories, f, indent=4)

print(f"Formatted weapon categories with weapons saved to {output_file}")
