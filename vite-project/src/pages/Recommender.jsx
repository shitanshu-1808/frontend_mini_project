
function Recommender() {

  return (
    <div className="intro-wrapper">
      <div className="nebula-bg3" aria-hidden="true"></div>

      <div className="intro2">
        <h1>Movie Recommendation System</h1>
        <input type="text" placeholder="Enter movie name here ... " className="input"></input>
        <button className="start2">Get Started</button>
        <div className="recommends"> </div>
      </div>
      
    </div>
  );
}

export default Recommender;
