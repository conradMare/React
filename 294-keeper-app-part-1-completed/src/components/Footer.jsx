import React from "react";

const currentYear = new Date();
const year = currentYear.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer p">Copyright {year}</p>
    </footer>
  );
}

export default Footer;