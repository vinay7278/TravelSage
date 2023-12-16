import Navebar from "../components/Navebar";
import Hero from "../components/Hero"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function home(){
    return(
        <>
        <Navebar/>
        <Hero
        cName="hero"
        heroImg = "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1852&q=80"
        title="your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );
}

export default home