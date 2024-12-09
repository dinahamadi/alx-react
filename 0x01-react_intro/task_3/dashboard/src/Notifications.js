import React from 'react';
import close_butt from './close-Icon.png';
import './Notifications.css';
import {getLatestNotification, getLatestNotifications } from './utils'

export function Notifications() {
    const butt_styles = {
        background: 'transparent',
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
    }
    const closefunction = () => {
        console.log('Close button has been clicked');
    }
    return (<div className="Notifications">
        <button
            style={butt_styles}
            aria-label="Close"
            onClick={closefunction}
        >
            <img alt="Close" src={close_butt}></img>
        </button>
        <p>Here is the list of notifications
        </p>
        <ul>
            <li data-priority= "default">New course available</li>
            <li data-priority="urgent">New resume available</li>
            <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}>

            </li>
        </ul>
    </div>
    )
};