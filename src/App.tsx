import { useState, useEffect } from 'react';

import Header from './components/Header'
import Hero from './components/Hero';
import Video from './components/Video';
import Chapter2 from './components/Chapter2'
import Chapter3 from './components/Chapter3'
import Footer from './components/Footer';



const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
  }, []);

  return (
    <>
      
      
      <main className="mx-auto relative max-w-[1920px]">
      <Video />
        <Header />
        <article>
          <Hero />
          <Chapter2 />
          <Chapter3 />
        </article>
        <Footer />
      </main>


    </>
  );
};

export default App;
