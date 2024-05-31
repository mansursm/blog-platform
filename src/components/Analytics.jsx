import React from 'react'
import './Analytics.css'

function Analytics() {
    return (
        <div className="analytics">
            <div className="analyticsContent">
                <div className="analyticsChart">
                    <h3>Visitors</h3>
                    <p>Graph goes here</p>
                </div>
                <div className="analyticsStats">
                    <div className="stat">
                        <div className="value">32</div>
                        <div className="name">Total Visitors</div>
                    </div>
                    <div className="stat">
                        <div className="value">12</div>
                        <div className="name">Unique Visitors</div>
                    </div>
                    <div className="stat">
                        <div className="value">4</div>
                        <div className="name">Returning Visitors</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics
