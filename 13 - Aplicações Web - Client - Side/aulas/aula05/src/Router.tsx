import { Route, Routes } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { NewPix } from './pages/NewPix';
import { PixList } from './pages/PixList';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/pix" element={<PixList />} />
      <Route path="/newPix" element={<NewPix />} />
    </Routes>
  );
}