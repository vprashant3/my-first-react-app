import React from "react";
import "./App.scss";
import { observer, useLocalObservable} from "mobx-react";

const App = observer(() => {
  const store = useLocalObservable({
    count: 1,
    addOne() {
      store.count++;
    },
    subtractOne() {
      store.count--;
    },
  });
  function addOneHandle() {
    store.addOne();
  }

  function subtractOneHandle() {
    store.subtractOne();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count : {store.count}</h1>
        <button onClick={addOneHandle}>Add One</button>
        <button onClick={subtractOneHandle}>Subtrack One</button>
      </header>
    </div>
  );
});

export default App;
