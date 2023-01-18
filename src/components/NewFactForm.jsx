import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesAtom, newFactAtom, showFormAtom } from "../recoil/facts.atom";

const NewFactForm = () => {
  const [newFact, setNewFact] = useRecoilState(newFactAtom);
  const CATEGORIES = useRecoilValue(categoriesAtom);
  const setShowForm = useSetRecoilState(showFormAtom);

  //TODO useMutation hook to add new fact to DB and update cache

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    console.log(newFact);
    setNewFact({
      text: "",
      source: "",
      category: "",
      remainingChars: 200,
    });
    setShowForm(false);
  };

  return (
    <form className={`fact-form`} id="fact-form" onSubmit={handleOnFormSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        className="fact-input"
        id="fact-text"
        value={newFact.text}
        onChange={(e) =>
          setNewFact({
            ...newFact,
            text: e.target.value,
            remainingChars: 200 - e.target.value.length,
          })
        }
      />
      <span className="remaining-chars" id="char-count">
        {newFact.remainingChars}
      </span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        id="fact-source"
        value={newFact.source}
        onChange={(e) =>
          setNewFact({
            ...newFact,
            source: e.target.value,
          })
        }
      />
      <select
        id="fact-category"
        value={newFact.category}
        onChange={(e) =>
          setNewFact({
            ...newFact,
            category: e.target.value,
          })
        }
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((category, index) => (
          <option key={index} value={category.name} className="capitalize">
            {category.name}
          </option>
        ))}
      </select>

      <button className="btn btn-large" id="submit-fact" type="submit">
        Post
      </button>
    </form>
  );
};

export default NewFactForm;
