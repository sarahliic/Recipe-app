import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Catagories from "../components/Catagories";

function Home() {
  return (
    <div>
      {" "}
      {/* <Catagories /> */}
      <Veggie />
      <Popular />
    </div>
  );
}

export default Home;
