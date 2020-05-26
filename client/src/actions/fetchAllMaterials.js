import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';

const FetchAllMaterials = () => {
  const dispatch = useDispatch();
  const addMaterials = (materials) => ({
    type: 'STORE_ALL_MATERIALS',
    payload: materials,
  });
  useEffect(() => {
    (async () => {
      const materials = await Axios.get('http://localhost:5000/api/materials');
      dispatch(addMaterials(materials));
    })();
  }, []);
};

export default FetchAllMaterials;
