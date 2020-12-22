import React, { Component } from 'react';

import Searchbar from '../components/Eventspage/Searchbar/Searchbar'
import Actionsbar from '../components/Actionsbar/Actionsbar'
import ProcessEventList from '../components/Eventspage/Eventslist/ProcessEventList'

class Eventspage extends Component {
  state = {
    activeTab: "explore",
    processInstanceInfoList: [

    ],
    processDetails: [

    ],
    events: [
      {id: "550e8400-e29b-11d4-a716-446655440000", name: "ProcessX", status: 22},
      {id: "550e8400-e29b-11d4-a716-446655440001", name: "ProcessY", status: 44},
      {id: "550e8400-e29b-11d4-a716-446655440002", name: "ProcessZ", status: 445}
    ]
  }

  setProcessInstanceInfoList(processInstanceInfos : any) {
    this.setState({
      processInstanceInfoList: processInstanceInfos
    })
  }

  setProcessDetails(processDetails : any) {
    this.setState({
      processDetails: processDetails
    })
  }

  changeTab(tabName: string) {
    this.setState({
      activeTab: tabName
    })
  }

  render() {
    let activeTabContent;

    if (this.state.activeTab === "explore") {
      activeTabContent = 
      <div>
        <Searchbar/>
        <ProcessEventList events={this.state.events}/>
      </div>
    } else if (this.state.activeTab === "usermanagment"){
      activeTabContent = <div>This is the usermanagement tab</div>
    } else if (this.state.activeTab === "deadletters"){
      activeTabContent = <div>This is the deadletters tab</div>
    }

    return (
      <div className="Eventspage">
        <Actionsbar changed={this.changeTab.bind(this)}/>
        {activeTabContent}
      </div>
    );
  }
}

export default Eventspage
