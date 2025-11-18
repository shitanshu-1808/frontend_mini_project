function About() {

  return (
    <div className="intro-wrapper">
      <div className="nebula-bg2" aria-hidden="true"></div>

      <div className="intro">
        <h1>Movie Recommendation System Creators</h1>

        <p className="about-p">
          This movie recommendation system is designed to take a movie name as input and generate a list of similar movies using a trained Machine Learning model. The model learns movie-to-movie similarity using feature extraction methods such as plot embeddings, metadata vectors, and cosine similarity to determine how closely related two movies are. Instead of relying on user ratings or collaborative data, this system uses pure content-based filtering powered by ML to instantly provide accurate recommendations. Built using the MERN stack, the backend manages the ML inference pipeline, API routing, and data handling, while the frontend provides a clean and responsive interface for users to interact with.
          <br /><br />
          This project is a collaborative effort involving multiple contributors: the Machine Learning model was developed by <strong>Vishu Shukla</strong>, the backend logic and integration were built by <strong>Vinayak Shukla</strong>, and the frontend interface was designed and developed by <strong>Shitanshu Singh</strong>. Together, the team created a seamless and intelligent movie recommendation experience.
        </p>

      </div>
    </div>
  );

}

export default About;
