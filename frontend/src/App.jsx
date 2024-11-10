import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import CreateTrip from './components/CreateTrip'
import TripResults from './components/TripResults'

const App = () => {
  return (
    <BrowserRouter>
     <Switch>
        <Route path="/" exact>
           <CreateTrip  />
        </Route>
        <Route  path="/trips/:id">
           <TripResults  />
        </Route>
     </Switch>
    </BrowserRouter>
  )
}

export default App