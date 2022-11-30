
import './App.css';
import { Home, Login, Public, Album } from "./page/public/";
import { Routes, Route } from 'react-router-dom';
import path from './untils/path';
function App() {
  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.ALBUM_TITLE_ID} element={<Album />} />
            <Route path={path.PLAYLIST_TITLE_ID} element={<Album />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
