import React from 'react';

function Footer() {
    return (
        <footer className="footer_module" id="contact">
            <div className="footer_module_container">
                <span className='copyright'>
                    @2023 SongEunJi
                    <br />
                    All right reserved

                </span>
                <ul className='contact'>
                    <li className="contact_item">
                        <a>
                            <span>
                                <svg viewBox="0 0 24 24" fill="black" width="2rem" height="2rem"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                            </span>
                        </a>
                    </li>
                    <li className="contact_item">
                        <a>
                            <span>
                                <svg viewBox="-2 -2 24 24" fill="black" width="2rem" height="2rem"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm-.553 13.721c-.603.293-1.252.324-1.503.324h-.075-.054c-.392 0-2.343-.09-2.343-1.867 0-1.746 2.125-1.883 2.776-1.883h.017c-.376-.502-.298-1.008-.298-1.008a2.34 2.34 0 0 1-.14.004c-.245 0-.718-.039-1.124-.301-.498-.32-.75-.865-.75-1.619 0-2.131 2.327-2.217 2.35-2.219h2.324v.051c0 .26-.467.311-.785.354-.108.016-.325.037-.386.068.589.315.684.809.684 1.545 0 .838-.328 1.281-.676 1.592-.216.193-.385.344-.385.547 0 .199.232.402.502.639.441.389 1.046.918 1.046 1.811 0 .923-.397 1.583-1.18 1.962zM14.5 10H13v1.5h-1V10h-1.5V9H12V7.5h1V9h1.5v1zm-6.277 1.15a2.08 2.08 0 0 0-.157.006 1.918 1.918 0 0 0-1.15.469c-.294.266-.444.602-.423.941.045.711.808 1.127 1.735 1.061.912-.066 1.52-.592 1.476-1.303-.042-.668-.623-1.174-1.481-1.174zm.874-3.865c-.242-.85-.632-1.102-1.238-1.102a.75.75 0 0 0-.194.027c-.263.075-.472.294-.588.62-.119.33-.126.674-.024 1.066.185.701.683 1.209 1.185 1.209a.664.664 0 0 0 .194-.027c.549-.154.893-.992.665-1.793z"></path></svg>
                            </span>
                        </a>
                    </li>
                    <li className="contact_item">
                        <a>
                            <span>
                                <svg viewBox="0 0 24 24" fill="black" width="2rem" height="2rem"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li className="contact_item">
                        <a>
                            <span>
                                <svg viewBox="0 0 24 24" fill="black" width="2rem" height="2rem"><path d=" M3 10h18v10.004c0 .55-.445.996-.993.996H3.993A.994.994 0 0 1 3 20.004V10zm6 2v2h6v-2H9zM2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1v4H2V4z"></path></svg>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;