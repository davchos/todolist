import "./css/Task.css";

const Task = ({ states, setState }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (states.task !== "") {
      const statesCopy = { ...states };
      statesCopy.taskList.push({
        checkBox: false,
        text: statesCopy.task,
        textStyle: "none",
        edit: false,
      });
      statesCopy.task = "";
      setState(statesCopy);
    }
  };

  const handTaskChange = (event) => {
    let stateCopy = { ...states };
    stateCopy = {
      ...states,
      task: event.target.value,
    };
    setState(stateCopy);
  };
  return (
    <div className="main-task">
      {/* <div className="container"> */}
      <form onSubmit={handleSubmit}>
        <input
          minLength="1"
          maxLength="100"
          size="100"
          type="text"
          id="task"
          value={states.task}
          placeholder="Enter your task here"
          onChange={handTaskChange}
        />
        <input type="submit" value="Add Task" />
      </form>
      {/* </div> */}
    </div>
  );
};
export default Task;
