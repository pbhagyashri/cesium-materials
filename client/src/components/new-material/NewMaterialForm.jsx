import React from 'react';
import './NewMaterialForm.scss';

const NewMaterialForm = () => {
  render(
    <div>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' />

        <label htmlFor='identifier'>Identifier</label>
        <input type='text' />

        <label htmlFor='density'>Density</label>
        <input type='text' />

        <label htmlFor='cost'>Cost</label>
        <input type='text' />

        <input type='submit' />
      </form>
    </div>
  );
};

export default NewMaterialForm;
