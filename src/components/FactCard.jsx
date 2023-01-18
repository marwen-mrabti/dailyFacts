import React from "react";

import { useRecoilValue } from "recoil";
import { categoriesAtom } from "../recoil/facts.atom";

const FactCard = ({ fact }) => {
  const CATEGORIES = useRecoilValue(categoriesAtom);

  //TODO handle vote btns :: useMutation to update fact votes

  return (
    <li className="fact">
      <p className="fact-text w-[100%]">
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((category) => category.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="votes-btns">
        <button className="vote-btn">👍 {fact.votesInteresting}</button>
        <button className="vote-btn">🤯 {fact.votesMindBlowing}</button>
        <button className="vote-btn">⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  );
};

export default FactCard;
