import React from 'react';
import withCursor from '../hoc/withCursor';

const AboutMe = (props) => {
    const { cursor, onCursor } = props.context;

    return (
        <section className="section aboutMe">
            <a name="aboutMe"></a>
            <div className='container'>
                <p className={`rgt ${cursor}`} onMouseOver={() => onCursor("rgtActive")} onMouseLeave={() => onCursor(false)}>
                    Hello. I'm Anne. A Full-Stack Developer Based in Seoul, South Korea <br />
                    Since beginning my journey as a Software Developer over 3years <br />
                    I've collaborated with talented people to create digital products for both business and customer use
                </p>
                <p className={`lft ${cursor}`} onMouseOver={() => onCursor("lftActive")} onMouseLeave={() => onCursor(false)}>
                    I enjoy making something real out of some Idea <br />
                    I'm focused on human-centered products <br />
                    "Rome wasn't built in a day" is an adage that I've belived <br />
                    I want to become a useful person with the skills I have cultivated for a long time
                </p>
            </div>
        </section >
    )

}

export default withCursor(AboutMe);