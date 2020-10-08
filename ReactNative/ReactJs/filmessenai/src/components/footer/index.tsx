import React from 'react';
import LNegativa from '../../assets/images/logonegativo.png';
import './style.css';
import '../../assets/styles/global.css';

function Footer() {
    return (
            <div className="footer">
                <img src={LNegativa} alt="logo em cores negativas, preto e branco" />

                <hr/>

                <ul className="infos">
                    <li>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</li>
                    <li>Call us now toll free: (800)2345-6789</li>
                    <li>Customer support: support@demolink.org</li>
                    <li>Skype: sample-username</li>
                </ul>

            </div>
    );
}
export default Footer;

