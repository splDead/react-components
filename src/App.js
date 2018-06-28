import React, {Component} from 'react';

import BasicHover from './components/HoverEffect/BasicHover';
import Ripple from './components/Ripple/Ripple';
import PrimaryButton from './components/buttons/primary_button/PrimaryButton';
import TextButton from './components/buttons/text_button/TextButton';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>
                    Buttons
                </h2>
                <h3>
                    Primary button
                </h3>
                <BasicHover>
                    <Ripple>
                        <PrimaryButton buttonText='Primary button' onClick={() => {}} />
                    </Ripple>
                </BasicHover>
                <h3>
                    Text button
                </h3>
                <BasicHover>
                    <Ripple color='rgba(0, 0, 0, .3)'>
                        <TextButton buttonText='Text button' onClick={() => {}} style={{color: 'black'}}/>
                    </Ripple>
                </BasicHover>
            </div>
        );
    }
}

export default App;
