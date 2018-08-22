import property from "lodash/property";
import styled from "react-emotion/macro";

import Definition, { Title, Description } from "components/definition";

export default component => styled(component)`
  align-items: flex-start;
  display: flex;
  font-family: ${property("theme.typography.primary")};
  justify-content: space-between;
  width: 100%;

  & > ${Definition} {
    width: calc((100% - 40px) / 3);

    &,
    & > ${Description} {
      position: relative;
    }

    & > ${Title} {
      text-align: center;

      &:nth-child(3) {
        display: none;
      }
    }

    &:nth-child(1) {
      & > ${Title}:nth-child(1) {
        color: rgba(91, 195, 76, 1);
      }
    }

    &:nth-child(2) {
      & > ${Title}:nth-child(1) {
        color: rgba(242, 104, 95, 1);
      }

      & > ${Description} > ${Definition} {
        position: relative;

        &:before {
          border-bottom: dashed 1px rgba(0, 0, 0, 0.25);
          content: "";
          display: block;
          height: 0;
          position: absolute;
          top: calc(50% + 1px);
          transform: translateY(-50%);
          width: 100%;
        }

        & > ${Title} {
          display: inline-block;
          font-size: 14px;
          z-index: 1;

          &,
          &:nth-child(1) {
            position: relative;
          }

          &:nth-child(1) {
            background-color: #fff;
            box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            padding: 0 5px;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: calc(80% - 10px);

            &:after {
              content: "";
              display: block;
              height: 100%;
              left: 0;
              position: absolute;
              top: 0;
              width: 100%;
              z-index: -1;
            }
          }

          &:nth-child(2) {
            display: none;
          }

          &:nth-child(3) {
            background-color: #fff;
            padding-left: 10px;
            text-align: right;
            max-width: calc(15% - 10px);
          }
        }

        &:nth-child(1) {
          & > ${Title}:nth-child(1) {
            color: rgba(155, 170, 182, 1);

            &:after {
              background-color: rgba(31, 41, 49, 0.2);
            }
          }
        }

        &:nth-child(2) {
          & > ${Title}:nth-child(1) {
            color: rgba(242, 104, 95, 1);

            &:after {
              background-color: rgba(242, 104, 95, 0.5);
            }
          }
        }

        &:nth-child(3) {
          & > ${Title}:nth-child(1) {
            color: rgba(255, 255, 255, 0.5);

            &:after {
              background-color: rgba(242, 104, 95, 0.8);
            }
          }
        }

        &:nth-child(4) {
          & > ${Title}:nth-child(1) {
            color: rgba(250, 172, 94, 1);

            &:after {
              background-color: rgba(250, 172, 94, 0.4);
            }
          }
        }

        &:nth-child(5) {
          & > ${Title}:nth-child(1) {
            color: rgba(250, 172, 94, 1);

            &:after {
              background-color: rgba(250, 172, 94, 0.6);
            }
          }
        }

        &:nth-child(6) {
          & > ${Title}:nth-child(1) {
            color: rgba(255, 255, 255, 0.5);

            &:after {
              background-color: rgba(250, 172, 94, 0.8);
            }
          }
        }

        &:nth-child(7) {
          & > ${Title}:nth-child(1) {
            color: rgba(155, 170, 182, 1);

            &:after {
              background-color: rgba(31, 41, 49, 0.3);
            }
          }
        }

        &:nth-child(8) {
          & > ${Title}:nth-child(1) {
            color: rgba(255, 255, 255, 0.5);

            &:after {
              background-color: rgba(31, 41, 49, 0.5);
            }
          }
        }
      }
    }

    &:nth-child(3) {
      & > ${Title}:nth-child(1) {
        color: rgba(177, 116, 227, 1);
      }
    }

    & > ${Description} {
      width: 100%;

      & > ${Definition} {
        display: flex;
        justify-content: space-between;
      }
    }

    span {
      display: none;
    }
  }
`;
