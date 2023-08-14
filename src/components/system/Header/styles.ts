"use client";
import globalStyling  from "@/styles/globals";
import styled from "styled-components";

export const HeaderSec = styled.header`
  background-color: ${globalStyling.secondaryColor};
  padding: 60px 40px 30px;
  background-image: url(../bg-pattern.png);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  color: #fff;
  line-height: 30px;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const HeaderBreadcrumb = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;

  a {
    color: #fff;
  }
`;

export const HeaderUser = styled.div`
  position: relative;

  button {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    font-size: 18px;

    img {
      border-radius: 50%;
      margin-right: 10px;
      border: 2px solid ${globalStyling.baseColor};
    }
  }

  ul {
    background: #fff;
    box-shadow: ${globalStyling.boxShadow};
    border-radius: 5px;
    position: absolute;
    top: 50px;
    right: 0;
    width: 170px;
    display: none;
    padding: 10px 0;

    &.open {
      display: block;
    }

    &::before {
      content: "";
      position: absolute;
      top: -10px;
      right: 10px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
    }

    li {
      &:last-child {
        border-top: 1px solid #e7e7e7;
        padding-top: 10px;
        margin-top: 5px;
      }

      a {
        color: ${globalStyling.secondaryColor};
        display: block;
        padding: 5px 20px 5px;

        &:hover {
          color: ${globalStyling.baseColor};
        }
      }
    }
  }
`;
