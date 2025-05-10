export type Terrain =
  | "Flatground"
  | "Rail/Ledge"
  | "Stair/Gap"
  | "Vert/Transition"
  | "Manny Pad/Bank";

export type TrickType = "Flip" | "Grind" | "Grab" | "Stall" | "Manual";

export type TrickDirection = "Front Side" | "Back Side" | "N/A";
export interface Trick {
  name: string;
  direction: TrickDirection;
  terrain: Terrain[];
  trickType: TrickType[];
  difficulty: 1 | 2 | 3 | 4 | 5;
}
