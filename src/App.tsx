import Navbar from './components/Navbar.tsx'
import Header from './components/Header.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Services from './components/Services.tsx'
import Portfolio from './components/Portfolio.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import './App.css'

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <main>
                <About />
                <Skills />
                <Services />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
