import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  // const userdata = fetch
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (localStorage.getItem("logged")) {
          console.log("logged in");
        } else {
          console.log("not logged");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="header">
      <div className="headerLogo">
        <Link className="logoLink" to="/">
          <i className="fa-regular fa-bookmark"></i>
        </Link>
      </div>
      <div className="searchBar">
        <div className="searchBarInner">
          <i className="magnifyGlass fa-solid fa-magnifying-glass"></i>
          <div className="inputContainer">
            <p>Your Library</p>
            <input placeholder="Search"></input>
          </div>
        </div>
      </div>
      <div className="navBar">
        <img
          src=""
          alt="chưa có ảnh "
          className="userAvatar"
        ></img>
        <div>navBar</div>
      </div>
    </div>
  );
}

export default Header;
