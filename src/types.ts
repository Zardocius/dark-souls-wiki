// Define the type for a weapon category
export type WeaponCategory = {
  category: string; // The name of the category (e.g., "Fist", "Swords")
  slug: string; // The slug for the category
  weapons: Weapon[]; // An array of weapons in this category
};
export type MagicCategory = {
  category: string; // The name of the category (e.g., "Fist", "Swords")
  slug: string; // The slug for the category
  spells: Magic[]; // An array of weapons in this category
};

export interface ImageAtlas {
  imageSource: string; // Path to the image file
  posX: number;        // X position in the atlas
  posY: number;        // Y position in the atlas
  width: number;      // Width of the image
  height: number;     // Height of the image
}

export interface Weapon {
  width: number;
  height: number;
  ID: number;
  Name: string;
  behaviorVariationId: number;
  sortId: number;
  wanderingEquipId: number;
  weight: number;
  weaponWeightRate: number;
  fixPrice: number;
  basicPrice: number;
  sellValue: number;
  correctStrength: number;
  correctAgility: number;
  correctMagic: number;
  correctFaith: number;
  physGuardCutRate: number;
  magGuardCutRate: number;
  fireGuardCutRate: number;
  thunGuardCutRate: number;
  spEffectBehaviorId0: number;
  spEffectBehaviorId1: number;
  spEffectBehaviorId2: number;
  residentSpEffectId: number;
  residentSpEffectId1: number;
  residentSpEffectId2: number;
  materialSetId: number;
  originEquipWep: number;
  originEquipWep1: number;
  originEquipWep2: number;
  originEquipWep3: number;
  originEquipWep4: number;
  originEquipWep5: number;
  originEquipWep6: number;
  originEquipWep7: number;
  originEquipWep8: number;
  originEquipWep9: number;
  originEquipWep10: number;
  originEquipWep11: number;
  originEquipWep12: number;
  originEquipWep13: number;
  originEquipWep14: number;
  originEquipWep15: number;
  antiDemonDamageRate: number;
  antSaintDamageRate: number;
  antWeakA_DamageRate: number;
  antWeakB_DamageRate: number;
  vagrantItemLotId: number;
  vagrantBonusEneDropItemLotId: number;
  vagrantItemEneDropItemLotId: number;
  equipModelId: number;
  iconId: number;
  durability: number;
  durabilityMax: number;
  attackThrowEscape: number;
  parryDamageLife: number;
  attackBasePhysics: number;
  attackBaseMagic: number;
  attackBaseFire: number;
  attackBaseThunder: number;
  attackBaseStamina: number;
  saWeaponDamage: number;
  saDurability: number;
  guardAngle: number;
  staminaGuardDef: number;
  reinforceTypeId: number;
  trophySGradeId: number;
  trophySeqId: number;
  throwAtkRate: number;
  bowDistRate: number;
  equipModelCategory: number;
  equipModelGender: number;
  weaponCategory: number;
  wepmotionCategory: number;
  guardmotionCategory: number;
  atkMaterial: number;
  defMaterial: number;
  defSfxMaterial: number;
  correctType: number;
  spAttribute: number;
  spAtkcategory: number;
  wepmotionOneHandId: number;
  wepmotionBothHandId: number;
  properStrength: number;
  properAgility: number;
  properMagic: number;
  properFaith: number;
  overStrength: number;
  attackBaseParry: number;
  defenseBaseParry: number;
  guardBaseRepel: number;
  attackBaseRepel: number;
  guardCutCancelRate: number;
  guardLevel: number;
  slashGuardCutRate: number;
  blowGuardCutRate: number;
  thrustGuardCutRate: number;
  poisonGuardResist: number;
  diseaseGuardResist: number;
  bloodGuardResist: number;
  curseGuardResist: number;
  isDurabilityDivergence: number;
  rightHandEquipable: number;
  leftHandEquipable: number;
  bothHandEquipable: number;
  arrowSlotEquipable: number;
  boltSlotEquipable: number;
  enableGuard: number;
  enableParry: number;
  enableMagic: number;
  enableSorcery: number;
  enableMiracle: number;
  enableVowMagic: number;
  isNormalAttackType: number;
  isBlowAttackType: number;
  isSlashAttackType: number;
  isThrustAttackType: number;
  isEnhance: number;
  isLuckCorrect: number;
  isCustom: number;
  disableBaseChangeReset: number;
  disableRepair: number;
  isDarkHand: number;
  simpleModelForDlc: number;
  lanternWep: number;
  isVersusGhostWep: number;
  baseChangeCategory: number;
  isDragonSlayer: number;
  isDeposit: number;
  disableMultiDropShare: number;
  pad_0: number;
  oldSortId: number;
  pad_1: string;
  slug: string;
  description: string;
  imageAtlas: ImageAtlas;
}

export interface Magic {
  ID: number;
  Name: string;
  yesNoDialogMessageId: number;
  limitCancelSpEffectId: number;
  sortId: number;
  refId: number;
  mp: number;
  stamina: number;
  iconId: number;
  behaviorId: number;
  mtrlItemId: number;
  replaceMagicId: number;
  maxQuantity: number;
  heroPoint: number;
  overDexterity: number;
  sfxVariationId: number;
  slotLength: number;
  requirementIntellect: number;
  requirementFaith: number;
  analogDexiterityMin: number;
  analogDexiterityMax: number;
  ezStateBehaviorType: number;
  refCategory: number;
  spEffectCategory: number;
  refType: number;
  opmeMenuType: number;
  hasSpEffectType: number;
  replaceCategory: number;
  useLimitCategory: number;
  vowType0: number;
  vowType1: number;
  vowType2: number;
  vowType3: number;
  vowType4: number;
  vowType5: number;
  vowType6: number;
  vowType7: number;
  enable_multi: number;
  enable_multi_only: number;
  isEnchant: number;
  isShieldEnchant: number;
  enable_live: number;
  enable_gray: number;
  enable_white: number;
  enable_black: number;
  disableOffline: number;
  castResonanceMagic: number;
  pad_1: number;
  vowType8: number;
  vowType9: number;
  vowType10: number;
  vowType11: number;
  vowType12: number;
  vowType13: number;
  vowType14: number;
  vowType15: number;
  pad: string;
  slug: string;
  description: string;
  imageAtlas: ImageAtlas;
}

export interface Icons {
  slug: string;
  imageAtlas: ImageAtlas;
}

export type IconCategory = {
  category: string;
  icons: Icons[];
}

export type IconIndex = IconCategory

export type MagicIndex = MagicCategory[]
// Define the type for the entire weapon index
export type WeaponIndex = WeaponCategory[]; // An array of weapon categories
