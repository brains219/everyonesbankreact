import React, { Component } from 'react';

const About = (props) => {
    return (
      <div className="container-sm">
        <div className="row aboutUsRow ml-5">
          <div className="col-11">
            <h2 className="mt-3">About Us</h2>
            <hr />
            <br />
            <blockquote className="blockquote jumbotron p-3 jumbotron-fluid">
              <p className="mb-0">
                The future of banking. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
            <br />
            <p className="about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              luctus augue elit, vel volutpat nibh bibendum in. Vivamus nisl
              dui, scelerisque at ipsum quis, efficitur euismod nunc.
            </p>
            <p className="about">
              Etiam ornare suscipit purus ut mattis. Duis mattis nisl id tellus
              condimentum mattis. Aliquam ultrices fringilla ligula, eu
              dignissim metus pellentesque id. Donec consequat massa sem, non
              euismod odio euismod ornare. Morbi ac maximus sapien, sed
              tristique ante. Vivamus pellentesque metus ac congue tempor. Sed
              eros magna, tincidunt ut lectus sit amet, rutrum aliquet magna.
            </p>
            <p className="about" className="mb-3">
              Nam semper, mauris quis pellentesque egestas, nisi arcu vestibulum
              justo, vulputate faucibus quam lorem vel sem. Nam nec dui ac arcu
              tempor dignissim. Nullam sed ante eu nisl varius congue imperdiet
              in nulla. Integer in risus augue. Phasellus enim magna, aliquam ut
              ligula in, aliquam suscipit felis. className aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
            <br />
          </div>
        </div>
      </div>
    );
}
 
export default About;