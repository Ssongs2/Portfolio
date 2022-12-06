import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className="container" style={{ margin: "20px", height: "inherit" }} >
                <div className="top" style={{ display: "flex", justifyContent: "space-between", height: "60%" }}>
                    <div className="inner right" style={{ fontFamily: '"Monument Grotesk Mono Variable", Icons', fontStyle: 'normal', fontWeight: 700, padding: 0, margin: 0, fontSize: '8rem', lineHeight: 1, color: 'rgba(255, 255, 255, 1)', fontVariationSettings: '"slnt" 0, "MONO" 1' }}>
                        SongEunJi&apos;s
                        <br />
                        Portfolio
                    </div>
                    <div className="inner left" style={{ fontFamily: '"Monument Grotesk Mono Variable", Icons', fontStyle: 'normal', fontWeight: 700, padding: 0, margin: 0, fontSize: '8rem', lineHeight: 1, color: 'rgba(255, 255, 255, 1)', fontVariationSettings: '"slnt" 0, "MONO" 1' }}>
                        <div style={{ display: "inline-flex", flexDirection: "column" }}>
                            <a className="order" href="#">1</a>
                            <a className="order" href="#">2</a>
                            <a className="order" href="#">3</a>
                            <a className="order" href="#">4</a>
                        </div>
                    </div>
                </div>
                <div className="bottom" style={{ height: "40%" }}>
                    <div style={{
                        color: "white", fontSize: "1.4rem",
                        fontWeight: "700",
                        color: "rgba(255, 255, 255, 1)",
                        fontFamily: '"Diatype Variable", Icons',
                        fontStyle: "normal",
                        lineHeight: "1.2",
                        letterSpacing: ".07em",
                        fontVariationSettings: '"slnt" 0, "MONO" 1',
                        position: "relative",
                        top: "50%"
                    }}>
                        <p>I&apos;ll continue to make better Websites and Application out of Computer Language </p>
                    </div>
                </div>
            </div >
        );
    }
}

export default Main;