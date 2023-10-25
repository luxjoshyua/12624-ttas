import { useState, useEffect } from 'react';

import Header from './components/Header'
import Hero from './components/Hero';
import Section from './components/Section'
import Footer from './components/Footer';



const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
  }, []);

  return (
    <>
      <main className="mx-auto relative">
        {/* integration top */}
        <Header />
        <article>
          <Hero />
          <Section />
        </article>
        {/* integration bottom */}
        <Footer />
      </main>


    </>
  );
};

export default App;
