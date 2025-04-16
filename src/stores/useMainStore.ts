import { defineStore } from "pinia";
import type { Trick } from "@/types/Tricks";
import { useToast } from "@/composables/useToast";
import { arraysAreEqual } from "@/utils/arrayUtils";

const { showSuccess, showError } = useToast();

export const useMainStore = defineStore("main", {
  state: () => ({
    selectedTerrains: [] as string[],
    selectedTricks: [] as string[],
    defaultTerrains: [
      "Flatground",
      "Rail/Ledge",
      "Stair/Gap",
      "Vert/Transition",
      "Manny Pad/Bank",
    ],
    defaultTrickTypes: ["Flip", "Grind", "Grab", "Stall", "Manual"],
    bag: [] as Trick[],
  }),
  actions: {
    addToBag(trick: Trick) {
      const isDuplicate = this.bag.some(
        (t) =>
          t.name === trick.name &&
          t.direction === trick.direction &&
          arraysAreEqual(t.terrain, trick.terrain) &&
          arraysAreEqual(t.trickType, trick.trickType)
      );

      if (!isDuplicate) {
        this.bag.push(trick);
        this.saveBagToLocalStorage();
        showSuccess("Trick Added");
      } else {
        showError("This exact trick is already in your bag!");
      }
    },
    removeFromBag(index: number) {
      this.bag.splice(index, 1);
      this.saveBagToLocalStorage();
    },
    saveBagToLocalStorage() {
      localStorage.setItem("bagOfTricks", JSON.stringify(this.bag));
    },
    loadBagFromLocalStorage() {
      const savedBag = localStorage.getItem("bagOfTricks");
      if (savedBag) {
        try {
          const parsed = JSON.parse(savedBag) as Trick[];
          this.bag = parsed;
        } catch (err) {
          console.error("Failed to parse bagOfTricks:", err);
        }
      }
    },
  },
});
