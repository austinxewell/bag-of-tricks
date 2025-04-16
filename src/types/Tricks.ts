export type Terrain =
  | "Flatground"
  | "Rail/Ledge"
  | "Stair/Gap"
  | "Vert/Transition"
  | "Manny Pad/Bank";

export type TrickType = "Flip" | "Grind" | "Grab" | "Stall" | "Manual";

export interface Trick {
  name: string;
  terrain: Terrain[];
  trickType: TrickType[];
  difficulty: 1 | 2 | 3 | 4 | 5;
}
