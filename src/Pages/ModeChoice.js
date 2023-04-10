import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import NavBar from "../Components/Navbar";
import '../Assets/Styles/table.css'
import '../Assets/Styles/mode-choice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBus, faCar, faSubway, faPeopleCarry, faChair, faPeopleArrows, faSnowflake,faBusAlt,faShuttleVan
} from '@fortawesome/free-solid-svg-icons';
import { toast} from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ModeChoice = () => {
  const location = useLocation();

  //response of question1 and question2 which is selected on homepage
  const { selectedQ1, selectedQ2 } = location.state;
  const [jsonData, setJsonData] = useState(null);


//SHOWING toast that data is successfully recevied from homepage


  //to change the title of page and show notify that data received from homepage
  useEffect(() => {
    document.title = "Mode Choice";
    if (selectedQ1&& selectedQ2) {
      toast(`data from homepage recevied Q-1 Response is ${selectedQ1} and Q-2 response is ${selectedQ2}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }, []);


  //mapping of files with respective which option choosen of question2
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
      <NavBar title="Mode choice" />
      <div className="mode-table">
        <table className="table-bordered">
          <colgroup>
            <col style={{ backgroundColor: '#E6D2D0' }} />
            <col style={{ backgroundColor: '#E7E5B7' }} />
            <col style={{ backgroundColor: '#C8D7B1' }} />
            <col style={{ backgroundColor: '#D9D8F3' }} />
            <col style={{ backgroundColor: '#D0E2E6' }} />

          </colgroup>
         
          <tbody>
            <tr className="Mode-Choice-row" >
              <td >
                <label htmlFor="bus-route-1">Bus Route 1</label>
                <input type="radio" name="mode-choice" value="bus-route-1" />
              </td>
              <td>
                <label htmlFor="bus-route-2">Bus Route 2</label>
                <input type="radio" name="mode-choice" value="bus-route-2" />
              </td>
              <td >
                <label htmlFor="metro-train">Metro/Train</label>
                <input type="radio" name="mode-choice" value="metro-train" />
              </td>
              <td >
                <label htmlFor="own-car">Own Car</label>
                <input type="radio" name="mode-choice" value="own-car" />
              </td>
              <td >
                <label htmlFor="ola-uber">Ola/Uber</label>
                <input type="radio" name="mode-choice" value="ola-uber" />
              </td>
            </tr>
            <tr>
              <td colSpan="5" style={{ fontWeight: "bold", backgroundColor: "#D0A55E" }}>
                Total travel time spent while inside the vehicle(s)
              </td>
            </tr>

            <tr>
              <td>
                <FontAwesomeIcon icon={faBus} />
                <span> 45 min</span>
              </td>
              <td>
                <FontAwesomeIcon icon={faCar} />
                <span> 30 min</span>
              </td>
              <td>
                <FontAwesomeIcon icon={faSubway} />
                <span> 25 min</span>
              </td>
              <td>
                <FontAwesomeIcon icon={faCar} />
                <span> - </span>
              </td>
              <td>
                <FontAwesomeIcon icon={faCar} />
                <span> - </span>
              </td>
            </tr>
            <tr>
              <td colSpan="5" style={{ fontWeight: "bold", backgroundColor: "#D0A55E" }}>
                Total travel time spent outside vehicle(s)
              </td>
            </tr>
            <tr>
              <td>
                <span> 24 min </span>
              </td>
              <td>
                <span> 24 min </span>
              </td>
              <td>
                <span> 24 min </span>
              </td>
              <td>
                <span> 24 min </span>
              </td>
              <td>
                <span> 24 min </span>
              </td>
            </tr>
            <tr>
              <td colSpan="5" style={{ fontWeight: "bold", backgroundColor: "#D0A55E" }}>
                Possible delay due to traffic congestion or other uncertainties
              </td>
            </tr>
            <tr>
              <td>
                <span>.....upto 18 min more </span>
              </td>
              <td>
                <span> .....upto 18 min more </span>
              </td>
              <td>
                <span> .....upto 18 min more </span>
              </td>
              <td>
                <span> .....upto 18 min more </span>
              </td>
              <td>
                <span> .....upto 18 min more </span>
              </td>
            </tr>
            <tr>
              <td colSpan="5" style={{ fontWeight: "bold", backgroundColor: "#D0A55E" }}>
                Total one-way cost of travel
              </td>
            </tr>
            <tr>
              <td>
                <span>Rs. 68 </span>
              </td>
              <td>
                <span> Rs. 68 </span>
              </td>
              <td>
                <span>Rs. 68 </span>
              </td>
              <td>
                <span> Rs. 68 </span>
              </td>
              <td>
                <span> Rs. 68 </span>
              </td>
            </tr>
            <tr>
              <td colSpan="5" style={{ fontWeight: "bold", backgroundColor: "#D0A55E" }}>
                Extent of crowding in the vehicle
              </td>
            </tr>
            <tr>
              <td>
                <span>All seats occupied </span>
                <FontAwesomeIcon icon={faPeopleCarry} />

              </td>
              <td>
                <span>Many seats available </span>
                <FontAwesomeIcon icon={faChair} />

              </td>
              <td>
                <span>Fully crowded or packed </span>
                <FontAwesomeIcon icon={faPeopleArrows} />
              </td>
              <td>
                <span> </span>
              </td>
              <td>
                <span>  </span>
              </td>
            </tr>
            <tr>
              <td colSpan="5" style={{ fontWeight: "bold", backgroundColor: "#D0A55E" }}>
                Service type
              </td>
            </tr>
            <tr>
              <td>
                <span>Ordinary </span>
                <FontAwesomeIcon icon={faBusAlt} />

              </td>
              <td>
                <span>Express Non-AC</span>
                <FontAwesomeIcon icon={faShuttleVan} />

              </td>
              <td>
                <span>A.C </span>
                <FontAwesomeIcon icon={faSnowflake} />
              </td>
              <td>
                <span> </span>
              </td>
              <td>
                <span>  </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  );
};
export default ModeChoice;
