import React, {Component} from 'react';

import BasicHover from './components/HoverEffect/BasicHover';
import Ripple from './components/Ripple/Ripple';
import PrimaryButton from './components/buttons/primary_button/PrimaryButton';

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
                        <PrimaryButton buttonText='Primary button' onClick={() => {

                            console.log('wooh')
                        }} />
                    </Ripple>
                </BasicHover>
            </div>
        );
    }
}

export default App;
