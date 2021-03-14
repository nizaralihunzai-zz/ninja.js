import React from 'react';
import UsersTable from './pages/UsersTable';
import './App.css';

const App = (props) => {
  return (
    <div className="container mt-3">
      <UsersTable usersList={props.rows} locale="da" rowsPerPage={5}/>
    </div>
  )
}

export default App;
