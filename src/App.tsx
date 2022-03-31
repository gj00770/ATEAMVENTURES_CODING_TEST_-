import React from 'react';
import Header from './header';
import Body from './body'
import './App.css';
import { useState, useEffect, useRef } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <div className="App"style={{ opacity:"1",visibility:"visible"}}>
     <Header />
     <Body />
    </div>
  );
}
export default App;
