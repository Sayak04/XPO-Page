import React,{Component} from 'react';
import './App.css';
import NavbarComp from './Components/NavbarComp';
import AccountDashboard from './Components/AccountDashboard';
import DivThreeComponent from './Components/DivThreeComponent';
import Footer from './Components/Footer';
import Campaign1 from './Components/Campaign1';
import Campaign2 from './Components/Campaign2';
import Campaign3 from './Components/Campaign3';
import Campaign4 from './Components/Campaign4';
import Campaign5 from './Components/Campaign5';
import Campaign6 from './Components/Campaign6';
import Campaign7 from './Components/Campaign7';
import Campaign8 from './Components/Campaign8';
import Buttons from './Components/Buttons';
class App extends Component {
  render() {
    return(
      <>
        <NavbarComp />
        <AccountDashboard />
        <DivThreeComponent />
        <Campaign1 />
        <Campaign2 />
        <Campaign3 />
        <Campaign4 />
        <Campaign5 />
        <Campaign6 />
        <Campaign7 />
        <Campaign8 />
        <Buttons />
        <hr />
        <Footer />
      </>
    );
  }
}

export default App;
