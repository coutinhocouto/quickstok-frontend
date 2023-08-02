"use client";
import { globalStyling } from "@/styles/globals";
import styled from "styled-components";

export const FeaturesSec = styled.section`
  padding: 100px 0;

  @media only screen and (max-width: 567px) {
    padding: 50px 0;
  }

  .holder {
    display: flex;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }

    @media only screen and (max-width: 567px) {
     padding: 0 20px;   
    }

    > div {
      width: 50%;

      @media only screen and (max-width: 767px) {
        width: 100%;

        &:first-child {
          margin-bottom: 30px;
        }
      }
    }
  }
`;

export const FeaturesH2 = styled.h2`
  color: ${globalStyling.secondaryColor};
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 50px;
  max-width: 620px;

  span {
    color: ${globalStyling.baseColor};
  }

  @media only screen and (max-width: 567px) {
    font-size: 30px;
    margin-bottom: 25px;
  }
`;

export const FeaturesUl = styled.ul`
  font-size: 20px;
  color: ${globalStyling.secondaryColor};
`