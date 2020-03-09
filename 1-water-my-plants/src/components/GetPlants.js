import React, { useState, useEffect } from "react";
import { axiosWithAuth} from './axiosWithAuth';

const userId = localStorage.getItem("userId")



const GetPlants = () => {

    const [item, setItem] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get(`https://webpt9-water-my-plants.herokuapp.com/api/${userId}/plants`)
        .then (res => {
            console.log(res);
            setItem(res.data)
        })  
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
    {console.log("item", item)}
    {item.map(item => {
        return(
            <div key="item.id">
                <p>{item.id}</p>
                <p>{item.nickname}</p>
                <p>{item.species}</p>
                <p>{item.h20Frequency}</p>
                <img src="item.image" alt={item.nickname}></img>

            </div>
            
        )
    })}
    <div>
  
    


    </div>
 
    </div>
  );
};

export default GetPlants;