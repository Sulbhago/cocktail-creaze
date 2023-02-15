import { useState, useEffect } from 'react';
import { Tooltip, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { CocktailsDetails } from '../../Model/cocktails';
import { TopNavBar } from '../../components/TopNavigationBar';
import './style.css';

const Cocktails = () => {
  const navigate = useNavigate();
  const [cocktailData, setCocktailData] = useState<CocktailsDetails>();
  const [searchItem, setSearchItem] = useState('');
/* eslint-disable @typescript-eslint/no-unused-vars */
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Unable to fetch data from API');
        }
      })
      .then((cocktailData) => {
        setCocktailData(cocktailData);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  async function filterData(searchValue: string) {
    if (searchValue) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Unable to fetch data from API');
          }
        })
        .then((cocktailData) => {
          setCocktailData(cocktailData);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      fetchData();
    }
  }

  const handleSearch = (event: any) => {
    filterData(event.target.value);
    setSearchItem(event.target.value);
  };

  const handleItemClick = (item: any) => {
    navigate(`/cocktailsDetails/${item.idDrink}`);
  };

  if (!cocktailData) {
    return <Loading />;
  }

  return (
    <>
      <TopNavBar handelSearch={handleSearch} searchValue={searchItem} showSearch={true} />
      <div className="wrapper">
        {cocktailData?.drinks?.map((item) => (
          <>
            {cocktailData?.drinks.length === 1 ? (
              <Tooltip title="Click to view details">
                <div className="child" onClick={() => handleItemClick(item)}>
                  <img
                    alt=""
                    style={{ width: '100%', height: '500px', justifyContent: 'center' }}
                    src={`${item.strDrinkThumb}?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=07a78ca4d41f04cad17ecb9d8481f565&auto=format&fit=crop&w=1350&q=40`}
                  />
                  <div className="labeDrink">{item.strDrink}</div>
                  <div>{item.strCategory}</div>
                </div>
              </Tooltip>
            ) : (
              <Tooltip title="Click to view details">
                <div className="child" onClick={() => handleItemClick(item)}>
                  <img
                    alt=""
                    src={`${item.strDrinkThumb}?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=07a78ca4d41f04cad17ecb9d8481f565&auto=format&fit=crop&w=1350&q=40`}
                  />
                  <div className="labeDrink">{item.strDrink}</div>
                  <div>{item.strCategory}</div>
                </div>
              </Tooltip>
            )}
          </>
        ))}
      </div>
      {!cocktailData.drinks && (
        <Typography>
          {
            'Sorry, we could not find a cocktail matching your search criteria. Please try searching again with different keywords'
          }
        </Typography>
      )}
    </>
  );
};

export default Cocktails;
