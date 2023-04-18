import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://saleh-nc-news.onrender.com/api",
});

export const fetchArticles = () => {
  return articlesAPI.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const fetchArticleCard = (article_id) => {
  return articlesAPI.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
