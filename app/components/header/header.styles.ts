import styled from "@emotion/styled";
import { SxProps } from "@mui/material";
import { Link as RemixLink } from "remix";

export const Link = styled(RemixLink)`
  font-variant: small-caps;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: black;
`;

export const listItemSx: SxProps = {
  padding: 0,
};
