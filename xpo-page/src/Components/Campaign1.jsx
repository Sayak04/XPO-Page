import React, { Component } from 'react'
import './Campaign1.css'

export default class Campaign1 extends Component {
  render() {
    return (
        <>
            <div className="campaign-container">
                <div className="symbols">
                    <div className="circle">
                        <p>1</p>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="campaign-box">
                    <h2>
                        Campaign Name
                    </h2>
                    <input 
                        className="input-box"
                        type="text"
                        placeholder="Campaign name" 
                    />
                </div>
            </div>
        </>
    )
  }
};
