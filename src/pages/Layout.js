import React, { Component } from 'react';
import Preloader from '../components/Preloader/Preloader';
import Home from './Home';

class Layout extends Component {
    state = { isLoading: true };

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => ({ isLoading: false }));
        }, 2000);
    }

    render() {
        const { isLoading } = this.state;
        let PRELOADER = null;
        if (isLoading) {
            PRELOADER = <Preloader width="60" />;
        }
        return (
            <div className="App">
                <div>{PRELOADER}</div>
                <div>
                    <Home />
                </div>
            </div>
        );
    }
}

export default Layout;
