import React, { useState } from "react";
import { axiosWithAuth} from './axiosWithAuth';
import axios from "axios";

const userId = localStorage.getItem("userId")

const initialItem = {
    "nickname": "",
    "species": "",
    "h2oFrequency": 1,
    "image": "",
    "user_id": localStorage.getItem("userId")
};


const AddPlantForm = props => {
    const [item, setItem] = useState(initialItem)
    const userId = localStorage.getItem("userId")

    const changeHandler = ev => {
      ev.persist();
        let value = ev.target.value;
        setItem({
          ...item,
          [ev.target.name]: ev.target.value
        });
      };


const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://webpt9-water-my-plants.herokuapp.com/api/${userId}/plants`, item)
      .then(res => {
          console.log(res);
          window.location.reload(false);
        })
      .catch(err => console.log(err.message));
  };

  return (
    <div>
      <h2>Add New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickname"
          onChange={changeHandler}
          placeholder="nickname"
          value={item.nickname}
        />
        <div className="baseline" />

        <input
          type="text"
          name="species"
          onChange={changeHandler}
          placeholder="species"
          value={item.species}
        />
        <div className="baseline" />

        <input
          type="string"
          name="h2oFrequency"
          onChange={changeHandler}
          placeholder="h2oFrequency"
          value={item.h2oFrequency}
        />
        <div className="baseline" />

        <input
          type="string"
          name="image"
          onChange={changeHandler}
          placeholder="image"
          value={item.image}
        />
        <div className="baseline" />

        <p>user id : {localStorage.getItem("userId")}</p>
        <div className="baseline" />

        <button className="md-button form-button">Add New Item</button>
      </form>
    </div>
  );
};

export default AddPlantForm;