import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import monshaatLogo from './assets/monshaatPic2.png'
import './App.css'
import { Features } from './data.js'
import Header from './components/Header.jsx'
import Feature from './components/Feature.jsx'
import TabButton from './components/TabButton.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'
import ContactUs from './components/ContactUs.jsx'
// import heroPic from './assets/Online world-rafiki.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header /><br/>
        
     <div style={{ height: '1650px' }} /> {/* Spacer */}

        <Hero />
       
        <About />
        <section className="features-section">
  <h2 className="section-title">FEATURES</h2>
  <div className="features-container">
    {Features.map((feature, index) => (
      <Feature key={index} {...feature} />
    ))}
  </div>
</section>

        <Services />
        <ContactUs/>
        <Footer />



        {/* <Feature {...Features[1]}/> */}
        {/* title="Startup title"
        description="this is a description"
        image= {monshaatLogo} */}


        {/* <Feature /> */}
        {/* <TabButton>Start Free Trail</TabButton>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
