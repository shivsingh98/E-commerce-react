import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="header-wrapper">
              <div className="logo">
                <a href="/">ECommerce</a>
              </div>
              <div className="user-actions">
                <a href="/cart">Cart</a>
                <div className="user-intro">Guest</div>
                <div className="login-btn">
                  <a href="/">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
