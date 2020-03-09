import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const userId = localStorage.getItem("userId");

const EditPlant = () => {
  const [item, setItem] = useState([]);

  const putMessage = quote => {
    axiosWithAuth
      .put(
        `https://webpt9-water-my-plants.herokuapp.com/api/${userId}/plants/:id`,
        updatedData
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      {console.log("item", item)}
      {item.map(item => {
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

              <p>user id : {localStorage.getItem("userId")}</p>
              <div className="baseline" />

              <button className="md-button form-button">Add New Item</button>
            </form>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default EditPlant;
