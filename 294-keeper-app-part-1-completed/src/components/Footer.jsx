import React from "react";

const currentYear = new Date();
const year = currentYear.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <h6>Copyright © {year}</h6>
    </footer>
  );
}

export default Footer;
