import React, { Component } from 'react'
import {HiSpeakerphone} from 'react-icons/hi';
import {AiOutlineAim} from 'react-icons/ai';
import {BiNews} from 'react-icons/bi';
import './CSS/DivThreeComponent.css';

export default class DivThreeComponent extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
            {/* <div className="lines"></div> */}
            <div className="secondary">
                <div className="create-campaign">
                    <HiSpeakerphone size={25}/>
                    <span> Create Campaign</span>
                </div>
                <div className="lines"></div>
                <div className="create-ad-group">
                    <AiOutlineAim size={25}/>
                    <span>
                        Create Ad Group
                    </span>
                </div>
                <div className="lines"></div>
                <div className="create-creative">
                    <BiNews size={25}/>
                    <span>
                        Create Creative
                    </span>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
