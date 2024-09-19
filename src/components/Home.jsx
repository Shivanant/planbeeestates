import "../css/Home.css";

const Home = () => {
  return (
    <section class="home" id="home">
      <div class="main-box">
        <div className="content">
          <h1>Your Search For Dream House Begins Here</h1>
          <p>
            Discover the perfect home for your family with PlanBeeEstate. We
            offer the best listings for sale and rent in your desired location.
          </p>
        </div>
      </div>
      <div className="content-btn">
        <a href="#Projects" className="btn">
          Browse Properties
        </a>
        {/* <button href="#Projects" className="btn">Contact Us</button> */}
      </div>
    </section>
  );
};

export default Home;
