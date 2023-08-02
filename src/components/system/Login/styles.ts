"use client";
import { globalStyling } from "@/styles/globals";
import styled from "styled-components";

export const LoginSec = styled.section`
  background-color: ${globalStyling.baseColor};
  height: 100vh;

  > div {
    max-width: 350px;
    wdith: 100%;
    margin: 0 auto;
    padding-top: 10%;
  }
`;

export const LoginAction = styled.section`
  a {
    color: ${globalStyling.secondaryColor};

    &:hover {
      color: #fff;
    }
  }
`;
