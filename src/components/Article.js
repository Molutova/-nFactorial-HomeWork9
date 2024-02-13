import React from "react";

const divStyle = {
  width: "70vw",
  padding: "30px",
  backgroundColor: "lightgray",
  display: "flex",
  borderBottom: "2px solid darkgray",
  gap: "50px",
};

const Article = ({ article }) => {
  return (
    <div style={divStyle}>
      <div style={{}}>
        <p>{article.author}</p>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </div>
      <div>
        <img src={article.img} alt="Article Image" />
      </div>
    </div>
  );
};

export default Article;
