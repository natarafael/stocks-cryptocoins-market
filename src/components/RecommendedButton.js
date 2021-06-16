import React from "react";

import "./RecommendedButton.css";

const RecommendedButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button-rec">
      {children}
    </button>
  );
};

export default RecommendedButton;
