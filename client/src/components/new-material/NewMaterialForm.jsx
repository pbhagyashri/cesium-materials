import React, { useState } from 'react';

import Axios from 'axios';
import { useDispatch } from 'react-redux';

const NewMaterialsForm = () => {
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [density, setDensity] = useState(0);
  const [cost, setCost] = useState(0);

  const dispatch = useDispatch();
  const addMaterial = (material) => ({
    type: 'ADD_NEW_MATERIALS',
    payload: material,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMaterial = await Axios.post(
      'http://localhost:5000/api/materials/new',
      {
        name: name,
        identifier: identifier,
        density: density,
        cost: cost,
      }
    );
    console.log('new', newMaterial);
    dispatch(addMaterial(newMaterial.data));
  };

  return (
    <div className='new-material'>
      <form>
        <label>Name</label>
        <input
          type={'text'}
          name={'name'}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Identifier</label>
        <input
          type='text'
          name='identifier'
          value={identifier}
          onChange={(event) => setIdentifier(event.target.value)}
        />
        <label>Density</label>
        <input
          type='text'
          name='density'
          value={density}
          onChange={(event) => setDensity(event.target.value)}
        />
        <label>Cost</label>
        <input
          type='text'
          name='cost'
          value={cost}
          onChange={(event) => setCost(event.target.value)}
        />
        <input type='submit' value='Create Material' onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default NewMaterialsForm;
