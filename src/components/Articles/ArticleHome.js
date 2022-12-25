import React, { Component } from "react";
import Header from "../Header";
import AddArticle from "./AddArticle";
import Articles from "./Articles";

export default class ArticleHome extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container mt-5">
          <h1>Makaleler</h1>
          <AddArticle></AddArticle>
          <hr />
          <Articles></Articles>
        </div>
      </div>
    );
  }
}
