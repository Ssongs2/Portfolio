import React, { useState } from 'react';
import $ from 'jquery';

function Carrer() {
    const [tab, setTab] = useState("tab-0");

    function handleClickJobs(e) {
        let eTarget = $(e.target),
            targetPanelId = e.target.id.replace('tab', 'panel'),
            targetPanel = $("#" + targetPanelId);

        eTarget.addClass('active');
        eTarget.siblings('[role="tab"]').removeClass('active');

        targetPanel.addClass('active');
        targetPanel.siblings('[role="tabpanel"]').removeClass('active');

    }

    return (
        <section className='section carrer'>
            <a name="carrer"></a>
            <div className='container'>
                <h2 className='carrer-heading'>Where I've worked</h2>
                <div className='content'>
                    <div className="job" role="tablist">
                        <button id="tab-0" role="tab" tabIndex={0} aria-selected="true" aria-controls="panel-0" className="jobs__styledButton jBtU" onClick={handleClickJobs}>Comwel</button>
                        <button id="tab-1" role="tab" tabIndex={-1} aria-selected="false" aria-controls="panel-1" className="jobs__styledButton jBtS" onClick={handleClickJobs}><span>Douzone</span></button>
                    </div>
                    <div className='job-detail'>
                        <div id='panel-0' role="tabpanel" tabIndex="0" aria-labelledby='tab-0' aria-hidden="false" className="jobs__styledTabPanel active">
                            <h3>
                                <span>Front-end Engineer</span>
                                <span>
                                    <a className='inline_link' href='/'>&nbsp;@&nbsp;Labor Welfare Corp</a>
                                </span>
                            </h3>
                            <p className="range">Oct 2021 - June 2022</p>
                            <div>
                                <ul>
                                    <li>Write modern, performant, maintainable code for a diverse array of
                                        client and internal projects</li>
                                    <li>Work with a variety of different languages, platforms, frameworks,
                                        and content management systems such as JavaScript, TypeScript,
                                        Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
                                    <li>Communicate with multi-disciplinary teams of engineers, designers,
                                        producers, and clients on a daily basis</li>
                                </ul>
                            </div>
                        </div>
                        <div id="panel-1" role="tabpanel" tabIndex="-1" aria-labelledby='tab-1' aria-hidden="true" className="jobs__styledTabPanel">
                            <h3>
                                <span>Front-end Engineer2</span>
                                <span>
                                    <a className='inline_link' href='/'>&nbsp;@&nbsp;Labor Welfare Corp</a>
                                </span>
                            </h3>
                            <p className="range">Oct 2021 - June 2022</p>
                            <div>
                                <ul>
                                    <li>Developed and maintained code for in-house and client websites
                                        primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>
                                    <li>Manually tested sites in various browsers and mobile devices
                                        to ensure cross-browser compatibility and responsiveness</li>
                                    <li>Clients included JetBlue, Lovesac, U.S. Cellular,
                                        U.S. Department of Defense, and more</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Carrer;