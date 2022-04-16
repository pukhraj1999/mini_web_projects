import "./Form.css";
import Card from "./Card";
import { useState } from "react";
function Form() {
  const [data, setData] = useState({
    task: "",
    desc: "",
  });
  const [tasks, setTasks] = useState([]);
  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    tasks.push(data);
    setTasks(tasks);
    setData({ task: "", desc: "" });
    console.log(tasks);
  };
  return (
    <>
      <h1>Do it Card!!</h1>
      <div className="box">
        <form action="" onSubmit={onSubmitHandle}>
          <input
            type="text"
            name="task"
            value={data.task}
            onChange={onChangeHandle}
            placeholder="Task"
            required
          />
          <textarea
            name="desc"
            value={data.desc}
            onChange={onChangeHandle}
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            required
          ></textarea>
          <div className="btn_box">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className="card__box">
        {tasks.map((item, key) => {
          return <Card key={key} task={item.task} desc={item.desc} />;
        })}
      </div>
    </>
  );
}

export default Form;
