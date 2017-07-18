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
                    <button className="pull-right btn btn-success visible-xs" onClick={this.toggleMenu}>Menu {this.state.showmenu ? "a" : "b"}</button>
                    <button onClick={()=>{
                        electron.dialog.showErrorBox('error', 'test')
                        electron.app.quit()
                    }}>Exit</button>
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
