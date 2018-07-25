import React from 'react';
import Link from 'gatsby-link';
import "../styles/links.css"

const IndexPage = () => (
  <div>
    <img
      src="https://avatars1.githubusercontent.com/u/5800836"
      style={{
        width: '300px',
        height: '300px'
      }}
    />
    <p>
      Welcome! My name is Ryan and I am a teacher candidate at the UMN. On this site you'll find some info about me.
    </p>
    <div className="links">
      <Link to="/contact/" className="link">Contact Info</Link>
      <Link className="link" to="/resume/">Resume</Link>
      <Link className="link" to="/philosophy/">Philiosophy</Link>
      <Link className="link" to="/tech/">Technology</Link>
    </div>
  </div>
);

export default IndexPage;
