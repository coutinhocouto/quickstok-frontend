"use client";
import globalStyling  from "@/styles/globals";
import styled from "styled-components";

export const FooterSec = styled.footer`
  padding: 150px 0 50px;
  background-color: ${globalStyling.secondaryColor};
  position: relative;
  overflow: hidden;

  .mx-auto {
    z-index: 1;
    position: relative;
  }
`;

export const FooterHolder = styled.div`
  color: #fff;
  text-align: center;
  font-weight: 300;

  svg {
    margin-left: 15px;
  }

  h4 {
    margin: 50px 0 10px;
    font-size: 23px;
    font-weight: 700;

    @media only screen and (max-width: 991px) {
      margin: 20px 0 10px;
    }
  }

  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  p {
    margin-top: 40px;
    padding-top: 40px;
    font-size: 12px;
    border-top: 1px dotted #333;

    @media only screen and (max-width: 991px) {
      border: none;
      margin-top: 40px;
      padding-top: 0px;
    }
  }
`;

export const FooterAnimation = styled.div`
  max-width: 1170px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  span:first-child {
    left: -17%;
    animation-delay: 3s;
  }

  span {
    transform: rotate(180deg);
    position: absolute;
    z-index: 99999;
    top: -275px;
    animation: star_down_one 6s infinite linear;
    opacity: 0;
  }

  .anim_line span:nth-child(2) {
    left: 0%;
    animation-delay: 5s;
  }

  span:nth-child(3) {
    left: 17%;
    animation-delay: 1s;
  }

  span:nth-child(4) {
    left: 34%;
    animation-delay: 4s;
  }

  .anim_line span:nth-child(5) {
    left: 51%;
    animation-delay: 7s;
  }

  .anim_line span:nth-child(6) {
    left: 68%;
  }

  span:nth-child(7) {
    left: 85%;
    animation-delay: 3s;
  }

  span:nth-child(8) {
    left: 99%;
    animation-delay: 2s;
  }

  span:nth-child(9) {
    left: 117%;
    animation-delay: 5s;
  }
`;
