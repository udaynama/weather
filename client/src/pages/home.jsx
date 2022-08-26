import React from "react";
import Card from "../components/card";
import "./home.css";

const Home = () => {
  return (
    // <Card>
    <div className="main-container">
      <h3 className="heading">Introduction</h3>
      <p className="paragraph">
        Introduction in web development basics like web working,DNS,hosting,HTMl
        basics,HTML advance{" "}
      </p>
      <h3 className="heading">topic 1</h3>
      <h2 className="basics">basics of html :-</h2>
      <ol>
        <li> HTMl Elements</li>
        <li>HTMl Attributes</li>
        <li> HTMl Heading</li>
        <li> HTMl Paragraphs</li>
      </ol>
      <h3 className="heading">topic 2</h3>
      <h2 className="basics">CSS can be added to HTML documents in 3 ways:-</h2>
      <ol>
        <li>Inline - by using the style attribute inside HTML elements</li>
        <li>Internal - by using a 'style' element in the 'head' section</li>
        <li>
          External - by using a 'link' element to 'link' to an external CSS file
        </li>
      </ol>
      <h3 className="heading">topic 3</h3>
      <h2 className="basics">javascript concepts:-</h2>
      <ol>
        <li>map</li>
        <li>reduce</li>
        <li>filter</li>
      </ol>
      <h2 className="basics">Reference:-
      <a href="https://www.w3schools.com/html" target='_blank'>Visit W3Schools.com!</a>  </h2>
    </div>
    // </Card>
  );
};

export default Home;
