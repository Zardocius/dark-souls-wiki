import { connectToDatabase } from "@/lib/db";
import Weapon from "@/models/Weapon";

export default async function handler(req, res) {
  const { slug } = req.query;
  await connectToDatabase();

  if (req.method === "GET") {
    try {
      const actualSlug = Array.isArray(slug) ? slug[0] : slug;
      const cleanedSlug = actualSlug.replace(/^['"]|['"]$/g, '');
      const weapon = await Weapon.findOne({ 'base.slug': cleanedSlug });
  
      if (!weapon) {
        console.log("Weapon not found");
        res.status(404).json({ error: "Weapon not found" });
        return;
      }
  
      res.status(200).json(weapon);
    } catch (error) {
      console.error("Error fetching weapon:", error);
      res.status(500).json({ error: "Failed to fetch weapon details" });
    }
  }
  
}
