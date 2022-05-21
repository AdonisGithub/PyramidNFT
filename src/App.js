import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Wellcome} from './page/Wellcome';
import {MintPage} from "./page/MintPage";
import {OurBrand} from "./page/OurBrand";
import {PrivateChat} from "./page/PrivateChat";
import {Staking} from "./page/Staking";
import {CommunityBrand} from "./page/CommunityBrand";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Wellcome />} />
          <Route exact path="/mint" element={<MintPage />} />
          <Route exact path="/ourbrand" element={<OurBrand />} />
          <Route exact path="/privatechat" element={<PrivateChat />} />
          <Route exact path="/staking" element={<Staking />} />
          <Route exact path="/communitybrand" element={<CommunityBrand />} />
        </Routes>
      </Router>
  );
}
export default App;
