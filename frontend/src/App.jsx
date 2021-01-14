import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { UserDetails } from './pages/UserDetails'
import { JamDetails } from './pages/JamDetails'
import { Header } from './cmps/Header'


export function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <main>
          <Switch>
            <Route path="/jam/:id" component={JamDetails} />
            <Route path="/user/:id" component={UserDetails} />
            <Route path="/login" component={LoginSignup} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
          Starter
        </footer>
      </Router>
    </div>
  )
}

