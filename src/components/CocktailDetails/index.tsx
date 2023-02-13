import { Grid, Typography } from '@mui/material'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CocktailsDetails } from '../Model'
import { TopNavBar } from '../TopNavigationBar'
import {
  StyledDetailsDiv,
  StyledImage,
  StyledPara,
  StyledTypographyDetailTitle,
} from './styles'

export const CocktailDetails: React.FC = () => {
  const { id } = useParams()
  const [cocktailsDetails, setCocktailsDetails] = useState<CocktailsDetails>()

  useEffect(() => {
    fetchDetails(id);
  }, [])

  async function fetchDetails(id: string | undefined) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    )
    const json = await response.json()
    setCocktailsDetails(json)
  }

  return (
    <>
      <TopNavBar searchValue={''} handelSearch={undefined} />
      {cocktailsDetails?.drinks?.map((item) => (
        <>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography style={{ fontSize: '2rem' }}>
                {item.strDrink}
              </Typography>
              <StyledImage
                alt={''}
                src={`${item.strDrinkThumb}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.strDrinkThumb}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </Grid>
            <Grid item md={4}>
              <StyledDetailsDiv>
                <StyledTypographyDetailTitle>
                  Ingredients
                </StyledTypographyDetailTitle>
                <StyledPara>{item.strIngredient2}</StyledPara>
                <StyledPara>{item.strIngredient3}</StyledPara>
                <StyledPara>{item.strIngredient3}</StyledPara>
                <StyledTypographyDetailTitle>
                  Measurements
                </StyledTypographyDetailTitle>
                <StyledPara>{item.strMeasure1}</StyledPara>
                <StyledTypographyDetailTitle>
                  How to make
                </StyledTypographyDetailTitle>
                <StyledPara>{item.strInstructions}</StyledPara>
              </StyledDetailsDiv>
            </Grid>
          </Grid>
        </>
      ))}
    </>
  )
}
