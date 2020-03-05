import React, { useState, useEffect } from 'react';

import AddPlantForm from './AddPlantForm';
import GetPlants from './GetPlants';

const Profile = () => {

    return(
        <>
        <AddPlantForm />
        <GetPlants />
        </>
    )
}

export default Profile;