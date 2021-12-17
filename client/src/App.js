import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails"
import ProductPost from "./pages/ProductPost"
import NavBar from "./components/NavBar"
import "./App.css"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/productdetails/:productId" component={ProductDetails} />
          <Route path="/productpost" component={ProductPost} />
        </Switch>
      </main>
    </div>
  )
}

export default App
