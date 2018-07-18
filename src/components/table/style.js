import styled from "react-emotion";

export default component => styled(component)`
  display: table;
  width: 100%;

  thead,
  tbody {
    float: left;
    width: 100%;
  }

  thead {
    background-color: #f0f3f7;
    border-bottom: solid 1px #e7e9ec;
    padding-right: 18px;
    width: calc(100% - 18px);
  }

  tbody {
    height: 50vh;
    overflow: auto;
  }

  tr {
    display: table;
    text-align: left;
    width: 100%;
  }

  tbody {
    background-color: #fff;

    tr:nth-child(2n + 1) {
      background-color: #f9f9f9;
    }
  }
`;
