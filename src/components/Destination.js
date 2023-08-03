import img1 from "../assets/img-4.jpg";
import img2 from "../assets/img-5.jpg";
import img3 from "../assets/img-6.jpg";
import img4 from "../assets/img-7.jpg";

import "./Destination.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular destination</h1>
      <p>Tours gives you Opportunity to see a lot within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="The Taal Volcano at Tagaytay is often described as ‘an island within
    a lake within an island within a lake’ because of its rather
    interesting geological formation. The larger of the lakes is in the
    Taal Caldera, which was formed by ancient eruptions."
        img1={img1}
        img2={img2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total. Of course there is the peak, which, although not really spectacular in terms of views, has a refreshing feel. Finally, there are excellent sidetrip choices such as the unique Naambon Falls and the acclaimed Laiya beach."
        img1={img3}
        img2={img4}
      />
    </div>
  );
};
export default Destination;
