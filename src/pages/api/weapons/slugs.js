import { connectToDatabase } from "@/lib/db";
import Weapon from "@/models/Weapon";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    try {

      const weapons = await Weapon.aggregate([
        { $project: { slug: "$base.slug", _id: 0 } }
      ]);
      res.status(200).json(weapons);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch slugs!" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
