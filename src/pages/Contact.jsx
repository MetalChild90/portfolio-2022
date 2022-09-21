import Flower from "../componenets/Flower";

function Contact() {
  return (
    <div className="Contact inner-wrapper">
      <h3 className="Contact-title">
        Thank you for taking the time to check out my portfolio!
      </h3>
      <div className="Contact-text">
        <p>If you are interested in hiring me, contact me through:</p>
        <ul>
          <li className=" Contact-item text-highlight">
            <Flower />
            metalchild90@gmail.com
          </li>
          <li className="Contact-item">
            <Flower />
            <a
              className="text-highlight"
              href="https://www.facebook.com/eihnaren.enavirienne"
            >
              https://www.facebook.com/eihnaren.enavirienne
            </a>
          </li>
        </ul>
      </div>
      <div className="Contact-goodbye">
        <h4>Have a good day! :) </h4>
      </div>
    </div>
  );
}

export default Contact;
