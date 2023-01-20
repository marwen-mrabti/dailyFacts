import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { addNewFact } from "../api/facts.api";
import { categoriesAtom, newFactAtom, showFormAtom } from "../recoil/facts.atom";

const NewFactForm = () => {
  const queryClient = useQueryClient();
  const [newFact, setNewFact] = useRecoilState(newFactAtom);
  const CATEGORIES = useRecoilValue(categoriesAtom);
  const setShowForm = useSetRecoilState(showFormAtom);

  const addNewFactMutation = useMutation(addNewFact, {
    onSuccess: (data) => {
      console.log("new facts", data);
      queryClient.refetchQueries(["facts"]);
      setNewFact({
        text: "",
        source: "",
        category: "",
      });
      setShowForm(false);
    },
  });

  const isValidHttpUrl = (source) => {
    let url;
    try {
      url = new URL(source.trim());
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  };

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    if (
      newFact.text &&
      newFact.text.length <= 200 &&
      newFact.source &&
      isValidHttpUrl(newFact.source) &&
      newFact.category
    ) {
      addNewFactMutation.mutate({
        ...newFact,
      });
    }
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
          })
        }
      />
      <span className="remaining-chars" id="char-count">
        {200 - newFact.text.length}
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

      <button
        className={`btn btn-large `}
        id="submit-fact"
        type="submit"
        style={{
          cursor: addNewFactMutation.isLoading ? "not-allowed" : "pointer",
          backgroundImage: addNewFactMutation.isLoading && "none",
          transform: addNewFactMutation.isLoading && "none",
          backgroundColor: addNewFactMutation.isLoading && "#a5b4fc",
        }}
        disabled={addNewFactMutation.isLoading}
      >
        {addNewFactMutation.isLoading ? "Processing" : "Post"}
      </button>
    </form>
  );
};

export default NewFactForm;
