import { useState } from "react";
import { useRecoilValue } from "recoil";
import CategoryFilter from "./components/CategoryFilter";
import FactsList from "./components/FactsList";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import {  showFormAtom } from "./recoil/facts.atom";

function App() {
  const showForm = useRecoilValue(showFormAtom);
  const [category, setCategory] = useState("all");

  return (
    <div className="container">
      <Header />
      {showForm ? <NewFactForm /> : null}
      <main className="main">
        <aside className="side-bar">
          <CategoryFilter setCategory={setCategory} />
        </aside>
        <section>
          <FactsList category={category} />
        </section>
      </main>
    </div>
  );
}

export default App;
