



import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Header from './Components/Header'
import Content from './Components/Content'
import Favicon from 'react-favicon'
import faviconUrl from './Assets/favicon.ico'


export default class App extends Component {
    //displayName: 'App',

    render(){
          return (<div>
              <Header/>
              <Content/>
              <Favicon url={ faviconUrl }/>
            </div>)
    }

}
