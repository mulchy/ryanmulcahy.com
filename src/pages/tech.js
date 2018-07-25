import React from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"
import poster from "../poster.jpg"
import replit from "../replit.png"

export default () => {
  return (
    <div>
      <h1>Technology</h1>
      <p>Below are some examples of using technology to create instructional content. The first is a video showcasing the website <a href="repl.it">repl.it</a>, and the second is a slideshow of photos from a recent trip to Japan.
      </p>
      <div>
        <Player
          playsInline
          poster={replit}
          src="https://dl.dropboxusercontent.com/s/tkdynh1k5c5ixfy/repl-it.mp4" 
          />

        <br />
        <br />

        <Player
          playsInline
          poster={poster}
          src="https://dl.dropboxusercontent.com/s/f6uxss8lieaw0mx/Ryan%20Goes%20to%20Japan.mp4"
        />


      </div>
    </div>
  );
}

