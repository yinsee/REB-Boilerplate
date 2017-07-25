import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const electron = window.require('electron').remote;
const fs = electron.require('fs');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showmenu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            showmenu: !this.state.showmenu
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="exitbutton pull-right" onClick={()=>{
                        electron.dialog.showErrorBox('Exit', 'Application will now exit.')
                        electron.app.quit()
                    }}>x</div>
                    <div className="visible-xs burgermenu pull-left" onClick={this.toggleMenu}>
                        <div className="burgerline"></div>
                        <div className="burgerline"></div>
                        <div className="burgerline"></div>
                    </div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <big>Welcome to React</big>
                </div>

                <div className="App-body">
                    <div className="App-menu" data-toggle={this.state.showmenu ? "show" : "hide"}></div>
                    <div className="App-content"></div>
                </div>

                <div className="App-footer">
                    &copy; Trilobyte 2017.
                </div>
            </div>
        );
    }
}

export default App;
