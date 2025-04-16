import { defineStore } from "pinia";
import type { Trick } from "@/types/Tricks";

export const useMainStore = defineStore("main", {
  state: () => ({
    selectedTerrains: [] as string[],
    selectedTricks: [] as string[],
    bag: [] as Trick[],
  }),
  actions: {
    addToBag(trick: Trick) {
      const alreadyInBag = this.bag.some((t) => t.name === trick.name);
      if (!alreadyInBag) {
        this.bag.push(trick);
        this.saveBagToLocalStorage();
      }
    },
    removeFromBag(trickName: string) {
      this.bag = this.bag.filter((t) => t.name !== trickName);
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
