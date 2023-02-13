import { useState, useEffect } from "react";
import {
  Grid,
  ImageList,
  Tooltip,
  Typography,
} from "@mui/material";
import { CocktailsDetails } from "../Model";
import { StyledImageListItem, StyledImageListItemBar, StyledSpan } from "./styles";
import { TopNavBar } from "../TopNavigationBar";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading";

const Cocktails = () => {
  const navigate = useNavigate();
  const [cocktailData, setCocktailData] = useState<CocktailsDetails>();
  const [searchItem, setSearchItem] = useState('');
  
  useEffect(() => {
    fetchData();
  }, []);

  if (!cocktailData) {
    return <Loading/>;
  }

  async function fetchData() {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    const json = await response.json();
    setCocktailData(json);
  }

  async function filterData(searchValue: string) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
    );
    const json = await response.json();
    console.log(json);
    setCocktailData(json);
  }

  const handleSearch = (event: any) => {
    filterData(event.target.value);
    setSearchItem(event.target.value);
  };

  const handleItemClick = (item: any) => {
    navigate(`/cocktailsDetails/${item.idDrink}`);
  };

  return (
    <>
      <TopNavBar handelSearch={handleSearch} searchValue={searchItem}/>
      <div style={{ marginLeft: '80px', marginRight: '80px'}}>
      <Grid container>
        <Grid item xs={12}>
              {cocktailData !== null  &&(
              <ImageList cols={4} gap={30}>
                {cocktailData?.drinks?.map((item) => (
                  <StyledImageListItem
                    id="listitem"
                    key={item.strDrinkThumb}
                    onClick={() => handleItemClick(item)}
                  >
                    <img style={{borderRadius: '8px'}}
                      alt={''}
                      src={`${item.strDrinkThumb}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.strDrinkThumb}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      loading="lazy"
                    />
                    <StyledImageListItemBar
                      subtitle={<Tooltip title={'Click to view details'}><StyledSpan style={{ fontSize: '1.1rem' }}>{item.strDrink}</StyledSpan></Tooltip>}
                      title={<span style={{ fontSize: '13px' }}>{item.strCategory}</span>}
                      position="below"
                    />
                  </StyledImageListItem>
                ))}
              </ImageList>
              )}
        </Grid>
      </Grid>
      </div>
      {!cocktailData.drinks &&(<Typography>{'Sorry, we could not find a cocktail matching your search criteria. Please try searching again with different keywords'}</Typography>)}
    </>
  );
};

export default Cocktails;
