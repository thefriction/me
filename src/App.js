import React, { useEffect, Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'

const BASE_URL = "https://type.fit/api/quotes"


class App extends Component {

  // useEffect(() => {
  //   fetch(BASE_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  // }, [])

  render() {
        return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
