import React, { Component } from 'react';
import {NavLink }  from 'react-router-dom';
import './Forbidden.scss';

class Forbidden extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
        <div className="top_spaced">
            <div class="wrapper">
                <section class="pedastal">
                    <div class="pedastal-block1"></div>
                    <div class="pedastal-block2"></div>
                    <div class="trapezium">
                        <div></div>
                        <div></div>
                    </div>
                </section>
                <section class="hall">
                    <div class="hall-pillar"></div>
                    <div class="hall-support"></div>
                    <div class="hall-pillar"></div>
                    <div class="hall-support"></div>
                    <div class="hall-pillar"></div>
                    <div class="hall-support"></div>
                    <div class="hall-pillar"></div>
                    <div class="hall-support"></div>
                    <div class="hall-pillar"></div>
                    <div class="hall-support"></div>
                    <div class="hall-pillar"></div>
                    <div class="hall-support"></div>
                    <div class="hall-pillar"></div>
                    <div class="hall-support"></div>
                    <div class="hall-pillar"></div>
                    <div class="hall-support"></div>
                    <div class="hall-pillar"></div>
                    <div class="hall-support"></div>
                    <div class="hall-pillar"></div>
                </section>
                <section class="lower-support">
                    <div class="lower-support-pillar"></div>
                    <div class="ornaments">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="lower-support-pillar"></div>
                    <div class="ornaments">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="lower-support-pillar"></div>
                    <div class="ornaments">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="lower-support-pillar"></div>
                    <div class="ornaments">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="lower-support-pillar"></div>
                    <div class="ornaments">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="lower-support-pillar"></div>
                    <div class="ornaments">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="lower-support-pillar"></div>
                    <div class="ornaments">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="lower-support-pillar"></div>
                    <div class="ornaments">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="lower-support-pillar"></div>
                    <div class="ornaments">
                        <div></div>
                        <div></div>
                    </div>
                    <div class="lower-support-pillar"></div>
                </section>
                <section class="lower-roof">
                    <div></div>
                    <div></div>
                </section>
                <section class="upper-support">
                    <div class="container">
                        <div class="lower-support-pillar"></div>
                        <div class="lower-support-pillar"></div>
                        <div class="lower-support-pillar"></div>
                        <div class="lower-support-pillar"></div>
                        <div class="lower-support-pillar"></div>
                        <div class="lower-support-pillar"></div>
                    </div>
                    <div class="ornaments"><div></div><div></div></div>
                    <div class="ornaments"><div></div><div></div></div>
                    <div class="ornaments"><div></div><div></div></div>
                    <div class="ornaments"><div></div><div></div></div>
                    <div class="ornaments"><div></div><div></div></div>
                    <div class="ornaments"><div></div><div></div></div>
                    <div class="ornaments"><div></div><div></div></div>
                    <section class="sign"></section>
                </section>
                <section class="upper-roof">
                    <div></div>
                    <svg width="520px" height="90px">
                        <path d="M495.689265,72.9065145 L520,90 L0,90 L24.3069308,72.9091893 L45.9698498,74.0444947 C88.9890231,76.2990341 125.690619,43.2527689 127.945158,0.233595624 L127.687016,0.220066965 L128,0 L392,0 L392.30918,0.217392187 L392,0.233595624 C394.254539,43.2527689 430.956135,76.2990341 473.975308,74.0444947 L495.689265,72.9065145 Z" id="Combined-Shape" fill="#FDBB3B"></path>
                    </svg>
                    <div></div>
                </section>
                <section class="roof-top">
                    <div></div>
                    <div></div>
                </section>
                <div class="cloud cloud-01"></div>
                <div class="cloud cloud-02"></div>
                <div class="cloud cloud-03"><div></div></div>
                <div class="sun"><div class="copy">403</div></div>
            </div>
            <div class="wall">
                    <div class="wall-roofing-bottom"></div>
                    <div class="wall-roofing-top"></div>
            </div>
            <div class="headline">
                <h1>Forbidden City</h1>
                <h2>✋ You don't have permission to access 🚧 this area ✋</h2>
            </div>
        </div>
        );
    }

}

export default Forbidden;
