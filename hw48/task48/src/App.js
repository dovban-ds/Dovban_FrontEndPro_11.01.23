import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Aside from "./components/SideBar/Aside";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex-box">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
