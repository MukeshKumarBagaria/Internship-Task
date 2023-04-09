import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ModeChoice = () => {
  const location = useLocation();
  const { selectedQ1, selectedQ2 } = location.state;
  const [jsonData, setJsonData] = useState(null);

//to change the title of page
  useEffect(() => {
    document.title = "Mode Choice";
}, []);


  useEffect(() => {
    const getJsonData = async () => {
      let url = "";
      if (selectedQ2 < 5) {
        url = "sample_db_0km.json";
      } else if (selectedQ2 >= 5 && selectedQ2 < 10) {
        url = "sample_db_5km.json";
      } else if (selectedQ2 >= 10 && selectedQ2 < 15) {
        url = "sample_db_10km.json";
      } else if (selectedQ2 >= 15 && selectedQ2 < 20) {
        url = "sample_db_15km.json";
      } else if (selectedQ2 >= 20 && selectedQ2 < 25) {
        url = "sample_db_20km.json";
      } else {
        url = "sample_db_25km.json";
      }
      const response = await fetch(`../Assets/db_JSON/${url}`);
      const data = await response.json();
      setJsonData(data);
    };
    getJsonData();
  }, [selectedQ2]);

  return (
    <>
      <div>
        <h1>Title of the page: Mode choice</h1>
        <p>You selected the following options:</p>
        <ul>
          <li>Question 1: {selectedQ1}</li>
          <li>Question 2: {selectedQ2}</li>
        </ul>
      </div>
      {jsonData && (
        <div>
          <h2>Data from the JSON file:</h2>
          <p>{JSON.stringify(jsonData)}</p>
          console.log(jsonData);
        </div>
      )}
      <Link to="/">Go back to Home</Link>
    </>
  );
};

export default ModeChoice;
