import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navbar';
import Photo from './components/photo';
import Cards from './components/cards';
import Season from './components/Season';
import Association from './components/association';
import Services from './components/services';
import Leadership from './components/Leadership';
import Testimonial from './components/testimonial';
import Blog from './components/blog';
import Contact from './components/contact';
import Footer from './components/footer';
import WorkSection from './components/WorkSection';
import BlogReadSection from './components/BlogReadSection';
import AIPhotoGallery from './components/AIPhotoGallery';
import AIVideoGallery from './components/AIVideoGallery';
import CompetitionRules from './components/CompetitionRules';
import Participants from './components/Participants';
import Achievements from './components/Achievements';
import Megauniform from './components/megaUniform';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainWebsite() {
  return (
    <>
      <Navbar />
      <div id="home" className="pt-20">
        <Photo />
      </div>
      <Cards />
      <Season />
      <Association />
      <Services />
      <Leadership />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WorkSection />} />
        <Route path="/main" element={<MainWebsite />} />
        <Route path="/gallery" element={<AIPhotoGallery />} />
        <Route path="/videos" element={<AIVideoGallery />} />
        <Route path="/competition" element={<CompetitionRules />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/mega" element={<Megauniform />} />
        <Route path="/blogreadsection/:id" element={<BlogReadSection />} /> 
      </Routes>
    </>
  );
}

export default App;
