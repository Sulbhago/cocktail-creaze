import React from 'react';
import { AppBar, IconButton, InputAdornment, OutlinedInput, Toolbar, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './style.css';
import SearchIcon from "@mui/icons-material/Search";

export interface TopBarProps {
  searchValue: string;
  handelSearch: any;
  showSearch: boolean;
}

export const TopNavBar: React.FC<TopBarProps> = ({ searchValue, handelSearch, showSearch }) => {
  const navigate = useNavigate();
  return (
        <AppBar className="header">
          <Toolbar className="App-toolbar">
            <IconButton color="inherit" onClick={() => navigate(`/`)} data-test="btn-home" id="btn-home">
              <Home />
            </IconButton>
            <div color="inherit" style={{ width: '200px'}}>
                {'Cocktail Craze'}
              </div>
            <div className="head-text">
            {showSearch &&(<OutlinedInput
              id="search-input"
              type="text"
              style={{ color: 'white'}}
              className="head-search"
              placeholder="Search"
              value={searchValue}
              onChange={handelSearch}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon color="primary"/>
                </InputAdornment>
              }
            />)}
            </div>
          </Toolbar>
        </AppBar>
  );
};
