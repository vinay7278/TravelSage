import "./ContactformStyle.css";

function Contactform(){
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="MESSAGE" roe="4"></textarea>
                <button>Send message</button>
            </form>
        </div>
    )
}
export default Contactform;