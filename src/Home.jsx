import React from "react";
import "./app.css";
const App = () => {
  return (
    <div>
      <Header />
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="img1">
      <img
        src="https://storage.googleapis.com/pod_public/1300/229900.jpg"
        alt=""
      />
      <h2>Naruto</h2>
    </div>
  );
};

const Header = () => {
  return (
    <div class="header">
      <div className="img">
        <img
          src="https://unread.today/files/site_meta/b809740220f5b5b4749e697e42df987b.png"
          alt=""
        />
        <input type="text" placeholder="Hailt hiih" />
      </div>
      <div className="next-news">
        <a href="#">daraagiin niitlel TECHWORM Margaash orno</a>
      </div>
    </div>
  );
};

export default App;
