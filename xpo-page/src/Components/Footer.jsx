import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
  render() {
    return (
      <>
        <FooterComp>
            <p className="company">
                2022 &#169; Solera
            </p>
            <a href="#">
                Terms
            </a>
            <a href="#">
                Privacy Policy
            </a>
        </FooterComp>
      </>
    )
  }
}

const FooterComp = styled.div`
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        margin-left: 2rem;
        text-decoration: none;
        color: #c5c2c2;
    }
    p {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 500;
    }
`