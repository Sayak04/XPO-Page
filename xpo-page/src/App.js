import React,{Component} from 'react';
import './App.css';
import NavbarComp from './Components/NavbarComp';
import AccountDashboard from './Components/AccountDashboard';
import DivThreeComponent from './Components/DivThreeComponent';
import Footer from './Components/Footer';
import Campaign1 from './Components/Campaign1';
import Campaign2 from './Components/Campaign2';
class App extends Component {
  render() {
    return(
      <>
        <NavbarComp />
        <AccountDashboard />
        <DivThreeComponent />
        <Campaign1 />
        <Campaign2 />
        <hr />
        <Footer />
      </>
    );
  }
}

export default App;
