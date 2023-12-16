import Mountain1 from "../imgs/home1.jpg"
import Mountain2 from "../imgs/mount1.jpg"
import Mountain3 from "../imgs/taj1.jpg"
import Mountain4 from "../imgs/taj2.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyle.css"
const Destination = () => {
    return(
        <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tour give you the opportunity to see a lot within a time frame</p>
        <DestinationData
        className="first-des"
        heading="Gulmarg Jammu&Kashmir"
        text="Gulmarg has attracted millions of tourists throughout its existence with the scenic beauty of the Himalayan Mountains in the back drop. One of the main attractions in Gulmarg is the Gulmarg Gondola, the Highest Cable Car in the world."
        img1={Mountain1}
        img2={Mountain2}
        />

<DestinationData
        className="first-des-reverse"
        heading="The Taj Mahal"
        text="The Taj Mahal attracts from 7 to 8 million visitors annually, with more than 0.8 million from overseas. Most tourists visit in the cooler months of October, November and February. Polluting traffic is not allowed near the complex and tourists must either walk from parking lots or catch an electric bus. Taj Mahal is the epitome of grandeur and splendour, you cannot fathom the beauty of this white marbled monument unless you stand in front of it. As you approach Taj Mahal, it gradually becomes known to you that this is no ordinary monument, but a vision come to life! Moved by its beauty and the deep affection of Shah Jahan for Mumtaz, the Nobel Laureate Rabindranath Tagore called it "
        img1={Mountain3}
        img2={Mountain4}
        />
        </div>
    )
}
export default Destination