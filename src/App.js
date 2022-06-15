import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Wellcome} from './page/Wellcome';
import {MintPage} from "./page/MintPage";
import {OurProject} from "./page/OurProject";
import {PrivateChat} from "./page/PrivateChat";
import {Staking} from "./page/Staking";
import {CommunityProject} from "./page/CommunityProject";
import {HistoryandRoadmap} from "./page/HistoryandRoadmap";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Wellcome />} />
          <Route exact path="/mint" element={<MintPage />} />
          <Route exact path="/ourproject" element={<OurProject />} />
          <Route exact path="/privatechat" element={<PrivateChat />} />
          <Route exact path="/staking" element={<Staking />} />
          <Route exact path="/communityproject" element={<CommunityProject />} />
          <Route exact path="/historyandroadmap" element={<HistoryandRoadmap />} />
        </Routes>
      </Router>
  );
}
export default App;
