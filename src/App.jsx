import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Features from "./components/Features.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <main className="text-sn text-neutral-300 antialiased">
            <NavBar />
            <Hero />
            <HowItWorks />
            <Features />
            <Pricing />
            <Testimonials />
            <Footer />
        </main>
    )
}

export default App