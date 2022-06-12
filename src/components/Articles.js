import React, { useEffect, useState } from "react";
import axios from "axios";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const url = "https://jsonplaceholder.typicode.com/posts";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  const fetchArticle = async () => {
    try {
      const response = await axios(url);
      const data = await response.data;
      //   console.log(data);
      setArticles(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchArticle();
    }, 1500);
  }, []);

  return (
    <div className="articles">
      <h2>All Articles</h2>

      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles &&
        [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme="light" />)}
      {/* [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme="dark" />)} */}
    </div>
  );
};

export default Articles;
