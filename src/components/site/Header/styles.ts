"use client";
import styled from "styled-components";
import globalStyling  from "@/styles/globals";

export const HeaderMain = styled.section`
  background-color: ${globalStyling.baseColor};
  padding: 30px 0;

  .holder {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 700px) {
      flex-direction: column;

      > div a img {
        margin-bottom: 20px;
      }
    }

    @media only screen and (max-width: 350px) {
      padding: 0 20px;
    }
  }
`;

export const RegisterButton = styled.button`
  background-color: ${globalStyling.secondaryColor};
  color: #fff;
  border-radius: 100px;
  font-weight: 700;
  border-color: ${globalStyling.secondaryColor};
  margin-left: 10px;

  a {
    padding: 5px 20px;
    display: inline-block;
  }
  &:hover {
    color: ${globalStyling.secondaryColor};
  }
  &::before {
    background-color: ${globalStyling.baseColor};
    border-radius: 100px;
  }
  svg {
    height: 13px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 13px;
  }
`;
