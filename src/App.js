import Todo from "./components/Todo";
import Baiana from "./components/Baiana";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <h1 className="pay">My Todos</h1>
        <Baiana />
        <div className="yo">
          <Todo text=" Hello World wide" />
          <Todo text=" Good Morning " />
          <Todo text=" Cleveland Rocks" />
        </div>
        <Baiana />
        <Footer />
      </div>
    </div>
  );
}

export default App;
