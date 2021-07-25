import "./App.css";
import Task from "./components/Task";
import DisplayTask from "./components/DisplayTask";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { useState } from "react";

const App = () => {
  const [states, setState] = useState({
    task: "",
    taskList: [],
  });
  return (
    <div>
      <Header title="Todo List" />
      {states.taskList.length > 0 && (
        <DisplayTask states={states} setState={setState} />
      )}
      <Task states={states} setState={setState} />
      <Footer />
    </div>
  );
};

export default App;
