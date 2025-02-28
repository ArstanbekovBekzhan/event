import React from 'react';
import './App.css';
import Header from './components/header/header';
import FirstContent from './components/first-section/FirstSection';
import CountdownTimer from './components/timerSection/timer';
import Map from './components/map/map'
import Contacts from './components/contacts/Contacts';

export const App = () => {
  return (
    <div>
      <Header />
      <FirstContent />
      <CountdownTimer/>
      <Map />
      <Contacts/>
    </div>
  );
};

export default App; 
