import React,{Component} from 'react';
import './App.css';
import NavbarComp from './Components/NavbarComp';
import AccountDashboard from './Components/AccountDashboard';
class App extends Component {
  render() {
    return(
      <>
        <NavbarComp />
        <AccountDashboard />
      </>
    );
  }
}

export default App;
