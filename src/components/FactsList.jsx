import React from "react";
import errorGif from "../assets/images/error.gif";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { factsAtom, showFormAtom } from "../recoil/facts.atom";
import { getFacts } from "../api/facts.api";
import FactCard from "./FactCard";

const FactsList = ({ category }) => {
  const [showForm, setShowForm] = useRecoilState(showFormAtom);
  const [facts, setFacts] = useRecoilState(factsAtom);

  // fetch facts
  const factsQuery = useQuery(["facts", category], () => getFacts(category), {
    onSuccess: (data) => {
      setFacts(data);
    },
  });

  return (
    <ul
      id="facts-list"
      className={`${showForm ? "h-[60vh]" : "h-[80vh]"} p-[1rem] overflow-auto`}
    >
      {factsQuery.isLoading ? (
        <h3 className="font-coiny uppercase text-sky-400 text-8xl text-center mt-[3rem]">
          Loading...
        </h3>
      ) : !facts?.length ? (
        <h1>
          no facts in this category yet
          {!showForm && (
            <span
              className="text-indigo-600 cursor-pointer "
              onClick={() => setShowForm(true)}
            >
              ,create the first one ✍
            </span>
          )}
        </h1>
      ) : facts?.length && !factsQuery.isError ? (
        facts.map((fact, index) => <FactCard key={fact.id} fact={fact} />)
      ) : (
        factsQuery.isError && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-[2rem]">Something went wrong</h1>
            <img src={errorGif} alt="error" />
          </div>
        )
      )}
    </ul>
  );
};

export default FactsList;
