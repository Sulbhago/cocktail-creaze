import styled from '@emotion/styled';
import { AppBar, OutlinedInput, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  background-color: #282c34;
`;

export const StyledTypography = styled(Typography)`
  font-size: 2rem;
  font-family: emoji;
  font-style: oblique;
  align-items: center;
`;

export const StyledInput = styled(OutlinedInput)`
  color: #fff;
  height: 40px;
  margin-top: 8px;
  border: 1px solid #fff;
`

export const StyledHomeButtonDiv = styled('div')`
  display: flex;
  justify-content: start;
`

export const StyledTitleDiv = styled('div')`
  justify-content: center;
`
export const StyledSearchButtonDiv = styled('div')`
  display: flex;
  justify-content: end;
`