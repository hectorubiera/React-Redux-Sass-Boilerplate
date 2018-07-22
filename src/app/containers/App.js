import React, { Component } from "react";
import axios from "axios";

import Service from "../util/service";

class App extends Component {

    componentDidMount() {

        Service.post("/hello", {
            app_version: "18.7",
            device_name: "browser",
            device_id: "1983472943612934",
            platform: 3,
            os_version: "1",
            screen_resolution: "1x1",
            hardware: "x",
            token: "x"
        }, (status, data) => {

            console.log(data);

        });

    }
    render() {

        return (
            <div className="main-app-container">
                <div className="main-app-nav"> Simple Redux Boilerplate </div>
            </div>
        );

    }

}

export default App;
