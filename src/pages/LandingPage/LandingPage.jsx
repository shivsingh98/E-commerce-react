import Navbar from "../../components/Navbar";
import "./lp.css";
import Container from "react-bootstrap/Container";

const LandingPage = () => {
  const data = ["All Products", "Electronics", "Sports", "Kitchenware"];
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="home-title">Welcome to online Shopping...</h2>
          </div>
          <div className="col-12">
            <div className="category-list">
             
              {
                data.map((category, index)=>{
                  return(
                    <>
                     <div className="category-item" key={index}>
                <a href="/products">{category}</a>
              </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
