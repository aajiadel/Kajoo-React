import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import ContactUs from './views/contact-us'
import Zoldfaq from './views/zoldfaq'
import RequestDemo from './views/request-demo'
import Home from './views/home'
import ZoldpricingBackup from './views/zoldpricing-backup'
import Pricing from './views/pricing'
import TermsOfService from './views/terms-of-service'
import PrivacyPolicy from './views/privacy-policy'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={ContactUs} path="/contact-us" />
        <Route exact component={Zoldfaq} path="/zoldfaq" />
        <Route exact component={RequestDemo} path="/request-demo" />
        <Route exact component={Home} path="/" />
        <Route exact component={ZoldpricingBackup} path="/zoldpricing-backup" />
        <Route exact component={Pricing} path="/pricing" />
        <Route exact component={TermsOfService} path="/terms-of-service" />
        <Route exact component={PrivacyPolicy} path="/privacy-policy" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
