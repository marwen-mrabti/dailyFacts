import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

import { useRecoilValue } from "recoil";
import { updateFact } from "../api/facts.api";
import { categoriesAtom } from "../recoil/facts.atom";

const FactCard = ({ fact }) => {
  const queryClient = useQueryClient();
  const CATEGORIES = useRecoilValue(categoriesAtom);
  const isDisputed = fact.votesFalse > fact.votesInteresting + fact.votesMindBlowing;

  const updateFactMutation = useMutation(updateFact, {
    onSuccess: (data) => {
      queryClient.refetchQueries(["facts"]);
    },
  });

  const handleOnVote = (voteType) => {
    updateFactMutation.mutate({
      fact: fact,
      voteType,
    });
  };

  return (
    <li className="fact">
      <p className="fact-text w-[100%]">
        {isDisputed && <span className="text-red-500">[🚨DISPUTED]</span>}
        {fact?.text}
        <a className="source" href={fact?.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag "
        style={{
          backgroundColor: CATEGORIES.find(
            (category) => category?.name === fact?.category
          ).color,
        }}
      >
        #{fact.category}#
      </span>
      <div className="votes-btns">
        <button className="vote-btn" onClick={() => handleOnVote("votesInteresting")}>
          👍 {fact?.votesInteresting}
        </button>
        <button className="vote-btn" onClick={() => handleOnVote("votesMindBlowing")}>
          🤯 {fact?.votesMindBlowing}
        </button>
        <button className="vote-btn" onClick={() => handleOnVote("votesFalse")}>
          ⛔️ {fact?.votesFalse}
        </button>
      </div>
    </li>
  );
};

export default FactCard;
