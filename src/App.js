import React from 'react';
import CountdownTimer from './CountdownTimer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// Set your target date here

function App() {
 const targetDate = new Date("2025-09-02T00:00:00"); // Current target date is specifed here in US date format (YYYY-MM-DD)

 return (
   <div className="App">
     <header className="App-header">
       <CountdownTimer targetDate={targetDate} />
     </header>
   </div>
 );
}

export default App;
