import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState({});
  let params = useParams();

  //api
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  // render api
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <div>
      <div>{details.title}</div>
    </div>
  );
}

export default Recipe;
