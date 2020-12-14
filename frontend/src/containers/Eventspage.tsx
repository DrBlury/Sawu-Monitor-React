import React, { Component } from 'react';

import Searchbar from '../components/Eventspage/Searchbar/Searchbar'
import Actionsbar from '../components/Actionsbar/Actionsbar'
import ProcessEventList from '../components/Eventspage/Eventslist/ProcessEventList'

class Eventspage extends Component {
  state = {
    activeTab: "explore",
    events: [
      {id: "0", name: "ProcessX", status: 22},
      {id: "1", name: "ProcessY", status: 44},
      {id: "2", name: "ProcessZ", status: 445}
    ]
  }

  changeTab(tabName: string) {
    this.setState({
      activeTab: tabName
    })
  }

  render() {
    let activeTabContent;

    if (this.state.activeTab === "explore") {
      activeTabContent = <div><Searchbar/><ProcessEventList events={this.state.events}/></div>
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
