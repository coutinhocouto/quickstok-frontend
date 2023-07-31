"use client";
import styled from "styled-components";

export const PricesSec = styled.section`
  background-color: #2d0102;

  &::before {
    content: "";
    display: block;
    background-image: url(/brown-divider2.webp);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 125px;
    background-position: center;
    margin-bottom: 50px;
  }

  &::after {
    content: "";
    display: block;
    background-image: url(/brown-divider.webp);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 125px;
    background-position: center;
    margin-top: 50px;
  }

  .holder {
    display: flex;
    justify-content: space-around;
    
    @media only screen and (max-width: 567px) {
      flex-direction: column;
      padding: 0 10px;
    }

    > div {
      width: 30%;

      @media only screen and (max-width: 567px) {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
`;

export const PricesHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 30px;
  background-color: #fb990f;
  border-radius: 20px;
  color: #2d0102;

  ul {
    li {
      text-align: center;

      @media only screen and (max-width: 991px) {
        text-align: left;
      }
    }
  }

  span {
    font-size: 15px;
    text-align: center;

    @media only screen and (max-width: 991px) {
      font-size: 14px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
  }

  button {
    border: 1px solid #2d0102;
  }

  @media only screen and (max-width: 991px) {
    padding: 30px 20px;
  }

  @media only screen and (max-width: 767px) {
    padding: 30px 10px;
  }
`;

export const Price = styled.span`
  font-size: 48px !important;
  display: block;
  font-weight: 700;
  margin: 25px 0 0;
`;

export const PriceIconHolder = styled.div`
  color: #fff;
  background-color: #2d0102;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 0 8px 0 #2d0102;
  margin-bottom: 35px;

  svg {
    font-size: 50px;
  }
`;

export const PricesH2 = styled.h2`
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;

  @media only screen and (max-width: 567px) {
    font-size: 30px;
  }
`;
