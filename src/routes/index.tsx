import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Explore from '@/pages/Explore';
import Community from '@/pages/Community';
import Insights from '@/pages/Insights';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import NotFound from '@/pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/community" element={<Community />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}