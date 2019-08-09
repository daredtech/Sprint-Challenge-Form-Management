// import React from 'react';
import React from 'react';
import RegistrationForm from './Components/RegistrationForm.js';
import Collection from './Components/Collection';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <p>Sprint Challenge: Form Management</p>
      </header>

      <div className='custom-components'> 
      <RegistrationForm />
      <Collection/>
      </div>


      
    </div>
  );
}

export default App;
