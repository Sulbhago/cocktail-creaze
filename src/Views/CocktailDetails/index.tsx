import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CocktailsDetails } from '../../Model/cocktails';
import { TopNavBar } from '../../components/TopNavigationBar';
import './styles.css';

export const CocktailDetails: React.FC = () => {
  const { id } = useParams();
  const [cocktailsDetails, setCocktailsDetails] = useState<CocktailsDetails>();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [error, setError] = useState<string>('');
  useEffect(() => {
    fetchDetails(id);
  }, []);

  async function fetchDetails(id: string | undefined) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Unable to fetch data from API');
      }
    })
    .then((cocktailDetails) => {
      setCocktailsDetails(cocktailDetails);
    })
    .catch((error) => {
      setError(error.message);
      console.log(error);
    });
  }

  return (
    <>
      <TopNavBar searchValue={''} handelSearch={undefined} showSearch={false} />
      <div className="wrapper">
        {cocktailsDetails?.drinks?.map((item) => (
          <>
            <div className="child">
              <img
                alt=""
                src={`${item.strDrinkThumb}?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=07a78ca4d41f04cad17ecb9d8481f565&auto=format&fit=crop&w=1350&q=40`}
              />
              <div className="labeDrink">{item.strDrink}</div>
              <div>{item.strCategory}</div>
            </div>
            <div className="child">
              <div className="detailTitle">Ingredients</div>
              <div>{item.strIngredient2}</div>
              <div>{item.strIngredient3}</div>
              <div>{item.strIngredient3}</div>
              <div className="detailTitle">Measurements</div>
              <div>{item.strMeasure1}</div>
              <div>{item.strMeasure2}</div>
              <div>{item.strMeasure3}</div>
              <div className="detailTitle">How to make</div>
              <div>{item.strInstructions}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
