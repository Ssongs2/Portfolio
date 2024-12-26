import React, { Component } from 'react';
import { useTranslation } from "react-i18next";
import CursorProvider from '../providers/CursorProvider';
import Header from '../Header';
import Footer from '../Footer';
import AboutMe from './AboutMe';
import Skill from './Skill';
import Carrer from './Carrer';
import Project from './Project';
import Navbar from '../view/Navbar';

/**  
 * Function Component
 * Creates a stateless React component without PropTypes and ES6 module system (Reactjs code snippets)
 * import React from 'react';

const Main = () => {
    return (
        <div>
            
        </div>
    );
};

export default Main;

Class Component
 * Creates a React component class with ES6 module system (Reactjs code snippets)
import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Main;
 */

const Main = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <CursorProvider>
                <section className="section main">
                    <Navbar />
                    <div className="container">
                        <h1 className="main-heading">{t("M001")}</h1>
                    </div>
                    <div class="vc-toggle-container">
                        <label class="vc-small-switch">
                            <input type="checkbox" class="vc-switch-input" />
                            <span class="vc-switch-label" data-on="Ko" data-off="En"></span>
                            <span class="vc-switch-handle"></span>
                        </label>
                    </div>
                </section>
                <AboutMe />
                <Carrer />
                <Skill />
                <Project />
            </CursorProvider>
            <Footer />
        </div>
    );

};

export default Main;

// class Main extends Component {
//     render() {
//         const { text } = useTranslation();
//         return (
//             <div>
//                 <Header />
//                 <CursorProvider>
//                     <section className='section main'>
//                         <Navbar />
//                         <div className='container'>
//                             <h1 className='main-heading'>
//                             {text("M001")}
//                             </h1>
//                         </div>
//                     </section>
//                     <AboutMe></AboutMe>
//                     <Carrer></Carrer>
//                     <Skill></Skill>
//                     <Project></Project>
//                 </CursorProvider>
//                 <Footer />
//             </div>
//         );
//     }
// }

// export default Main;