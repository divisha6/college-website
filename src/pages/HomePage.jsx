import React from "react";
import IntroBar from "../components/IntroBar";

function HomePage() {
  return (
    <div>
      <h2
        style={{
          display: "flex",
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        Come join us as we create an empire of talented engineers!
      </h2>
      {/* <IntroBar pagename= "Home"/> */}
      <div style={{
        display: "flex",
        alignContent:"center",
        justifyContent: "center"
      }}>
      <img
        src="https://i.ytimg.com/vi/fX4cpfR9uXA/maxresdefault.jpg"
        style={{
            marginLeft: "15px",
            marginRight: "15px",
          width: "600px",
          
        }}
        alt=""
      />
      <h4
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        A NAAC accredited A+ college, we have won multiple awards and medals by
        virtue of our life-long commitment to perfection! Holy Cross,
        established in 1978, has given the engineering sector multiple gems and
        continues even now. With our impeccable faculty and our up-to-date
        facilities, students outperform their previous batches and take the
        college to bigger heights.{" "}
      </h4>
      </div>
      <footer
        style={{
          position: "fixed",
          color: "gray",
          marginTop: "auto",
          padding: "8px",
          display: "bottom",
          justifyContent: "center",
          alignContent: "center",
        }}
      >{`Copyright © Holy Cross College 2022`}</footer>
    </div>
  );
}

export default HomePage;
