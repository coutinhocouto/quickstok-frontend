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

  h3 {
    font-size: 40px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    font-size: 19px;
    line-height: 1;
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
  }
`