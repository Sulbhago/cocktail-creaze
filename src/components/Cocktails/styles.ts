import styled from '@emotion/styled'
import { ImageListItem, ImageListItemBar, List, Typography } from '@mui/material'

export const StyledList = styled(List)`
  height: 100%;
`

export const StyledTypography = styled(Typography)`
  font-weight: bold;
  font-size: 32px;
`

export const StyledDiv = styled('div')`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`

export const StyledImageListItem = styled(ImageListItem)`
height: 40px;
padding-top: 16px;
padding-left: 16px;
padding-right: 16px;
transition: transform 0.5s ease-in-out;
&:hover {
  transform: scale(1.1);
}
`
export const StyledImageListItemBar = styled(ImageListItemBar)`
  color: #000;
`

export const StyledSpan = styled('span')`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`