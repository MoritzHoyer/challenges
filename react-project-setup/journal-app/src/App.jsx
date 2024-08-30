import "./App.css";
import EntriesSection from "./components/EntriesSection/EntriesSection.jsx";
import EntryForm from "./components/EntryForm/EntryForm.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm />
        <EntriesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
