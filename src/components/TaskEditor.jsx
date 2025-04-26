import "./TaskEditor.css";
import { useState } from "react";

let herokuURL = "http://192.168.0.106:81";

let TaskEditor = ({onAdd}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    userid: 1,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await fetch(herokuURL + "/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        onAdd();
      } else {
        console.error("Server Error", response.status);
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      e.preventDefault();
    }
  };
  return (
    <>
      <form
        onSubmit={(onSubmit) => handleSubmit(onSubmit)}
        className="form-group taskform"
      >
        <div>
          <input
            placeholder="Title"
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <input
            placeholder="Description"
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default TaskEditor;
