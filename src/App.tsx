import { BrowserRouter, Routes, Route } from 'react-router';

import { Container, Main, Navbar, Footer } from './components/Layout';
import { Home, About, Works, Services, NotFound } from './components/PageSections';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/sushil-chhetri/'}>
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const MainPage = () => (
  <>
    <Container>
      <Navbar />
      <Container.Inner>
        <Main>
          <Home />
          <About />
          <Works />
          <Services />
        </Main>
        <Footer />
      </Container.Inner>
    </Container>
  </>
);