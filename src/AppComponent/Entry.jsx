export default function Entry(props) {
  return (
    <>
      <main>
        <section className="mainImgContainer">
          <img className="mainImg" src={props.img} alt={props.alt} />
        </section>
        <div className="content">
          <div className="contentHeading">
            <a href={props.locationLink}>
              <img
                className="locationLogo"
                src="location.png"
                alt="Location Logo Icon"
              />
            </a>

            <span className="countryName">{props.countryName}</span>

            <a className="locationLink" href={props.locationLink}>
              View on Google Maps
            </a>
          </div>
          <h2 className="locationName">{props.locationName}</h2>
          <p className="tripDate">{props.tripDate}</p>
          <p className="tripText">{props.tripText}</p>
        </div>
      </main>
    </>
  );
}
