import React, { Component } from 'react';

import Searchbar from '../components/Eventspage/Searchbar/Searchbar'
import ProcessEventList from '../components/Eventspage/Eventslist/ProcessEventList'

class Eventspage extends Component {
  state = {
    openDetailsDialog: false,
    events: [
      {id: "0", name: "ProcessX", status: 22, open: this.openEvent},
      {id: "1", name: "ProcessY", status: 44, open: this.openEvent},
      {id: "2", name: "ProcessZ", status: 445, open: this.openEvent}
    ]
  }

  openEvent(eventID: number): void {
    console.log("Opening Event: " + eventID)
    this.state.openDetailsDialog = true;
  }



  render() {
    return (
      <div className="Eventspage">
        <h1>Sawu Monitor</h1>
        <Searchbar/>
        <ProcessEventList events={this.state.events}/>
      </div>
    );
  }
}

export default Eventspage
