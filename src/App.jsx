import Header from "./AppComponent/Header";
import Entry from "./AppComponent/Entry";
//import Contact from "./AppComponent/Contact";
//import Joke from "./AppComponent/Joke";
export default function App() {
  return (
    //   img,alt, countryName, locationLink, locationName, tripDate, tripText
    <>
      <Header />
      <Entry
        img="https://scrimba.com/links/travel-journal-japan-image-url"
        alt="mount fuji"
        countryName="JAPAN"
        locationName="Mount Fuji"
        locationLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        tripDate="12 Jan, 2021 - 24 Jan, 2021"
        tripText="  Mount Fuji is the tallest mountain in Japan, standing at 3,776
        meters (12,380 feet). Mount Fuji is the single most popular tourist
        site in Japan, for both Japanese and foreign tourists."
      />
      <Entry
        img="aust.png"
        alt="Sydney Opera House"
        countryName="AUSTRAIA"
        locationName="Sydney Opera House"
        locationLink="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
        tripDate="27 May, 2023 - 8 Jun, 2023"
        tripText="The Sydney Opera Houseis a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbor it is often regardedas one of the 20th century's most famous and distictive buildings."
      />
      <Entry
        img="fjord.png"
        alt="Geirangerfjord"
        countryName="NORWAY"
        locationName="Geirangerfjord"
        locationLink="https://www.google.com/maps/place/Geirangerfjord/@62.1047507,6.9098347,11z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
        tripDate="01 Oct, 2024 - 18 Nov, 2024"
        tripText="The Geiranger Fjord is a fjord in the Sunnmore region of More og Romsdal country, Norway. It is located entirely in the Stranda Municipality"
      />
      {/* <Contact
        img=""
        alt="Photo of Mr. Whiskerson"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img=""
        alt="Photo of Fluffykins"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img=""
        alt="Photo of Felix"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img=""
        alt="Photo of Pumpkin"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      /> */}

      {/* <Joke /> */}
    </>
  );
}
