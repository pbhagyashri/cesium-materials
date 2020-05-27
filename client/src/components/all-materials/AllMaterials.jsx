import React from 'react';
import { useSelector } from 'react-redux';
import './AllMaterials.scss';
import MaterialCard from './MaterialCard';

const AllMaterials = () => {
  const response = useSelector((state) => state.materials);

  return (
    <main>
      <ul className='all-mats-cont'>
        {response.allMaterials
          ? response.allMaterials.map((mat) => (
              <li className='all-mats-cont__card' key={mat._id}>
                <MaterialCard material={mat} className='all-mats-cont' />
              </li>
            ))
          : 'Loading..'}
      </ul>
    </main>
  );
};
export default AllMaterials;
