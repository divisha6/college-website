import React from "react";
import IntroBar from "../components/IntroBar";
import FacultyCard from "../components/FacultyCard";
import pooja_shetty from "../components/images/pooja_shetty.png"
import vinita_mishra from "../components/images/vinita_mishra.png"
import vidya_pujari from "../components/images/vidya_pujari.png"

function Faculty() {
  return (
    <div>
      {/* <IntroBar pagename="Faculty" /> */}

    <p style={{display:"flex", justifyContent:"center", fontWeight:"bold", fontFamily: "sans-serif"}}>
        Meet our talented and precious faculty!
    </p>
      <FacultyCard name="Pooja Shetty" image={pooja_shetty} dept="Information Technology" />

      <FacultyCard name="Vidya Pujari" image={vidya_pujari} dept="Information Technology" />

      <FacultyCard name="Vinita Mishra" image={vinita_mishra} dept="Information Technology" />
    </div>
  );
}

export default Faculty;
