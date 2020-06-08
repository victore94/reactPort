import React from 'react'
import Footer from './Footer'

export class ProjectPage extends React.Component {

    render() {

        let expensify =
            <a
                className='about-link'
                rel='noreferrer'
                href='https://vl-react-expensify-app.herokuapp.com/'>
                Instagram Bot
            </a>
        let instagram =
            <a
                className='about-link'
                rel='noreferrer'
                href='http://github.com/'>
                Expensify
            </a>
        let twitch =
            <a
                className='about-link'
                rel='noreferrer'
                href='http://github.com/'>
                Twitch Bot
            </a>
        return (
            <div >
                <section className='content-container'>
                    <h1>
                        Some of my recent projects:
                    </h1>
                </section>
                <div className='content-container__projects' >
                    <h3> {expensify}
                        <p>
                            this is where the description will be.
                            I will write a description for each of the
                            projects and perhaps write down the tech used for each
                            of them
                    </p>
                    </h3>
                    <h3> {twitch}
                        <p>
                            this is where the description will be.
                            I will write a description for each of the
                            projects and perhaps write down the tech used for each
                            of them
                    </p>
                    </h3>
                    <h3> {instagram}
                        <p>
                            this is where the description will be.
                            I will write a description for each of the
                            projects and perhaps write down the tech used for each
                            of them
                    </p>
                    </h3>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProjectPage


