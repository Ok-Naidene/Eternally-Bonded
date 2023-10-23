import React, { useEffect, useState } from "react";
import axios from "axios";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("/categories");
        setCats(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="aboutImg"
          src="https://scontent.fakl1-3.fna.fbcdn.net/v/t1.18169-9/10391960_1229923282506_3770675_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=4dc865&_nc_ohc=bs25hFO-BIYAX8jaVml&_nc_ht=scontent.fakl1-3.fna&oh=00_AfC8Ksycg7Pt-HIVy0KHD0GXMermzqywuq76TUw_Qdf79A&oe=655E50D6"
          alt=""
        />
        <p>
          Hello, I'm Naidene Myers, a web development student studying through the inspiration of my late father. This site is for people like me who are navigating life with loss. This blog is designed for your healing process; it's a creative outlet for your soul to be at peace.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((category) => (
            <li key={category._id} className="sidebarListItem">
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebarIcon">
        <i className="sidebarIcon fa-solid fa-heart-crack" style={{ color: "#b3b3b3" }}></i>
        <i className="sidebarIcon fa-regular fa-heart" style={{ color: "#b3b3b3" }}></i>
        <i className="sidebarIcon fa-solid fa-heart" style={{ color: "#b3b3b3" }}></i>
      </div>
    </div>
  );
}
