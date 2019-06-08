import React from "react";
import "./App.css";
import Questions from "./components/questions";
import SubmitForm from "./components/submit-form";
import { Provider } from 'react-redux';
import store from './store'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Questions />
        <SubmitForm />
      </div>
    </Provider>
  );
}

export default App;
