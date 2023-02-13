import React from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { StyledAppBar, StyledHomeButtonDiv, StyledInput, StyledSearchButtonDiv, StyledTitleDiv, StyledTypography } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export interface TopBarProps {
  searchValue: string;
  handelSearch: any;
}

export const TopNavBar: React.FC<TopBarProps> = ({
  searchValue,
  handelSearch,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item xs={4}>
              <StyledHomeButtonDiv>
                <IconButton onClick={() => navigate(`/`)} data-test="btn-home" id="btn-home">
                  <Tooltip title={'Go to home'}>
                    <Home style={{ color: '#fff' }} />
                  </Tooltip>
                </IconButton>
              </StyledHomeButtonDiv>
            </Grid>
            <Grid item xs={4}>
              <StyledTitleDiv>
                <StyledTypography variant="h6">Cocktail Craze</StyledTypography>
              </StyledTitleDiv>
            </Grid>
            <Grid item xs={4}>
              <StyledSearchButtonDiv>
                <StyledInput
                  id="search-input"
                  label="search"
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={handelSearch}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: '#fff' }} />
                    </InputAdornment>
                  }
                />
              </StyledSearchButtonDiv>
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};
