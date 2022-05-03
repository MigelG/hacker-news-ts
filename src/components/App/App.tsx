import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import NewsPage from '../NewsPage/NewsPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import NewsList from '../NewsList/NewsList';
import './App.css';
import { useState } from 'react';
import { INews } from '../../interfaces/INews';

function App() {

  const [newsList, setNewsList] = useState<INews[]>([]);

  return (
    <div className='page'>
      <Header />

      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <NewsList
                newsList={newsList}
                setNewsList={setNewsList} />
            } />

          <Route
            path='/:id'
            element={
              <NewsPage />
            } />

          <Route
            path='*'
            element={
              <NotFoundPage />
            } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
