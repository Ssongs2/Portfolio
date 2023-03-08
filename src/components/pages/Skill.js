import React from 'react';
import bowl from '../../assets/resources/bowl44.svg'
import apple from '../../assets/resources/apple.png'

function Skill() {
    return (
        <section className='section skill'>
            <div className="container">
                <h2 className='skill-heading'>Skill</h2>
                <div className='content'>
                    <table>
                        <tr>
                            <td>
                                <h2>Front_end</h2>
                                <p>HTML5 <br />
                                    CSS, SCSS <br />
                                    JavaScript <br />
                                    React</p>
                            </td>
                            <td>
                                <h2>Back_end</h2>
                                <p>Java<br />
                                    C# <br />
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td><h2>DataBase</h2>

                                <p>MySql<br />
                                    PostgreSQL <br />
                                </p></td>
                            <td><h2>IDE_Tool</h2>
                                <p>Visual Studio Code<br />
                                    Visual Studio <br />
                                    Eclipse <br />
                                    IDE <br />
                                    GIT <br />
                                    JIRA <br />
                                </p></td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Skill;