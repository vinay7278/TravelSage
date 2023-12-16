import "./TripStyles.css";
import TripData from "./TripData";
import trip1 from "../imgs/hawa1.jpg";
import trip2 from "../imgs/gold.jpg";
import trip3 from "../imgs/taj2.jpg";
function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={trip1}
                heading="Hawa Mahal In india "
                text="The Hawa Mahal in Jaipur is considered as one of the most iconic attractions of the city. The five-storey building looks like a honeycomb of a beehive and it is always windy inside, owing to the numerous windows and jharokhas. This amazing ventilation that the palace enjoys is the reason why it was named as the Hawa Mahal, which literally translates into the “Palace of the Winds”. The main purpose behind the construction of this palace was to allow the ladies of the royal family and the court to observe the busy streets of the Johari Bazaar from the many jharokhas of the palace, without being seen themselves. It has a curved architecture that leans at an 87 degree angle, and a pyramidal shape which has helpe"

                />

                <TripData
                image={trip2}
                heading="The GOlden Temple"
                text="The Golden temple is located in the holy city of the Sikhs, Amritsar. The Golden temple is famous for its full golden dome, it is one of the most sacred pilgrim spots for Sikhs. The Mandir is built on a 67-ft square of marble and is a two storied structure. Maharaja Ranjit Singh had the upper half of the building built with approximately 400 kg of gold leaf. The Golden Temple is surrounded by a number of other famous temples like the Durgiana Temple. The fourth Guru of Sikhs, Guru Ram Das, who had initially constructed a pool here, founded Amritsar, which houses the Golden Temple or Harmandir Sahib"
                />

                <TripData
                image={trip3}
                heading="The Taj Mahal"
                text="Taj Mahal is one of the Seven Wonders of the World. It is situated on the bank of river Yamuna in the city of Agra (India). Taj is a symbol of the great Mughal heritage of India and of the eternity of love. Experiencing The Taj Mahal is like a journey back to the magnificent Mughal Empire. This monument is simply the expression of emotions in a structural form, and so, it is regarded as a monument of love. So, it's a place worth visiting to memorize the love in your life. Mughal emperor Shah Jahan built the Taj Mahal monument in 1631 as a tribute to his loving wife, Mumtaz Mahal."
                />

            </div>
        </div>
    );
}
export default Trip;