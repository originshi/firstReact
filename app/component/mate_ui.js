import React,{Component} from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Time from './time';
 class Main extends Component {
     
     render(){
        console.log(this.props)
         return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <AppBar title="My AppBar" />
            
                </MuiThemeProvider>
                <MuiThemeProvider >
            
                    <Time/>
                </MuiThemeProvider>
                <div>{this.props.match.params?this.props.match.params.id:''}</div>
            </div>
            
            )
     }
 }

export default Main;