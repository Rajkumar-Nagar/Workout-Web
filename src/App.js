import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResisterPage from './ResisterPage';
import LoginPage from './LoginPage';
import GoalPage from './GoalPage';
import WorkOutTracker from './WorkOutTracker';
import InitaialScreen from './InitaialScreen';
import WorkOutSchedual from './WorkOutSchedual';


function App() {
  return (

    <BrowserRouter>
      <Routes  >
        <Route path="/" element={<InitaialScreen />}/>
        <Route path="/ResisterPage" element={<ResisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/GoalPage" element={<GoalPage />} />
        <Route path="/WorkOutTracker" element={<WorkOutTracker />} />
        <Route path="/WorkOutSchedual" element={<WorkOutSchedual />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
