/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
 
import React from "react"
import ReactDOM from "react-dom"

const topic = (
    <div>
    <img className="image" src="./react-logo.png"/>
    <h1>Fun facts about React</h1>
    <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walker</li>
    <li>Has well over 100k stars on GitHub</li>
    <li>It is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps including mobile apps</li>
    </ul>
    </div>
);

ReactDOM.render(
    topic,document.getElementById("root")
)