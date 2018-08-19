import property from "lodash/property";
import styled from "react-emotion/macro";

import Checkbox from "components/fields/checkbox";
import Input from "components/input";

export default component => styled(component)`
  ${Checkbox} {
    background-color: #fff;
    border: solid 1px #699ef5;
    border-radius: 20px;
    display: inline-block;
    overflow: hidden;
    padding: 0 10px;
    width: 80px;

    &,
    label {
      position: relative;
    }

    ${Input} {
      left: -100vw;
      position: absolute;
      top: -100vh;

      &:checked + label:before {
        left: calc(30% + 9px);
      }
    }

    label {
      cursor: pointer;
      display: block;
      font-family: ${property("theme.typography.primary")};
      font-weight: bold;
      width: 100%;
      z-index: 1;

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
      }

      &:before {
        background-color: #eaf0fc;
        border: solid 1px #699ef5;
        border-radius: 20px;
        height: 100%;
        left: -11px;
        top: -1px;
        transition: left 0.2s linear;
        width: 70%;
        z-index: -1;
      }

      &:after {
        content: "\f0ac";
        font-family: ${property("theme.typography.icon")};
        font-size: 25px;
        right: 0;
        top: 0;
      }
    }
  }
`;
