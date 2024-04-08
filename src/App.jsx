import React from 'react';
import HeroSection from './components/HeroSection';
import Provider from './context/Provider';
import Header from './components/Header';
const App = () => {
  return (
    <Provider>
      <Header/>
    <HeroSection/>
    </Provider>
  )
}

export default App