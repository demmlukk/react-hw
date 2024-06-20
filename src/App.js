import {Routes, Route} from 'react-router-dom';
import './App.css';

import AlbumList from "./components/AlbumList";
import PhotoList from "./components/PhotoList";
import UserList from "./components/UserList";

function App() {
  return (
      <div className="app-container">
          <Routes>
              <Route path='/' element={<UserList/>}/>
              <Route path='/user/:userId/albums' element={<AlbumList/>}/>
              <Route path='/album/:albumId/photos' element={<PhotoList/>}/>
          </Routes>
      </div>
  );
}

export default App;
