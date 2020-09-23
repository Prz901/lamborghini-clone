import React from "react";

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Models from '../components/Models/Models'
import News from '../components/News/News'

export default function Home() {
  return (
    <div className="h-screen bg-black relative ">
      <div>
        <Header />
      </div>
      <main>
        <Hero />
        <Models />
        <News />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
