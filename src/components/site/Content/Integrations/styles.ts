"use client";
import globalStyling  from "@/styles/globals";
import Link from "next/link";
import styled from "styled-components";

export const IntegrationSec = styled.section`
  background-color: #f6f4fe;
  padding: 50px 0 100px;

  h2 {
    color: ${globalStyling.secondaryColor};
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 10px;

    span {
      color: ${globalStyling.baseColor};
    }

    @media only screen and (max-width: 567px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 16px;
    color: #3e3f66;
  }
`;

export const IntegrationUl = styled.ul`
  flex-wrap: wrap;
  align-items: center;
  margin: 50px 0;

  li {
    width: 19%;
    margin: 15px 0.5%;

    img {
      margin: 0 auto;
    }

    @media only screen and (max-width: 567px) {
      width: 32%;
    }

    @media only screen and (max-width: 350px) {
      width: 49%;
    }
  }
`;

export const IntegrationLink = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: underline;
  font-size: 16px;
  color: #3e3f66;
  margin-bottom: 10px;
`;
