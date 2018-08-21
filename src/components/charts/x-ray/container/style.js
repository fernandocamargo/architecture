import styled from "react-emotion/macro";

import Definition, { Title, Description } from "components/definition";

export default component => styled(component)`
  /*
  display: flex;
  justify-content: space-between;

  & > ${Definition} {
    position: relative;
    width: 130px;

    & > ${Title} {
      &:nth-child(1),
      &:nth-child(2) {
        text-align: center;
      }

      &:nth-child(3),
      span {
        display: none;
      }
    }

    & > ${Description} {
      background-color: rgba(28, 109, 201, 0.1);
      height: 300px;
      position: relative;

      ${Definition} {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
  }
  */
`;
