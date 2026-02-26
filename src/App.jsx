import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="app">
      <h1>CV Builder</h1>

      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;