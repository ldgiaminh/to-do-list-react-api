import React, { useState } from "react";

function FormSubmit(props) {
  const [inputTitle, setInputTitle] = useState("");

  const [inputCate, setInputCate] = useState("");

  const handleChangeTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleChangeCate = (e) => {
    setInputCate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      title: inputTitle,
      cate: inputCate,
    });

    setInputTitle("");
    setInputCate("");
  };

  return (
    <form className="Form-Sub" onSubmit={handleSubmit}>
      <div className="input-group">
        <span className="input-group-text input-group-text-border">To Do</span>
        <input
          type="text"
          className="form-control"
          placeholder="Add to do..."
          value={inputTitle}
          name="title"
          onChange={handleChangeTitle}
          required
        />

        <span
          className="input-group-text"
          style={{ borderLeft: 0, borderRight: 0 }}
        >
          Category
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Add category..."
          value={inputCate}
          name="cate"
          onChange={handleChangeCate}
          required
        />
        <button className="Btn-Add">Add</button>
      </div>
    </form>
  );
}

export default FormSubmit;
