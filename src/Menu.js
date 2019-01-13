import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

const topPage = () => <div><h1>Top Page</h1>ここがトップページ</div>
const schedulePage = () => <div><h1>Scahedule Page</h1>スケジュール</div>
const resultPage = () => <div><h1>Result Page</h1>Result</div>
const teamPage = () => <div><h1>Team Page</h1>Team</div>

const Menu = () => {
    const liStyle = {
        display: 'inline',
        width: '100px'
    }

    return(
        <Router>
            <div style={{width: '500px', textAlign: 'left'}}>
                <ul style={{display: 'flex'}}>
                    <li style={liStyle}><Link to='/'>top</Link></li>
                    <li style={liStyle}><Link to='/schedulePage'>schedule</Link></li>
                    <li style={liStyle}><Link to='/resultPage'>result</Link></li>
                    <li style={liStyle}><Link to='/teamPage'>team</Link></li>
                </ul>
                <div style={{marginLeft: '50px'}}>
                    <Route path='/' exact component={topPage}/>
                    <Route path='/schedulePage' exact component={schedulePage}/>
                    <Route path='/resultPage' exact component={resultPage}/>
                    <Route path='/teamPage' exact component={teamPage}/>
                </div>
            </div>
        </Router>
    )
}

export default Menu;