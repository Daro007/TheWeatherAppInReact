import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer id="footer">
        <p>
          <span className="react-icon">
            {" "}
            SPA coded by Daro in React.js{" "}
            <FaReact className="App-logo"></FaReact>
          </span>
          <br />
          Find me on social media
        </p>

        <a
          href="https://twitter.com/DevDaro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter></FaTwitter>
        </a>

        <a
          href="https://github.com/Daro007"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub></FaGithub>
        </a>

        <a
          href="https://www.linkedin.com/in/dario-nicolas-elias-a2b743a5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin></FaLinkedin>{" "}
        </a>
      </footer>
    </div>
  );
}

export default Footer;
