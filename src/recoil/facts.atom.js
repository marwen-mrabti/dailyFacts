import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CATEGORIES, initialFacts } from "../constantes";

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
  },
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [newFactAtomPersist.persistAtom],
});

const factsAtomPersist = recoilPersist({ key: "facts" });
export const factsAtom = atom({
  key: "facts",
  default: [],
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [factsAtomPersist.persistAtom],
});

const categoriesAtomPersist = recoilPersist({ key: "categories" });
export const categoriesAtom = atom({
  key: "categories",
  default: CATEGORIES,
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [categoriesAtomPersist.persistAtom],
});
