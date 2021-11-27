import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <div>
      <div class="main-container">
        <div
          class="header-container"
          style={{ backgroundImage: `url("headerbg.jpg")` }}
        >
          <ul class="nav-items">
            <NavBar />
          </ul>
          <div class="profile-container">
            <div class="userImage"></div>
            <div class="name"></div>
          </div>
        </div>
        <div class="body-container"></div>
      </div>
    </div>
  );
}

export default Header;
