
import { useState } from 'react';
import './App.css';
import { Header, Footeer } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {
 
  return (
    <div className="App dark:bg-slate-800">
      <Header />
      <AllRoutes  />
      <Footeer />
    </div>
  );
}

export default App;
