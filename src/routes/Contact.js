import Navebar from "../components/Navebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";
function contact(){
    return(
        <>
        <Navebar/>
        <Hero
        cName="hero-mid"
        heroImg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        title="Contact"
        btnclass="hide"
        />
        <Contactform/>
        <Footer/>
        </>
    )
}

export default contact