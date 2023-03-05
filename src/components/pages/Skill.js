import React from 'react';
import bowl from '../../assets/resources/bowl44.svg'
import apple from '../../assets/resources/apple.png'

function Skill() {
    return (
        <section className='section skill'>
            <div>
                <div style={{ "position": "absolute", "top": "24%" }}>
                    <img width="200px" height="200px" src={apple} alt=''></img>
                </div>
                <div style={{ "position": "absolute", "top": "30%", "left": "50%" }}>
                    <img width="200px" height="200px" src={apple} alt=''></img>
                </div>
                <div style={{ "position": "absolute", "top": "50%", "right": "0%" }}>
                    <img width="200px" height="200px" src={apple} alt=''></img>
                </div>
                <div style={{ "position": "absolute", "top": "20%", "left": "35%" }}>
                    <img width="200px" height="200px" src={apple} alt=''></img>
                </div>
                <div style={{ "textAlign": "center", "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -30%)" }}>
                    <img width="600px" height="500px" src={bowl} alt=''></img>
                </div>
            </div>
        </section>
    )
}

export default Skill;