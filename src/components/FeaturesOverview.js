import "./FeaturesOverview.css";

const FeaturesOverview = ({ feature }) => {
  return (
    <section className="features-overview">
      <ul className="features-list">
        <li className="feature-item">
          <p>{feature}</p>
        </li>
      </ul>
    </section>
  );
};

const DisplayFeature = () => {
  return (
    <div>
      <h1 className="section-title">Features Overview</h1>
      <div style={{display:"flex", justifyContent:"center",alignItems: "center",gap: "10rem",marginTop:"3vw",flexWrap:"wrap"}}>
        <FeaturesOverview feature="Express your ideas and thoughts in a supportive community" />
        <FeaturesOverview feature="Discover inspiring and diverse perspectives from others" />
        <FeaturesOverview feature="Engage in meaningful discussions and exchange feedback" />
        <FeaturesOverview feature="Connect with like-minded individuals and expand your network" />
      </div>
    </div>
  );
};

export default DisplayFeature;
