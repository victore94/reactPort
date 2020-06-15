import React from 'react'
import Footer from './Footer'

export class ProjectPage extends React.Component {

    render() {

        let ebrius =
            <a
                className='about-link'
                rel='noreferrer'
                href='https://secure-plateau-53716.herokuapp.com/'>
                Ebrius
            </a>
        let expensify =
            <a
                className='about-link'
                rel='noreferrer'
                href='https://vl-react-expensify-app.herokuapp.com/'>
                Expensify
            </a>
        let gamblr =
            <a
                className='about-link'
                rel='noreferrer'
                href='http://evening-plains-03671.herokuapp.com/'>
                Gamblr
            </a>
        let instagram =
            <a
                className='about-link'
                rel='noreferrer'
                href='https://github.com/victore94/instaBot'>
                Instagram Bot
            </a>
        let twitch =
            <a
                className='about-link'
                rel='noreferrer'
                href='https://github.com/victore94/twitch_bot'>
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
                            ‘Expensify’ allows a user to login with a Google account and input expenses or bills you may have.
                            The application quickly tallies up your total costs and allows a user to search expenses as well.
                            This app utilizes React, SCSS, Firebase, and Redux.
                    </p>
                    </h3>
                    <h3> {instagram}
                        <p>
                            'Instagram Bot' is an automated web-scraper that logs into Instagram and follows the most popular accounts and likes their photos based on a list of the most popular Hashtags. The technologies used are a custom Instagram API, Python, and a Selenium browser.
                    </p>
                    </h3>
                    <h3> {ebrius}
                        <p>
                            ‘Ebrius’ is an application that allows one to showcase their bartending chops by allowing you to post instructions to create a drink and allow others to recreate and rate it.
                            The technologies used are Express, MySQL, jQuery, JavaScript
                    </p>
                    </h3>
                    <h3> {gamblr}
                        <p>
                            ‘Gamblr’ gives a user a secure, fun, and easy way to place bets on live E-sporting events.
                            The technologies uses are React, Socket.io, MongoDB, Express.js, Node.js
                    </p>
                    </h3>
                    <h3> {twitch}
                        <p>
                            'Ohwise1's Twitch Bot' gives a twitch streamer the ability to have a custom bot at their disposal.
                            Using the Twitch API it pulls data from the channels chat, upon hearing a specific command the bot will respond with different functions.
                    </p>
                    </h3>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProjectPage


