import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <main className="loading-layout">
      <section className="loading-flex">
        <CircularProgress color="secondary" className="loading-icon" />
      </section>
    </main>
  );
};

export default Loading;
