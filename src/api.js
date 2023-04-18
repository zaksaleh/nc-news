import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://saleh-nc-news.onrender.com/api",
});

export const fetchArticles = () => {
  return articlesAPI.get("/articles").then((response) => {
    return response.data.articles;
  });
};
