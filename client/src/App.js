import React from 'react';
import FetchAllMaterials from './actions/fetchAllMaterials';
import AllMaterials from './components/all-materials/AllMaterials';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import NewMaterialsForm from './components/new-material/NewMaterialForm';
import EditMaterialForm from './components/edit-material/EditMaterialForm';
import './App.scss';

function App() {
  FetchAllMaterials();

  return (
    <div>
      <Router>
        <Header />

        <Route exact path='/' component={NewMaterialsForm} />
        <Route exact path='/' component={AllMaterials} />
        <Route exact path='/materials/:id' component={EditMaterialForm} />
      </Router>
    </div>
  );
}

export default App;
