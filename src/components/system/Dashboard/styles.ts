"use client";
import globalStyling  from "@/styles/globals";
import styled from "styled-components";

export const MenuDiv = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 50px;
  box-shadow: 0 0 5px 0 #666;
  box-shadow: ${globalStyling.boxShadow};
  position: fixed;

  > ul {
    > li {
      position: relative;
      > a {
        color: ${globalStyling.secondaryColor};
        font-size: 20px;
        display: block;
        text-align: center;
        height: 50px;
        padding: 10px 0;
      }
    }

    > li:not(:has(img)):hover {
      background: #f4f8f9;

      > a {
        color: ${globalStyling.baseColor};
      }
      ul {
        display: block;
      }
    }

    &:first-child {
      border-bottom: 1px solid #e7e7e7;
      padding: 30px 0 30px;
      margin-bottom: 15px;
    }

    &:last-child {
      border-top: 1px solid #e7e7e7;
      padding-top: 20px;
      margin-top: 15px;

      li {
        a {
          color: ${globalStyling.baseColor};

          &:hover {
            color: ${globalStyling.secondaryColor};
          }
        }
      }
    }

    ul {
      position: absolute;
      top: 1px;
      left: 50px;
      width: 250px;
      box-shadow: ${globalStyling.boxShadow};
      padding: 10px 20px;
      z-index: 1;
      background: #f4f8f9;
      display: none;

      li {
        span {
          font-weight: 700;
          margin-bottom: 15px;
          margin-top: 5px;
          display: block;
          color: ${globalStyling.secondaryColor};
        }
        a {
          color: ${globalStyling.secondaryColor};
          padding-bottom: 5px;
          display: block;

          &:hover {
            color: ${globalStyling.baseColor};
          }
        }
      }
    }
  }
`;
