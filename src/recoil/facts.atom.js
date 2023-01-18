import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const showFormAtomPersist = recoilPersist({ key: "show-form" });
export const showFormAtom = atom({
  key: "showform",
  default: false,
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [showFormAtomPersist.persistAtom],
});

const newFactAtomPersist = recoilPersist({ key: "new-fact" });
export const newFactAtom = atom({
  key: "newFact",
  default: {
    text: "",
    source: "",
    category: "",
    remainingChars: 200,
  },
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [newFactAtomPersist.persistAtom],
});

const categoriesAtomPersist = recoilPersist({ key: "categories" });
export const categoriesAtom = atom({
  key: "categories",
  default: [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ],
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [categoriesAtomPersist.persistAtom],
});
