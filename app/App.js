import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import Header from './Components/Header'
import Content from './Components/Content'
import Favicon from 'react-favicon'
import faviconUrl from './Assets/favicon.ico'
import Nav from './Components/Nav'
import Notfound from './Components/Notfound'
import About from './Components/About'
import Calendar from './Components/Calendar'
import Rsvp from './Components/Rsvp'
import Data from './data.js'
import AddEvent from './Components/AddEvent'

export default class App extends Component {
    //displayName: 'App',
    constructor(props){
        super(props)
        this.state = {
            data: Data
        }
        this.addEvent = this.addEvent.bind(this)
    }

    addEvent(newEvent){
        this.setState({
            allEvents : [
                ...this.state.data.calendar,
                newEvent
            ]
        })
    }

    


    render(){
        
          return (<div>
              <Favicon url={ faviconUrl }/>  
              <Header/>
              <Nav/>

               <div></div>

              {(this.props.location.pathname === "/calendar") ? 
                <Calendar calendar={this.state.data.calendar}/> :
                (this.props.location.pathname === "/about") ?
                <About /> :
                (this.props.location.pathname === "/rsvp") ?
                <Rsvp members={this.state.data.members}/> :

                (this.props.location.pathname === "/addevent") ?
                <AddEvent onNewEvent={this.addEvent} /> :                
                null}

            </div>)
    }
}
