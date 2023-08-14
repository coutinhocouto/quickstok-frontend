"use client";
import globalStyling from "@/styles/globals";
import styled from "styled-components";

export const LoginForm = styled.form`
  background-color: ${globalStyling.secondaryColor};
  padding: 25px;
  border-radius: 15px;
  margin-top: 30px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px 0 #2d0102;

  input {
    width: 100%;
    margin-bottom: 15px;
    padding: 8px;
    border-radius: 10px;
  }

  button {
    background-color: ${globalStyling.baseColor};
    color: ${globalStyling.secondaryColor};
    border: 1px solid ${globalStyling.baseColor};
    width: 100%;
    border-radius: 10px;
    padding: 8px;
    font-weight: 700;

    &:hover {
      color: #fff;
    }
    &::before {
      background-color: ${globalStyling.secondaryColor};
    }
  }
`;
