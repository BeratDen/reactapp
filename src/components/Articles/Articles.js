import React, { Component } from "react";
import UserConsumer from "../../context";
import Article from "./Article";

export default class Articles extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { articles } = value;
          return (
            <div>
              {articles.map((article) => {
                return (
                  <Article
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    body={article.body}
                    author={article.author}
                  ></Article>
                );
              })}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
