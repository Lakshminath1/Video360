import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css'
import Home from './app/pages/Home';
import Channels from './app/pages/Channels';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upload from './app/pages/Upload';
import Settings from './app/pages/Settings';
import WatchLater from './app/pages/WatchLater';
import MyAccount from './app/pages/MyAccount';
import SubscriptionMembers from './app/pages/SubscriptionMembers';
import Player from './app/pages/Player';
import UploadVideo from './app/pages/UploadVideo';
import Login from './app/auth/Login';
function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Channels" element={<Channels/>}/>
          <Route path="/Upload" element={<Upload/>}/>
          <Route path="/WatchLater" element={<WatchLater/>}/>         
          <Route path="/Settings" element={<Settings/>}/> 
          <Route path="/MyAccount" element={<MyAccount/>}/>
          <Route path="/SubsMembers" element={<SubscriptionMembers/>}/> 
          <Route path="/Player" element={<Player/>}/>
          <Route path="/UploadVideo" element={<UploadVideo/>}/>
        </Routes>
        </BrowserRouter>

        
    </div>
  );
}

export default App;
