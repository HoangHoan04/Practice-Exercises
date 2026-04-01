import { useStore } from "./store/useStore";
import "./App.css";

function App() {
  const { count, inc } = useStore();

  return (
    <>
      <section id="center">
        <div>
          <h1>Count is {count}</h1>
        </div>
        <button className="counter" onClick={inc}>
          Increment
        </button>
      </section>

      <div className="ticks"></div>
    </>
  );
}

export default App;
