import React, { useState, useEffect } from 'react';
import FetchMaterialById from '../../actions/fetchMaterialById';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import MaterialCard from '../all-materials/MaterialCard';
import '../all-materials/AllMaterials.scss';

const EditMaterialForm = (props) => {
  const id = props.history.location.pathname.split('/').pop();
  const material = FetchMaterialById(id);

  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [density, setDensity] = useState(0);
  const [cost, setCost] = useState(0);

  const dispatch = useDispatch();
  const addMaterial = (material) => ({
    type: 'UPDATE_MATERIALS',
    payload: {
      name: name,
      identifier: identifier,
      density: density,
      cost: cost,
    },
  });

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
    dispatch(addMaterial(editedMaterial.data));
  };

  return (
    <div className='new-material'>
      <div className='all-mats-cont'>
        {material ? <MaterialCard material={material} /> : ''}
      </div>
      <form className='new-material__form'>
        <label>Name</label>
        <input
          type='text'
          name='name'
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

export default EditMaterialForm;
