import "./ContactForm.css"

function ContactForm(){
  return(
        <div className="form-container">
          <h1>Send A Message To Us!</h1>
          <form>
          <input placeholder ="Name"/>
          <input placeholder ="email"/>
          <input placeholder ="Subject"/>
          <textarea placeholder = "Messages" rows="4"></textarea>
          <button> Send Message</button>
          </form>
        </div>
  )
}

export default ContactForm;