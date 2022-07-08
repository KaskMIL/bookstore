import { Route, Routes } from 'react-router-dom';
import BookContainer from './components/BookContainer/BookContainer';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
