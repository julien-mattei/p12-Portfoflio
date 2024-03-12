import './style.css'

function Contact () {
    return <>
        <h2 className="contact-title" id="contact">Contact me</h2>
        <form className="contact-form ">
                <label>
                    Firstname
                    <input type="text" className="input-simple"/>
                </label>
                <label>
                    Lastname
                    <input type="text" className="input-simple"/>
                </label>
                <label>
                    Mail 
                    <input type="email" className="input-simple"/>
                </label>
                <label>
                    Informations
                    <input type="textarea" className="input-large"/>
                </label>
            <button>Envoyer</button>
        </form>
    </>
}

export default Contact