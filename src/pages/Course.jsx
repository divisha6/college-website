import React from "react";
import IntroBar from "../components/IntroBar";
import Card from "../components/Card.jsx";
import extc from "../components/images/extc.jpg";
import inft from "../components/images/inft.jpg";
import instru from "../components/images/instru.jpg";

export default function Course() {
  return (
    <div className="wrapper">
      <p
        style={{
          fontFamily: "sans-serif",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
        }}
      >
        We offer a wide variety of courses. Here is a sneak peek into them!
      </p>
      {/* <IntroBar pagename="Courses" /> */}
      <Card
        title="Information Technology"
        description="With the growing need for more IT sectors, we provide the best of
        faculties, facilities, and mentorship in this course."
        img={inft}
      />

      <Card
        title="Electronics and Telecommunication"
        description="One of the best performing courses, packed with the essentials of
            communication."
        img={extc}
      />

      <Card
        title="Instrumentation Engineering"
        description="Having mentored students in instrumentation for 30+ years, our students
            have proven to be the most skilled in the art of instrumentation."
        img={instru}
      />
    </div>
  );
}
