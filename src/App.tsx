import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, NotFoundPage } from './pages';
import { GlobalStyles } from './components';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
