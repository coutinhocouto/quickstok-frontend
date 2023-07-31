"use client";
import styled from "styled-components";

export const FormSec = styled.section`
  background-color: #fb990f;

  .holder {
    display: flex;

    div {
      width: 50%;
    }
  }
`;

export const FormPhase = styled.div`
  background-image: url(/destaque.webp);
  min-height: 800px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;
  align-items: end;
  display: flex;

  h1 {
    color: #fff;
    text-align: center;
    font-size: 25px;
    padding: 30px 30px 100px;
    font-weight: 500;
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export const FormRegister = styled.div`
  @media only screen and (max-width: 991px) {
    width: 100% !important;
  }

  h2 {
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    background: #2d0102;
    border-radius: 15px;
    padding: 30px 30px 50px;
    position: relative;
    gap: 5px;

    label {
      color: #a2a2a2;
      font-size: 15px;
    }

    input {
      margin-bottom: 10px;
      padding: 5px 10px 7px;
      border-radius: 5px;
      color: #2d0102;
    }

    img {
      position: absolute;
      right: 30px;
      top: 35px;
      animation: mymove 3s infinite;
    }

    button {
      background-color: #fb990f;
      color: #2d0102;
      padding: 20px;
      font-weight: 700;
      font-size: 20px;
      border-radius: 10px;
      border-color: #fb990f;

      &:hover {
        color: #fff;
      }
      &::before {
        background-color: #2d0102;
      }

      svg {
        display: inline-block;
        height: 18px;
        margin-top: -2px;
        margin-right: -6px;
      }
    }
  }
`;

export const Waves = styled.svg`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-top: -70px;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
    .content {
      height: 30vh;
    }
    h1 {
      font-size: 24px;
    }
  }
`;
