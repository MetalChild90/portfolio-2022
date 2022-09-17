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
          <li className=" Contact-item Contact-text-highlight">
            <Flower />
            metalchild90@gmail.com
          </li>
          <li className="Contact-item">
            <Flower />
            <a
              className="Contact-text-highlight"
              href="https://facebook.com/EihnarenNemezisEnavirienne"
            >
              https://facebook.com/EihnarenNemezisEnavirienne
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
