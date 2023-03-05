import React from 'react';
import withCursor from '../hoc/withCursor';

const AboutMe = (props) => {
    const { cursor, onCursor } = props.context;

    return (
        <section className='section aboutMe'>
            <a name="aboutMe"></a>
            <div className='rgt'>
                <div className='container'>
                    <strong className={`aboutMe_intro ${cursor}`} onMouseOver={() => onCursor(true)} onMouseLeave={() => onCursor(false)}>Hello. I'm Anne. A Full-Stack Developer</strong>
                    <strong className="aboutMe_intro">Since beginning my journey as a Software</strong>
                    <strong className="aboutMe_intro">I've collaborated with talented people</strong>
                    <br /><br />
                    <strong className="aboutMe_intro">I enjoy making something</strong>
                    <strong className="aboutMe_intro">I'm focused on </strong>
                    <br /><br />
                    <strong className="aboutMe_intro">"Rome wasn't built in a day" is</strong>
                    <strong className="aboutMe_intro">I want to become a useful person</strong>
                </div>
            </div>
            <div className='lft'>
                <div className='container'>
                    <strong className="aboutMe_intro">Based in Seoul, South Korea</strong>
                    <strong className="aboutMe_intro">Developer over 3years</strong>
                    <strong className="aboutMe_intro">to create digital products for both business and customer use</strong>
                    <br /><br />
                    <strong className="aboutMe_intro">real out of some Idea</strong>
                    <strong className="aboutMe_intro">human-centered products</strong>
                    <br /><br />
                    <strong className="aboutMe_intro">an adage that I've belived</strong>
                    <strong className="aboutMe_intro">with the skills I have cultivated for a long time</strong>
                </div>
            </div>
        </section >
    )

}

export default withCursor(AboutMe);