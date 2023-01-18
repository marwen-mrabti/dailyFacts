import React from "react";
import appLogo from "../assets/images/logo.png";
import { useRecoilState } from "recoil";
import { showFormAtom } from "../recoil/facts.atom";

const Header = () => {
  const [showForm, setShowForm] = useRecoilState(showFormAtom);

  return (
    <header className="header">
      <div className="logo">
        <img src={appLogo} alt="Today I Learned Logo" />
        <h1>Today I Learned</h1>
      </div>
      <button
        className="btn btn-large"
        id="share-btn"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Close" : "Share a fact"}
      </button>
    </header>
  );
};

export default Header;
