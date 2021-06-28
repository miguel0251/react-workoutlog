import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Welcome to Workout Log</h1>
        <p>Beginner React Project for Workout Log and future Apps</p>
        <hr></hr>
        <h1>Important Notes</h1>
        <ul>
          <li> Being component based, you can move on to the next module</li>
          <li>
            The styling is intentionally left bland in some spots. Just a
            sandbox
          </li>
          <li>At this phase, this site is not yet responsive</li>
          <li>Currently refactoring it to make own projects</li>
          <li>This is a beginners app</li>
          <li>
            Resource cited at<link to="resources">here</link>
          </li>
          <li>The set up for this app might be the most confusing part</li>
          <li>
            <link to="resources">React Resources</link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
