import React from 'react';
import './AllMaterials.scss';
import { Link } from 'react-router-dom';

const MaterialCard = ({ material }) => {
  return (
    <div>
      <h2>
        Material:{' '}
        <span className='all-mats-cont__span'>
          {material.name ? material.name : ''}
        </span>
      </h2>
      <p>
        Identifier:{' '}
        <span className='all-mats-cont__span'>
          {material.identifier ? material.identifier : ''}
        </span>
      </p>
      <p>
        Density:{' '}
        <span className='all-mats-cont__span'>
          {material.density ? material.density.$numberDecimal : ''}
        </span>
      </p>
      <p>
        Cost:{' '}
        <span className='all-mats-cont__span'>
          {material.cost ? material.cost.$numberDecimal : ''}
        </span>
      </p>
      <Link
        to={`/materials/${material._id}`}
        className='all-mats-cont__button all-mats-cont__button--edit'
      >
        EDIT
      </Link>
      <a className='all-mats-cont__button all-mats-cont__button--delete'>
        DELETE
      </a>
    </div>
  );
};

export default MaterialCard;
