import React, { Component } from 'react'
import './Buttons.css';

export default class Buttons extends Component {
  render() {
    return (
        <>
            <div className="low-buttons">
                <button class="button-21 cancel-button" role="button">CANCEL</button>
                <button class="button-21 next-button" role="button">NEXT</button>
            </div>
        </>
    )
  }
}
