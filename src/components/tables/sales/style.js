import styled from "react-emotion";

export default component => styled(component)`
  td:nth-child(1) {
    width: 50px;
  }

  td:nth-child(2) {
    width: 40%;
  }

  td:nth-child(3),
  td:nth-child(4),
  td:nth-child(5),
  td:nth-child(6),
  td:nth-child(7) {
    text-align: center;
    width: 90px;
  }
`;
