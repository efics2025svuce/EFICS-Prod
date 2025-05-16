import React from "react";
import "../styles/Home.css";
import jae from "../assets/Jae.png";
import image from "../assets/ad.png";
import tree from "../assets/tree.png";

const Home = () => {
  const myStyle = {
    backgroundImage: `linear-gradient(rgba(0, 50, 0, 0.7), rgba(0, 50, 0, 0.7)), url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "400px",
    backgroundSize: "cover",
  };

  const MyStyle = {
    backgroundImage: `url(${tree})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div style={myStyle} className="description">
          <h1>Electrifying the Future</h1>
          <p>International Conference on Innovations, Challenges & Sustainable Mobility (EFICS-2025)</p>
          <p>14th & 15th July, 2025</p>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="about-box">
          <h2>About Us</h2>
          <p>
            The Department of Electrical and Electronics Engineering (EEE) at Sri Venkateswara University College of Engineering (SVUCE), Tirupati, is proud to host EFICS-2025, a two-day international conference on July 14th and 15th, 2025. This event aims to provide a platform for academicians, industry professionals, and students to present their research innovations and engage in knowledge exchange.
          </p>
          <h2>About SVUCE, Tirupati</h2>
          <p>
            Established in 1959, Sri Venkateswara University College of Engineering (SVUCE) is a premier technological institution in India. The college, founded as a constituent of Sri Venkateswara University (SVU), Tirupati, was inaugurated by Pandit Jawaharlal Nehru, India's first Prime Minister. Nestled amidst the Seshachala hill range of Tirumala, SVUCE provides a serene academic environment spread over 1000 acres. Over the years, it has grown into a center of excellence in technical education, offering B.Tech, M.Tech, and Ph.D. programs in multiple disciplines, accredited by the National Board of Accreditation (NBA).
          </p>
          <p>
            EFICS-2025 focuses on emerging trends in electric vehicles (EVs), artificial intelligence (AI), smart mobility, and sustainable energy solutions, shaping the future of engineering and technology. EFICS-2025 aims to unite global researchers and industry experts for discussions on cutting-edge advancements. The conference invites research papers, industry case studies, and technical innovations in various engineering disciplines.
          </p>
        </div>
      </section>

      {/* Keynote Speaker Section */}
      <section style={MyStyle} className="outer-section">
        <div className="keynote">
          <div className="speaker-card">
            <img src={jae} alt="Keynote Speaker" className="speaker-img" />
            <div>
              <h2>OUR Keynote Speaker</h2>
              <div className="scroll-bar">
                <p>
                  We are honored to welcome Prof. Jae Su Yu, a globally recognized expert in electronics, nanotechnology, and energy storage, with an h-index of 79 and over 24,995 citations. Named among the Global Top 2% Scientists (SCOPUS, 2022), he is a Professor at Kyung Hee University, Korea, leading advancements in wearable electronics, supercapacitors, bio-sensors, and energy harvesting technologies.
                  With over 670 research papers, Prof. Yu has collaborated with top institutions like Northwestern University and UIUC. As Director of the Institute for Wearable Convergence Electronics, he continues to drive innovation in sustainable energy solutions. Don't miss his insights at our event!
                </p>
                <a
                  href="https://drive.google.com/file/d/1IMuSyW8E7O531lfdaQMuOiZ0S2ilrTcJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ReadMore"
                >
                  View More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule">
        <h2>Event Schedule</h2>
        <p>Stay informed about the key deadlines for submission, review, and registration for the International Conference on Innovations, Challenges & Sustainable Mobility (EFICS-2025).</p>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abstract Submission</td>
              <td>June 15, 2025</td>
            </tr>
            <tr>
              <td>Notification of Acceptance</td>
              <td>June 30, 2025</td>
            </tr>
            <tr>
              <td>Full Paper Submission Deadline</td>
              <td>July 1, 2025</td>
            </tr>
            <tr>
              <td>Intimation to Participants</td>
              <td>July 5, 2025</td>
            </tr>
            <tr>
              <td>Conference Dates</td>
              <td>July 14-15, 2025</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Home;
