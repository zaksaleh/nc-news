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

export const fetchComments = (article_id) => {
  return articlesAPI
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const addVotesPatch = (article_id, vote) => {
  return articlesAPI
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.article.votes;
    });
};

export const postComment = (article_id, body) => {
  return articlesAPI
    .post(`/articles/${article_id}/comments`, body)
    .then(({ data }) => {
      return data.comment[0];
    });

export const fetchArticlesByTopic = (topic) => {
  return articlesAPI.get(`/articles?topic=${topic}`).then(({ data }) => {
    console.log(data);
  });

};
