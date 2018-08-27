import styled from "react-emotion/macro";

import { Secondary as Heading } from "components/heading";
import Menu, { Item as MenuItem } from "components/menu";
import Link from "components/link";
import Table, {
  Head as TableHead,
  Body as TableBody,
  Row as TableRow,
  Cell as TableCell
} from "components/table";
import TableProducts from "components/tables/products";
import Pagination from "components/pagination";

export default component => styled(component)`
  font-family: ${({
    theme: {
      typography: { primary }
    }
  }) => primary};
  padding: 20px 40px 40px 40px;

  & > {
    ${Heading} {
      font-size: 1.25rem;
    }

    ${Menu} {
      display: flex;
      justify-content: flex-end;

      ${MenuItem} {
        &:not(:first-child) {
          margin-left: 15px;
        }
      }

      ${Link} {
        border-radius: 5px;
        color: #699ef5;
        border: solid 1px #699ef5;
        display: block;
        font-size: 0.8rem;
        padding: 5px 15px;
        text-decoration: none;
        transition: background-color 0.2s linear, color 0.2s linear;

        &:hover {
          background-color: #699ef5;
          color: #fff;
        }

        &:after {
          display: inline-block;
        }
      }
    }
  }

  ${TableProducts} {
    border-left: solid 1px #969696;
    border-right: solid 1px #969696;
    border-top: solid 1px #969696;
    border-top-left-radius: 7.5px;
    border-top-right-radius: 7.5px;
    margin-top: 20px;
    overflow-x: scroll;
    position: relative;

    & > div {
      max-height: calc(50vh - 50px);
      overflow-y: scroll;
      margin-top: 50px;
      min-width: 1450px;
    }

    ${Table} {
      border-collapse: separate;
      color: rgba(31, 41, 49, 1);
      font-family: ${({
        theme: {
          typography: { secondary }
        }
      }) => secondary};
      font-size: 14px;
      font-weight: 400;
      table-layout: fixed;
      width: 1450px;
    }

    ${TableHead} {
      background-color: #f0f3f7;
      left: 0;
      min-width: 1450px;
      position: absolute;
      top: 0;

      ${TableCell} {
        height: 50px;
      }
    }

    ${TableBody} {
      ${TableRow} {
        display: block;
      }
    }

    ${TableCell} {
      &:nth-child(1) {
        text-align: center;
        width: 150px;
      }

      &:nth-child(2) {
        width: 300px;
      }

      &:nth-child(3) {
        text-align: center;
        width: 150px;
      }

      &:nth-child(4) {
        text-align: center;
        width: 100px;
      }

      &:nth-child(5) {
        text-align: center;
        width: 100px;
      }

      &:nth-child(6) {
        text-align: center;
        width: 100px;
      }

      &:nth-child(7) {
        text-align: center;
        width: 100px;
      }

      &:nth-child(8) {
        width: 100px;
      }

      &:nth-child(9) {
        width: 350px;
      }
    }
  }

  ${Pagination} {
    border-bottom: solid 1px #969696;
    border-bottom-left-radius: 7.5px;
    border-bottom-right-radius: 7.5px;
    border-left: solid 1px #969696;
    border-right: solid 1px #969696;
    overflow: hidden;
  }
`;
