import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './Home';
import TotalMatches from './Components/TotalMatches';
import AboutIPL from './Components/AboutIPL';
import MatchResult from './Components/MatchResult';
import MatchSummary from './Components/MatchSummary';
import ManOfMatch from './Components/ManOfMatch';
import Intents from './Components/Intents';

const RouterComponent = () => {
    return (
      <Router>
        <Scene key="root" hideNavBar>
            <Scene key="main" navigationBarStyle={{ backgroundColor: '#ffd968'}} backButtonTintColor='white' >
                <Scene key="Home" component={Home} title="Alexa IPL Skill" initial />
                <Scene key="intents" component={Intents} title="Intents" />
                <Scene key="aboutIPL" component={AboutIPL} title="About IPL" />
                <Scene key="totalMatches" component={TotalMatches} title="Total Matches" />
                <Scene key="matchResult" component={MatchResult} title="Match Result" />
                <Scene key="matchSummary" component={MatchSummary} title="Match Summary" />
                <Scene key="manOfMatch" component={ManOfMatch} title="Man of the match" />
            </Scene>

        </Scene>
      </Router>
    );
};

export default RouterComponent;
