import "./Trip.css";
import TripData from "./TripData";
import img1 from "../assets/img-8.jpg";
import img2 from "../assets/img-9.jpg";
import img3 from "../assets/img-home.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>you can discover unique destination using Google Map</p>
      <div className="tripcard">
        <TripData
          img={img1}
          heading="Trip to Rajasthan"
          text="Rajasthan is a state of vibrant folk dance and music, gigantic forts and palaces, spicy food, colourful and large turbans, extensive golden sand desert, camels and rich handicraft. It is therefore, an incredible place to visit in India for enjoying unforgettable holidays. Sprawling in an area of 342239 sq km, Rajasthan is perfect for history buffs, culture aficionados, adventure lovers, wildlife enthusiasts, family vacations, honeymoon, and more."
        />
        <TripData
          img={img2}
          heading="Trip to Meghalaya"
          text="Home to an extraordinary diversity of people, Meghalaya is one of the picturesque tourist destinations of India which serves as a perfect getaway for those seeking peace and tranquillity. On visiting Meghalaya, tourists will find themselves surrounded by panoramic landscapes, cascading waterfalls, foggy hills, terraced slopes that is sure to soothe the minds of the weary travellers."
        />
        <TripData
          img={img3}
          heading="Trip to kerela"
          text="Encompassing serenity, Kerala is a charming South Indian destination that should be in every traveller’s bucket list. Adorned with the emerald backwaters, sprawling and lush tea estates, pristine hill stations, and azure Arabian Sea, Kerala tourism boasts numerous tourist places with which you will fall in love instantly.

        In North Kerala, districts like Kasaragod, Kannur, Wayanad, Kozhikode, and Malappuram have many attractions for the tourists. Wayanad offers a lovely hill station holiday whereas Kozhikode offers a great beach holiday and an opportunity of bird watching"
        />
      </div>
    </div>
  );
}
export default Trip;
