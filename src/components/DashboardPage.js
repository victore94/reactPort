import React from 'react';
import Footer from './Footer'

export class DashboardPage extends React.Component {

  render() {
    let linkedin =
      <a
        className='about-link'
        rel='noreferrer'
        href='https://www.linkedin.com/in/victore-lopez/'>Linkedin
      </a>;
    let github =
      <a
        className='about-link'
        rel='noopener'
        href='http://github.com/victore94'>Github
      </a>;

    return (
      <div className='content-container' >
        <div>
          <h1>
            Hello, my name is Victor. I am a Full-Stack
            Developer living in California's beautiful Bay Area.
           </h1>
          <img
            className='personal-image'
            alt='Me'
            src='/images/portpic.jpeg'>
          </img>
          <h3>About:</h3>
          <p >
            I have a passion for design and development. You can
            see my previous work history on {linkedin}. I am always working on side
            projects using the MERN stack (Mongo, Express, React, Node). Feel free to
            take a look at my code here {github}.
          </p>
          <Footer />
        </div>
      </div>
    )
  }
}


export default DashboardPage;
