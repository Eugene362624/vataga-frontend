import React, { useEffect } from 'react';
import Header from '../../parts/Header'
import Footer from '../../parts/Footer/Footer'
import Menu from '../../parts/Menu/Menu'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './PaidHelp.scss'
import axios from 'axios';
import Skeleton from '@material-ui/lab/Skeleton';

const PaidHelp = (props) => {

    return (
        <div className="paid-help">
        <Header/>
        <div className="main">
          <Menu/>
          <div className="content">
            <span>Coming Soon...</span> 
            <Skeleton animation="wave"><h1>loadingloading</h1></Skeleton>
          </div>
        </div>
        
        <Footer/>
      </div>
    )
}

export default PaidHelp