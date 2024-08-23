import "./App.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>In Hamburg sagt man Moin.</h1>
      <p>My first custom React component with multiple HTML elements.</p>
      <ul>
        <li>Viel Regen</li>
        <li>Viel Wind</li>
        <li>Wenig Sonne</li>
        <li>...aber geil</li>
      </ul>
    </article>
  );
}
