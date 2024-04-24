/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/woman-3597095_1280.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
<<<<<<< HEAD
  "A passionate backened developer, AI enthusiast with learning and exploring things.";
=======
  "I'm a Undergraduate computer engineering student studying at Tribhuvan University. I love coding and spend most of the time in problem solving.";
>>>>>>> 880eab4 (Commit made from VS Code Azure Static Web Apps)

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
<<<<<<< HEAD
  "User experience",
  "Machine learning",
  "DSA",
  "Laravel",
=======
  "Laravel",
  "DSA",
  "Problem solving",
  "Machine learning",
>>>>>>> 880eab4 (Commit made from VS Code Azure Static Web Apps)
  "Graphic design",
  "Postgres SQL",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
<<<<<<< HEAD
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Backened Developer, I continually look for new and better ways to make tech accessible by all.";
=======
  "I am passionate backened developer, AI enthusiast with learning and exploring things."
>>>>>>> 880eab4 (Commit made from VS Code Azure Static Web Apps)

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
