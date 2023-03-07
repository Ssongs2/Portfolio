import React from 'react';
import bowl from '../../assets/resources/bowl44.svg'
import apple from '../../assets/resources/apple.png'

function Skill() {
    return (
        <section className='section skill'>
            <a name="skills"></a>
            <div className="imgWrapper" id="a1" style={{ "width": "100%" }}>
                <img className="apple" style={{ "maxWidth": "100%", "height": "auto" }} src={apple} alt=''></img>
            </div>
            <div className="imgWrapper" id="a2" style={{ "width": "100%" }}>
                <img className="apple" style={{ "maxWidth": "100%", "height": "auto" }} src={apple} alt=''></img>
            </div>
            <div className="imgWrapper" id="a3" style={{ "width": "100%" }}>
                <img className="apple" style={{ "maxWidth": "100%", "height": "auto" }} src={apple} alt=''></img>
            </div>
            <div className="imgWrapper" id="a4" style={{ "width": "100%" }}>
                <img className="apple" style={{ "maxWidth": "100%", "height": "auto" }} src={apple} alt=''></img>
            </div>
            <div className="imgWrapper bowl">
                <img className="bowl" style={{ "maxWidth": "100%", "height": "auto" }} src={bowl} alt=''></img>

            </div>
        </section>
    )
}

export default Skill;