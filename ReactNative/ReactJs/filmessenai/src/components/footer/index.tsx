import React from 'react';
import LNegativa from '../../assets/images/logonegativo.png';
import './style.css';
import '../../assets/styles/global.css';

function Footer() {
    return (
        <div className="footer">
            <div>
                <img src={LNegativa} alt="logo em cores negativas, preto e branco"/>
            </div>
            <hr/>
            <div>
                <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p><br/>
                <p>Call us now toll free: (800)2345-6789</p><br/>
                <p>Customer support: support@demolink.org</p><br/>
                <p>Skype: sample-username</p><br/>
            </div> 
        </div>
    );
}
export default Footer;

