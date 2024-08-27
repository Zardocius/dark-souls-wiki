export interface weaponsData {
  name: string;
  atk: {
    physical: number;
    magic: number;
    fire: number;
    lightning: number;
    bonus: number;
  };
  def: {
    physical: number;
    magic: number;
    fire: number;
    lightning: number;
    stab: number;
  };
  effects: {
    poison: null;
    bleed: null;
    divine: null;
    occult: null;
  };
  req: {
    strength: number;
    dexterity: number;
    intelligence: number;
    faith: number;
  };
  scale: {
    strength: string;
    dexterity: string;
    intelligence: string;
    faith: string;
  };
  durability: number;
  weight: number;
  attackTypes: string[];
  obtained: string[];
  aotaOnly: boolean;
  id: number;
  slug: string;
  image: string;
  description: string;
}
