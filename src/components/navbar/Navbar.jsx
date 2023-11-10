import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Ulus Karakoc</span>
        <div className="social">
          <a href=""> <img src="./xing.png" alt="" />{" "} </a>
          <a href=""> {" "}   <img src="./linkedin.png" alt="" /> </a>
          <a href="">   <img className="github" src="./github.png" alt="" /> </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
