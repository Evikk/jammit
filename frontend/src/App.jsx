import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { JamDetails } from './pages/JamDetails'
import { UserProfile } from './pages/UserProfile'
import { Header } from './cmps/Header'
import { JamExplore } from './pages/JamExplore'
import { MembersList } from './pages/MembersList'

export function App() {
  return (
    <div className="app main-container">
      <Router>
        <Header></Header>
        <main>
          <Switch>
            <Route path="/members" component={MembersList} />
            <Route path="/jam/:id" component={JamDetails} />
            <Route path="/user/:id" component={UserProfile} />
            <Route path="/login" component={LoginSignup} />
            <Route path="/search" component={JamExplore} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer>
        </footer>
      </Router>
    </div>
  )
}

