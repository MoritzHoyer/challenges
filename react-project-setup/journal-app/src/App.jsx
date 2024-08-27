import Header from "./components/Header/Header";
import EntryForm from "./components/EntryForm/EntryForm";
import TabBar from "./components/TabBar/TabBar";
import EntryList from "./components/EntryList/EntryList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <EntryForm />
        <TabBar />
        <EntryList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
