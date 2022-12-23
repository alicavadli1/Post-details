import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Post from './post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
