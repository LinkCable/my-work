import React, { Component } from 'react';
import Isvg from 'react-inlinesvg';
import './Home.css';

import Project from '../../components/project/Project';

import resume from '../../media/social/resume.svg';
import dribbble from '../../media/social/dribbble.svg';
import github from '../../media/social/github.svg';
import twitter from '../../media/social/twitter.svg';
//import mail from '../../media/social/mail.svg';
import linkedin from '../../media/social/linkedin.svg';
import graffiti from '../../media/home/graffiti-iphone.png';
import medi from '../../media/home/medi-iphone.png';
import dots from '../../media/home/dots.svg';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="intro">
          <h1 className="name">Philippe Kimura-Thollander</h1>
          <h3 className="byline">A developer turned designer</h3>

          <span>
            About me:
          </span>
          <ul className="about">
            <li>Master’s HCI at Georgia Tech, undergrad CS at Stony Brook</li>
            <li>UI design, UX engineering, with some UX research thrown in</li>
            <li>Passionate about emojis, games, and vaporwave</li>
          </ul>

          <div className="social">

            <a href={process.env.PUBLIC_URL + 'philippe_kimura-thollander_resume.pdf'} target="_blank" id="resume">
              <Isvg src={resume}>
                <img src={resume} alt="resume link" width="20px" />
              </Isvg>
            </a>

            <a href="http://dribbble.com/linkcable" target="_blank" id="dribbble">
              <Isvg src={dribbble}>
                <img src={dribbble} alt="dribbbble link" width="20px" />
              </Isvg>
            </a>

            <a href="http://github.com/linkcable" target="_blank" id="github">
              <Isvg src={github}>
                <img src={github} alt="github link" width="20px" />
              </Isvg>
            </a>

            <a href="http://twitter.com/link_cable" target="_blank" id="twitter">
              <Isvg src={twitter}>
                <img src={twitter} alt="twitter link" width="20px" />
              </Isvg>
            </a>

            <a href="http://linkedin.com/in/linkcable" target="_blank" id="linkedin">
              <Isvg src={linkedin}>
                <img src={linkedin} alt="linkedin link" width="20px" />
              </Isvg>
            </a>

            {
              /*
               <a href="mailto:hi@philkt.me?Subject=Hi!" target="_blank" id="mail">
               <Isvg src={mail}>
               <img src={mail} alt="email link" width="20px" />
               </Isvg>
               </a> */
            }
          </div>
        </div>

        <Project title="The Hive"
                 description="A case study about how to optimize finding a seat in Georgia Tech’s library"
                  link="root"
                  image={null} />

        <Project title="Medi"
                 description="An application ecosystem to ensure that elderly patients take their prescription medications"
                 link="root"
                 image={medi}
                 iPhone={true}/>

        <Project title="Graffiti"
                 description="An augmented reality iOS app to draw virtual graffiti on real world objects"
                 link="root"
                 image={graffiti}
                 iPhone={true}/>

        <Project title="Dots"
                 description="An art video inspired by the Google Now dots that was purchased by Stony Brook’s president "
                 link="root"
                 image={dots}/>

      </div>
    )
  }
  
}

export default Home;