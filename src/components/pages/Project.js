import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-scroll';

const store = {
    slideIndex: 1,
}
// showSlides(slideIndex);

// Next/Previous controls
function handleSlides(n) {
    showSlides(store.slideIndex += n);
}

// current slide controls
function handleCurrentSlide(n) {
    showSlides(store.slideIndex = n);
}

function showSlides(n) {
    let i,
        slides = document.getElementsByClassName("mySlides"),
        dots = document.getElementsByClassName("dot");


    console.log(n, store.slideIndex, slides, slides.length, dots)
    if (n > slides.length) { store.slideIndex = 1 }
    if (n < 1) { store.slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[store.slideIndex - 1].style.display = "block";
    dots[store.slideIndex - 1].className += " active";
}

gsap.registerPlugin(ScrollTrigger);
// https://codesandbox.io/s/gsap-react-horizontal-scroll-forked-0mrz72?file=/src/styles.css:472-528

const Project = () => {
    const sliderRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");

            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: sliderRef.current,
                    pin: true,
                    scrub: 0.6,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" - 100 * (panels.length - 1),
                    //+ document.querySelector('.horizontal_scroll').offsetWidth * panels.length,
                    // markers: true
                }
            });
        });
        return () => ctx.revert();
    });

    return (
        <section className='section project' ref={sliderRef} id="project">
            <div className='container'>
                <div className='horizontal_scroll'>
                <div className='panel 01'>
                        <div className='content'>
                            <div className='img'>
                                {/* <span className='num'>01</span> */}
                                <div className='slideshow_container'>
                                    <div className="fade" style={{ display: "block" }}>
                                        {/* 문제 있는 코드 */}
                                        <img src={require('../../assets/resources/Fiori_01.png')} alt="" style={{ border: "10px outset silver" }}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='txt'>
                                <h3>관리자 페이지</h3>
                                <p className='sub'>
                                    UI5 환경에서 oData를 활용하여 만든 관리자 웹페이지
                                </p>
                                <div className='text'>
                                    <p>
                                        1. Top3 제품
                                        <br />
                                        2. Top3 고객
                                        <br />
                                        3. 월별 판매 그래프
                                        <br />
                                        <br />
                                        월별 매출액 데이터를 꺾은선 그래프로 시각화하여 매출 추이를 분석하고 예측할 수 있도록
                                        지원함으로써, 효율적인 재고 관리와 매출 증대를 위한 전략 수립에 기여했습니다.
                                        {/* 자바스크립트 버전과 타입스크립트 버전 두 가지로,
                                        Hacker News API를 이용한 반응형 웹 어플리케이션입니다.
                                        <br />
                                        디자인은 Tailwind.css를 활용하였고
                                        라우터, 페이징, 자연스러운 화면전환이 가능합니다. */}
                                    </p>
                                    {/* href -> git 서버에 올린 후 변경 필요 */}
                                    {/* <a href="https://ssongs2.github.io/HNC_Typerscript/" rel="noreferrer" target="_blank" data-text="Demo" className='button_gradient'>Demo</a>
                                    <a href="https://github.com/Ssongs2/HNC_Javascript" rel="noreferrer" target="_blank" data-text="JavaScript" className='button_gradient'>JavaScript</a>
                                    <a href="https://github.com/Ssongs2/HNC_Typerscript" rel="noreferrer" target="_blank" data-text="TypeScript" className='button_gradient'>TypeScript</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='panel 02'>
                        <div className='content'>
                            <div className='img'>
                                {/* <span className='num'>01</span> */}
                                <div className='slideshow_container'>
                                    <div className="fade" style={{ display: "block" }}>
                                        {/* 문제 있는 코드 */}
                                        <img src={require('../../assets/resources/hnc_01.png')} alt="" style={{ border: "10px outset silver" }}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='txt'>
                                <h3>Hacker News Client App</h3>
                                <p className='sub'>
                                    Responsible App using Hacker News API
                                </p>
                                <div className='text'>
                                    <p>
                                        There are two types of responsible web applications,
                                        the JavaScript version and the TypeScript version that utilize the Hacker News API.
                                        <br />
                                        I used Tailwind.css for the design.
                                        Router, paging, and natural screen switching are possible.
                                        {/* 자바스크립트 버전과 타입스크립트 버전 두 가지로,
                                        Hacker News API를 이용한 반응형 웹 어플리케이션입니다.
                                        <br />
                                        디자인은 Tailwind.css를 활용하였고
                                        라우터, 페이징, 자연스러운 화면전환이 가능합니다. */}
                                    </p>
                                    {/* href -> git 서버에 올린 후 변경 필요 */}
                                    <a href="https://ssongs2.github.io/HNC_Typerscript/" rel="noreferrer" target="_blank" data-text="Demo" className='button_gradient'>Demo</a>
                                    <a href="https://github.com/Ssongs2/HNC_Javascript" rel="noreferrer" target="_blank" data-text="JavaScript" className='button_gradient'>JavaScript</a>
                                    <a href="https://github.com/Ssongs2/HNC_Typerscript" rel="noreferrer" target="_blank" data-text="TypeScript" className='button_gradient'>TypeScript</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='panel 03'>
                        <div className='content'>
                            <div className='img'>
                                {/* <span className='num'>02</span> */}
                                <div className='slideshow_container'>
                                    <div className="mySlides fade" style={{ display: "block" }}>
                                        <img src={require('../../assets/resources/sms_01.png')} alt="" style={{ border: "10px outset silver" }}></img>
                                    </div>

                                    <div className='mySlides fade'>
                                        <img src={require('../../assets/resources/sms_02.png')} alt="" style={{ border: "10px outset silver" }}></img>
                                    </div>

                                    <div className='mySlides fade'>
                                        <img src={require('../../assets/resources/sms_03.png')} alt="" style={{ border: "10px outset silver" }}></img>
                                    </div>

                                    <a className="prev" onClick={() => handleSlides(-1)}>&#10094;</a>
                                    <a className="next" onClick={() => handleSlides(1)}>&#10095;</a>
                                </div>
                                <div className='dot_container'>
                                    <span className="dot" onClick={() => handleCurrentSlide(1)}></span>
                                    <span className="dot" onClick={() => handleCurrentSlide(2)}></span>
                                    <span className="dot" onClick={() => handleCurrentSlide(3)}></span>
                                </div>
                            </div>
                            <div className='txt'>
                                <h3>SMS</h3>
                                <p className='sub'>
                                    Communication Tool without a device at Business Platform
                                    <br />

                                    <Link to="carrer" spy={true} smooth={true}>
                                        <a href='' >@Carrer</a>
                                    </Link>
                                </p>
                                <div className='text'>
                                    <p>
                                        SMS is one of the Collaboration service at WEHAGO
                                        Using React, React-Redux <br />
                                        <b style={{ font: "revert" }}>Main function</b> <br />
                                        - Various types of transmission Method <br />
                                        - Attach files maps <br />
                                        - Transmission options and management <br />
                                        - WEHAGO services connection <br />
                                    </p>
                                    {/* 어떻게 처리해야할지 생각 해야 함. */}
                                    <a href="https://www.wehago.com/landing/en/home/" target="_blank" rel="noreferrer" data-text="MoreView" className='button_gradient'>MoreView</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='panel orange'>
                        <div className='content'>
                            <div className='img'>
                                <span className='num'>03</span>

                            </div>
                            <div className='txt'>
                                <h3>SMS</h3>
                                <p className='sub'>
                                    Message without a device
                                </p>
                                <div className='text'>
                                    <p>
                                        Company customized message service that transmits conveniently and quickly
                                        without a device.
                                        <br />
                                        SMS is one of Collaboration Services Using React, Router, Redux
                                    </p>
                                    <a href="" target="_blank" data-text="MoreView" className='button_gradient'>MoreView</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='panel purple'>Four</div> */}
                </div>
            </div>
        </section >
    )
}
export default Project;