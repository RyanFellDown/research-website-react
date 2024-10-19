import React from 'react';
import './App.css';
import github from './assets/github.svg';
import pdf from './assets/pdf.svg';
import approach from './assets/ApproachImage.PNG';
import EgoVideo from './videos/EgocentricPlusModelVideo.mp4';


const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#abstract">Abstract</a></li>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#demo">Demo</a></li>
            <li><a href="#acknowledgement">Acknowledgement</a></li>
            <li><a href="#citations">Citations</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
      <section id="about" className="section">
        <h2>Fish2Mesh Transformer:</h2>
        
        {/* Research Paper Title */}
        <h3>3D Human Mesh Reconstruction from Egocentric Vision</h3>
        
        {/* Author names as links */}
        <p>
          <a href="https://www.scu.edu/imaginarium/" target="_blank" rel="noopener noreferrer">Author 1</a>
          <a href="https://www.scu.edu/imaginarium/" target="_blank" rel="noopener noreferrer" className="author-link">Author 2</a>
          <a href="https://www.scu.edu/imaginarium/" target="_blank" rel="noopener noreferrer" className="author-link">Author 3</a>
          <a href="https://www.scu.edu/imaginarium/" target="_blank" rel="noopener noreferrer" className="author-link">Author 4</a>
          <a href="https://www.scu.edu/imaginarium/" target="_blank" rel="noopener noreferrer" className="author-link">Author 5</a>
        </p>

        
        {/* Institution */}
        <p>Santa Clara University</p>

        {/* Logo and Links */}
        <div className="icon-links">
          <a href="/path/to/pdf" target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src={pdf} alt="PDF Icon" className="icon" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src={github} alt="GitHub Icon" className="icon" />
          </a>
        </div>
        <div className="video-container">
          <iframe
            width="900" // You can adjust the width
            height="500" // You can adjust the height
            src={EgoVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

        <section id="abstract" className="section">
          <h2>Abstract</h2>
          <p>
            Egocentric vision perception of first-person videos captured
            by a wearable cameras has gained popularity in social
            robotics and XR applications, as the methodology affords opportunity to infer user actions within the user’s naturalistic
            environment and perspective. Reconstructing a human user’s
            body motion and actions from first-person camera videos
            presents significant challenges due to self-occlusions of body
            parts seamlessly moving in and out of the frame. While extensive research leveraging pose estimation techniques have
            overcome many of these constraints, similar advances using
            3D mesh recovery of first-person camera video have not been
            met. In this paper, we propose an fish-eye aware transformerbased model, called Fish2Mesh [F2M] Transformer using
            multi-task heads for SMPL parametric-regression and camera transformations, specifically designed for egobody human mesh reconstruction. We utilize the pre-trained model,
            4D-Human to create a training dataset by setting up 3rdperson cameras for weak supervisions, to compensate for the
            lack of egocentric camera data. The experiments demonstrate
            our model’s superior 3D human mesh reconstruction performance, surpassing the previous state-of-the-art models on robustness and reliability. We will publish our codes and dataset
            on the public links.
          </p>
        </section>

        <section id="overview" className="section">
          <h2>Overview</h2>
          <a target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src={approach} alt="Approach Image" className="approach-image" />
          </a>
          <p>Add more to overview here as needed.</p>
        </section>

        <section id="demo" className="section">
          <h2>Demo</h2>
          <p>Demo Videos</p>

          {/* YouTube Video Embed */}
          <div className="video-container">
            <iframe
              width="900" // You can adjust the width
              height="500" // You can adjust the height
              src="https://www.youtube.com/embed/RQjtT0-1ySI?si=wkCS7oTNhGp0PN0L" // Replace YOUR_VIDEO_ID with the actual ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section id="acknowledgement" className="section">
          <h2>Acknowledgement</h2>
          <p>Acknowledging contributions and collaborators</p>
        </section>

        <section id="citations" className="section">
          <h2>Citation</h2>
          <div className="code-block">
            <pre>
              <code>
                {`Test Citations`}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;