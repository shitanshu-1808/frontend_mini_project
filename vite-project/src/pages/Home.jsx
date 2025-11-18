
import { useNavigate } from "react-router-dom";

function Intro() {
    const navigate = useNavigate();
    const gotoRecommender = ()=>{
        navigate("/recommender")
    }
  return (
    <div className="intro-wrapper">
      <div className="nebula-bg" aria-hidden="true"></div>

      <div className="intro">
        <h1>Movie Recommendation System</h1>
        <p>Find movies you’ll love, instantly.</p>
        <button className="start" onClick={gotoRecommender}>Get Started</button>
      </div>
    </div>
  );
}

export default Intro;
