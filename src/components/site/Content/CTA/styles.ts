"use client";
import styled from "styled-components";

export const CTAButton = styled.button `
    background-color: #2d0102;
    color: #fff;    
    border-radius: 100px;
    font-weight: 700;
    border: none;
    display: block;

    a {
      padding: 10px 40px;
      display: inline-block;
      position: relative;

      &::after {
        animation: pulse-brown-medium-sm 3.5s infinite;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 42px;
        z-index: -1;
      }
      
      &::before {
        animation: pulse-brown-small-sm 3.5s infinite;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 42px;
        z-index: -1;
      }

      @media only screen and (max-width: 991px) {
        padding: 10px 20px;
        font-size: 13px;
      }
    }

    &:hover {
      color: #2d0102;
    }
    &::before {
      background-color: #fb990f;
      border-radius: 100px;
    }

`
