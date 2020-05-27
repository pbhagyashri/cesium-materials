import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const FetchMaterialById = (id) => {
  const [material, setMaterial] = useState([]);

  useEffect(() => {
    (async () => {
      const material = await Axios(`http://localhost:5000/api/materials/${id}`);
      setMaterial(material);
    })();
  }, []);
  return material.data;
};

export default FetchMaterialById;
