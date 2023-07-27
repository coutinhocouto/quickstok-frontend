"use client";
import styled from "styled-components";

export const HeaderMain = styled.section`
  background-color: #fb990f;
  padding: 30px 0;
`;

export const RegisterButton = styled.button `
    background-color: #2d0102;
    color: #fff;    
    border-radius: 100px;
    font-weight: 700;
    border-color: #2d0102;
    margin-left: 10px;

    a {
      padding: 5px 20px;
      display: inline-block;
    }
    &:hover {
      color: #2d0102;
    }
    &::before {
      background-color: #fb990f;
      border-radius: 100px;
    }
    svg {
      height: 13px;
    }
`
