export default function Contact(props) {
  return (
    <>
      <div className="contacts">
        <article className="contact-card">
          <img src="../src/AppComponent/cat.png" alt={props.alt} />
          <h3>{props.name}</h3>
          <div className="info-group">
            <img src="../src/AppComponent/mobileLogo.png" alt="phone icon" />
            <p>{props.phone}</p>
          </div>
          <div className="info-group">
            <img src="../src/AppComponent/mailLogo.png" alt="mail icon" />
            <p>{props.email}</p>
          </div>
        </article>
      </div>
    </>
  );
}
