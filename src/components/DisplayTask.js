import "./css/DisplayTask.css";

const DiplayTask = ({ states, setState }) => {
  const handleCheckBox = (event, index) => {
    console.log(states.taskList);
    let copyStates = { ...states };
    const tmp = copyStates.taskList[index];
    if (event.target.checked) {
      tmp["textStyle"] = "crossed";
      tmp["checkBox"] = true;
      copyStates.taskList.splice(index, 1);
      copyStates.taskList.push(tmp);
      console.log();
    } else {
      console.log("index " + index);
      tmp["textStyle"] = "none";
      tmp["checkBox"] = false;
      copyStates.taskList.splice(index, 1);
      copyStates.taskList.unshift(tmp);
    }
    setState(copyStates);
  };
  const handleEditButton = (event, index) => {
    const copyStates = { ...states };
    const tmp = copyStates.taskList[index];
    tmp.edit = true;
    setState(copyStates);
  };
  const handleSaveButton = (event, index) => {
    const copyStates = { ...states };
    const tmp = copyStates.taskList[index];
    tmp.edit = false;
    setState(copyStates);
  };
  const handleUpdateText = (event, index) => {
    const copyStates = { ...states };
    const tmp = copyStates.taskList[index];
    tmp.text = event.target.value;
    setState(copyStates);
    console.log(states.taskList);
  };

  // const search = () => {
  //   const regex = new RegExp(states.task, "i");
  //   const limit = 10;
  //   const result = [];
  //   for (let i = 0; i < states.taskList; i++) {
  //     if(regex.test(task.taskList[i].text) && result.length < 20){
  //       result.push()

  //     }
  //   }
  // };
  return (
    <div>
      {states.taskList
        .filter((elem) => {
          const regex = new RegExp(states.task, "i");
          return regex.test(elem.text);
        })
        .map((elem, index) => {
          const handleCheck = (event) => {
            handleCheckBox(event, index);
          };
          const handleBin = (event) => {
            let copyStates = { ...states };
            copyStates.taskList.splice(index, 1);
            setState(copyStates);
          };
          const handleEdit = (event) => {
            handleEditButton(event, index);
          };
          const handleSave = (event) => {
            handleSaveButton(event, index);
          };
          const handleUpdate = (event) => {
            console.log(event.target.value);
            handleUpdateText(event, index);
          };
          return (
            <div className="main" key={index}>
              <input
                type="checkbox"
                checked={elem.checkBox}
                onChange={handleCheck}
              />
              <input
                type="text"
                value={elem.text}
                onChange={handleUpdate}
                readOnly={!elem.edit}
              />
              {/* <span
                className={elem.textStyle}
                contentEditable={elem.edit}
                onChange={handleUpdate}
                inputMode="text"
              >
                {elem.text}
              </span> */}
              <i className="fas fa-trash-alt" onClick={handleBin}></i>

              <button onClick={handleEdit}>edit</button>

              <button onClick={handleSave}>save</button>
            </div>
          );
        })}
    </div>
  );
};
export default DiplayTask;
