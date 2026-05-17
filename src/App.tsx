import { BrowserRouter, Routes, Route } from 'react-router';

import { Container, Navbar, Footer } from './components/Layout';
import { Home, About, Works, Expertise, NotFound } from './components/PageSections';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/sushil-chhetri/'}>
      <Routes>
        <Route path="/" index element={<MainPage />} />
        <Route path="*" element={(
          <main>
            <NotFound />
          </main>
        )} />
      </Routes>
    </BrowserRouter>
  );
}

const MainPage = () => (
  <Container>
    <Navbar />
    <Container.Inner>
      <main>
        <Home />
        <About />
        <Works />
        <Expertise />
      </main>
      <Footer />
    </Container.Inner>
  </Container>
);