import React from 'react';
import './App.css';
import Questions from './components/questions';
import SubmitForm from './components/submit-form';

function App() {
  return (
    <div className="App">
      <Questions />
      <SubmitForm />
    </div>
  );
}

export default App;
