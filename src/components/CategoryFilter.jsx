import React from "react";
import { useRecoilValue } from "recoil";
import { categoriesAtom } from "../recoil/facts.atom";

const CategoryFilter = ({ setCategory }) => {
  const CATEGORIES = useRecoilValue(categoriesAtom);

  return (
    <ul id="categories-list">
      <li className="category">
        <button className="btn btn-all" onClick={() => setCategory("all")}>
          All
        </button>
      </li>
      {CATEGORIES.map((category, index) => (
        <li key={index} className="category ">
          <button
            className="btn btn-category opacity-90"
            style={{ backgroundColor: category.color }}
            onClick={() => setCategory(category.name)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryFilter;
