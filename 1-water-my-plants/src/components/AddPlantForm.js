import React, { useState } from "react";
import { axiosWithAuth} from './axiosWithAuth';

const initialItem = {
    "nickname": "",
    "species": "",
    "h2oFrequency": 1,
    "image": "",
    "user_id": 8
};


const AddPlantForm = props => {
    const [item, setItem] = useState(initialItem)

    const changeHandler = ev => {
      ev.persist();
        setItem({
          ...item,
          [ev.target.name]: ev.target.value
        });
      };


const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://webpt9-water-my-plants.herokuapp.com/api/8/plants`, item)
      .then(res => {
          console.log(res);
        })
      .catch(err => console.log(err.message));
  };

  return (
    <div>
      <h2>Add New Item</h2>
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

        <input
          type="string"
          name="user_id"
          onChange={changeHandler}
          placeholder="user_id"
          value={item.user_id}
        />
        <div className="baseline" />

        <button className="md-button form-button">Add New Item</button>
      </form>
    </div>
  );
};

export default AddPlantForm;