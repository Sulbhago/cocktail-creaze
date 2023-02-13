import { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { CocktailDetails } from '../CocktailDetails'

const Cocktails = lazy(() => import('../Cocktails'))

function PageNavigation() {
  return (
    <Suspense>
      <Router>
        <Routes>
          <Route path="/" element={<Cocktails />} />
          <Route path="/cocktailsDetails/:id" element={<CocktailDetails/>} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default PageNavigation
