import "./App.css"
import React from "react"
import {Switch, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails"
import ProductPost from "./pages/ProductPost"


function App() {

  return (
    <div className="App">
      Hello React
      <Home/>
      <main>
        <switch>
          <Route exact path = "/" component={Home} />

        </switch>
      </main>
    </div>
  )
}

export default App
