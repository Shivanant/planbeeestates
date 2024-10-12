import AboutUs from "./About"
import ContactUs from "./ContactUs"
import Home from "./Home"
import Products from "./Products"
import Navbar from "./Navbar"
import LogoTicker from "./LogoTicker"

export const LandingPage=()=>{
    return(
        <div>
        <section id="Home">
            <Home />
        </section>
        <section id="Products">
            <Products />
        </section>
        <section id="LogoTicker">
            <LogoTicker />
        </section>
        <section id="AboutUs">
            <AboutUs />
        </section>
        <section id="ContactUs">
            <ContactUs />
        </section>

        </div>
    )

}