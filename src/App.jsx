import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Success from './Success';
import Failed from './Failed';
import  Home  from './Home';
export const base_url = "https://payment-server-2.vercel.app/"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
      </Routes>
    </Router>
  );
}

export default App;
