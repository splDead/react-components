import React, {Component} from 'react';

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
                <PrimaryButton
                    buttonText='Primary button'
                />
            </div>
        );
    }
}

export default App;
