import "./App.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="articel__title">Here we react again</h2>
      <label htmlFor="articleInput">Type here:</label>
      <input id="articleInput" type="text" />
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Bootcamp"
      >
        Ab ins Bootcamp, Kristoffer &hearts;
      </a>
    </article>
  );
}
