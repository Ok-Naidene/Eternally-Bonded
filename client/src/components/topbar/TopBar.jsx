import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const [profilePic, setProfilePic] = useState("");
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    if (user && user.profilePic) {
      setProfilePic(PF + user.profilePic);
    }
  }, [user]);

  return (
    <div className="top">
      <div className="topLeft">
          <i className="topIcon fa-solid fa-heart-crack" style={{ color: '#b3b3b3' }}></i>
          <i className="topIcon fa-regular fa-heart" style={{ color: '#b3b3b3' }}></i>
          <i className="topIcon fa-solid fa-heart" style={{ color: '#b3b3b3' }}></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          {user && (
            <>
              <li className="topListItem">
                <Link className="link" to="/write">
                  WRITE
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/wellness">
                  WELLNESS
                </Link>
              </li>
            </>
          )}
          <li className="topListItem">
            <Link className="link" to="/resources">
              RESOURCES
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user ? "LOGOUT" : ""}
          </li>
          {!user && (
            <>
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={profilePic} alt="" />
          </Link>
        ) : (
          <i className="searchIcon fa-solid fa-hand-holding-heart" style={{ color: '#b3b3b3' }}></i>
        )}
      </div>
    </div>
  );
}
