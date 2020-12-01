import React from "react";
import "./Article.scss";

const Article = (props) => {
  return (
    <section className={`article ${props.transparent ? "transparent" : ""}`}>
      {props.title ? <h1>{props.title}</h1> : ""}
      <div className="article-grid">
        <div
          className="div-img"
          style={{ order: `${props.pictureFirst ? "1" : "2"}` }}
        >
          <img src={props.image} alt="" />
        </div>
        <div
          className="div-text"
          style={{ order: `${props.pictureFirst ? "2" : "1"}` }}
        >
          {props.subTitle ? <h2 className="subtitle">{props.subTitle}</h2> : ""}

          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Article;
