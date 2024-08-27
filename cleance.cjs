const fs = require("fs");

// Load the JSON file
const jsonData = require("./src/contents/DarkSoulsWeapons.json");

// Modify the JSON data
const modifiedData = jsonData.map((item, index) => {
  // Generate a slug from the name
  const image =
    item.name
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/\./g, "") // Remove dots
      .replace(/\'/g, "-") + ".png";
  return {};
});

// Write the modified data back to a new JSON file
fs.writeFileSync(
  "./src/contents/DarkSoulsWeapons.json",
  JSON.stringify(modifiedData, null, 2) // Pretty-print JSON with 2-space indentation
);

console.log(
  "JSON data has been modified and saved to DarkSoulsWeaponsModified.json"
);
