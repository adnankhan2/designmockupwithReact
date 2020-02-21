import React,{Component} from 'react'
import logo from './header.png'
import './Header.css';

class Header extends Component{
    render(){
        return <div className = "headerborder">
<div className="header-wrapper">
<img  className ='headerImg' src={logo } alt = 'Logo' width="600" height = "400"/>
<div className ='headerMsg'>
<p>POWERFULLY SIMPLE <span id='styledMsg'>WITH A</span>  <br /> SQUEAKY CLEAN <span id='styledMsg'>DESIGN</span></p>
<p id='styledMsg'>Find out how you can offer quick and powefull  <br />solutions to your customers now!</p>
<button className ='button'>LEARN MORE</button>
</div>
</div>
        </div>
    }
}




export default Header