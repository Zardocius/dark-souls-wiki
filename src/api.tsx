export const fetchWeapons = async () => {
  const response = await fetch("/index.json"); // If in public folder

  if (!response.ok) {
    const errorText = await response.text(); // Get the raw response text
    console.error(`Error fetching data: ${response.status} ${errorText}`); // Log the error
    throw new Error(`Failed to fetch weapons data: ${response.status}`);
  }

  const textData = await response.text(); // Get the response as text
  console.log("Response Data:", textData); // Log the response data

  try {
    const data = JSON.parse(textData); // Parse the JSON manually
    return data.Weapons; // Adjust according to your actual structure
  } catch (error) {
    console.error("Failed to parse JSON:", error); // Log parsing errors
    throw new Error("Failed to parse weapons data");
  }
};

export const fetchWeaponByName = async (name: string) => {
  const formattedName = name.replace(/\s+/g, "_"); // Replace spaces with underscores
  const response = await fetch(
    `/contents/database/Weapons/${formattedName}.json`
  );

  if (!response.ok) {
    const errorText = await response.text(); // Get the raw response text for better error info
    throw new Error(
      `Failed to fetch weapon data for ${name}: ${response.status} ${errorText}`
    );
  }

  const weaponData = await response.json();
  return weaponData;
};
