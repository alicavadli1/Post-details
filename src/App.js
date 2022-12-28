import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Post from './post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
