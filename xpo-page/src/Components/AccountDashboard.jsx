import React, { Component } from "react";
import styled from "styled-components";
export default class AccountDashboard extends Component {
  render() {
    return (
      <>
        <Account> 
            <p>
                Account Dashboard
            </p>
        </Account>
      </>
    );
  }
}

const Account = styled.div`
    // background-color: #f9f5f5;
    height: 3.5rem;
    display: flex;
    p {
        display: flex;
        align-items: center;
        margin-left: 1.5rem;
        color: #bbacac;
        font-family: 'Noto Sans', sans-serif;
    }
    border-bottom: 2px solid #ebe0e0;
`
