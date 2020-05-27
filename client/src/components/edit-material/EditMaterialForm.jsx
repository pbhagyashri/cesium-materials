import React, { useState, useEffect } from 'react';
import FetchMaterialById from '../../actions/fetchMaterialById';
import Axios from 'axios';

import MaterialCard from '../all-materials/MaterialCard';
import '../all-materials/AllMaterials.scss';
import '../new-material/NewMaterialForm.scss';

const EditMaterialForm = (props) => {
  const id = props.history.location.pathname.split('/').pop();
  const material = FetchMaterialById(id);

  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [density, setDensity] = useState(0);
  const [cost, setCost] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editedMaterial = await Axios.put(
      `http://localhost:5000/api/materials/${id}`,
      {
        name: name,
        identifier: identifier,
        density: density,
        cost: cost,
      }
    );
    console.log('editedMaterial', editedMaterial);
  };

  return (
    <div className='new-material'>
      <div className='all-mats-cont'>
        {material ? <MaterialCard material={material} /> : ''}
      </div>
      <form className='form'>
        <label className='form__label'>Name</label>
        <input
          type='text'
          name='name'
          value={name}
          className='form__input'
          onChange={(event) => setName(event.target.value)}
        />
        <label className='form__label'>Identifier</label>
        <input
          type='text'
          name='identifier'
          value={identifier}
          className='form__input'
          onChange={(event) => setIdentifier(event.target.value)}
        />
        <label className='form__label'>Density</label>
        <input
          type='text'
          name='density'
          value={density}
          className='form__input'
          onChange={(event) => setDensity(event.target.value)}
        />
        <label className='form__label'>Cost</label>
        <input
          type='text'
          name='cost'
          value={cost}
          className='form__input'
          onChange={(event) => setCost(event.target.value)}
        />
        <input type='submit' value='Create Material' onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default EditMaterialForm;
