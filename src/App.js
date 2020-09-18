import React from 'react';
import './App.css';
import UserInfo from './userinfo';

function App() {
  return (
    <div className="App">
      <UserInfo userName="'Usama Sadiq'" curriculumName="'CNC Course'" assignmentNo="'Second Assignment'" />
      <UserInfo userName="'Ahsan Khan'" curriculumName="'IOT Course'" assignmentNo="'Second Assignment'" />
    </div>
  );
}

export default App;
