import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getFacts } from "./api/facts.api";
import CategoryBtns from "./components/CategoryBtns";
import FactsList from "./components/FactsList";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import { showFormAtom } from "./recoil/facts.atom";


function App() {
  const [facts, setFacts] = useState([]);
  const [category, setCategory] = useState("all");
  const showForm = useRecoilValue(showFormAtom);

  // fetch facts
  const factsQuery = useQuery(["facts", category], getFacts, {
    onSuccess: (data) => {
      category === "all"
        ? setFacts(data)
        : setFacts(data.filter((fact) => fact.category === category));
    },
  });

  return (
    <div className="container">

      <Header />
      {showForm ? <NewFactForm /> : null}
      <main className="main">
        <aside className="side-bar">
          <CategoryBtns setCategory={setCategory} />
        </aside>
        <section>
          {factsQuery.isLoading ? (
            <h1>Loading...</h1>
          ) : factsQuery.isError ? (
            <h1>Something went wrong</h1>
          ) : (
            <FactsList facts={facts} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
