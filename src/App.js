import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { listCitys } from './graphql/queries';


function App() {
  const [citys, setCities] = useState([]);
  
  useEffect(() => {getCities();},[]);
  
  async function getCities(){
    const data = await API.graphql({query: listCitys});
    setCities(data.data.listCitys.items);
  }

  return (
    <div className="App">
      <h1>MBIE electricity prices</h1>
      <select name="city" id="city">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
      </select>
      
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
