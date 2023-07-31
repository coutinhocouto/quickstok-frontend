"use client";
import styled from "styled-components";

export const NewsHolder = styled.div`
  box-shadow: 0 4px 10px #0c0c0c21;
  padding: 50px;
  border-radius: 12px;
  margin-bottom: -95px;
  position: relative;
  z-index: 99;
  background-color: #fb990f;
  color: #2d0102;
  display: flex;

  > div {
    width: 50%;

    @media only screen and (max-width: 991px) {
      width: 100%;
    }
  }

  h3 {
    font-size: 40px;
    font-weight: 700;
    line-height: 1;

    @media only screen and (max-width: 991px) {
      font-size: 35px;
    }

    @media only screen and (max-width: 567px) {
      font-size: 25px;
    }
  }

  p {
    font-size: 19px;
    line-height: 1;

    @media only screen and (max-width: 991px) {
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 567px) {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 991px) {
    flex-direction: column;
    padding: 35px;
  }

  @media only screen and (max-width: 567px) {
    margin: 0 2% -95px;
    width: 96%;
  }
`;

export const NewsForm = styled.div`
  display: flex;
  gap: 2%;

  input {
    width: 68%;
    border-radius: 6px;
    padding: 15px 20px;
    color: #2d0102;

    @media only screen and (max-width: 500px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  button {
    background-color: #fb990f;
    color: #2d0102;
    font-weight: 700;
    font-size: 20px;
    border-radius: 6px;
    border-color: #2d0102;
    width: 30%;

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

    @media only screen and (max-width: 567px) {
      font-size: 14px;
      width: 100%;
    }

    @media only screen and (max-width: 500px) {
      padding: 15px 20px;
    }
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`