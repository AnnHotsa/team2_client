import React from 'react';
import './App.css';

import { InputForm } from "./components/Input.form";
import { ReportsData } from "./components/Reports.data";
import { ReloadButton } from "./components/Reload.btn";

class App extends React.Component<{}, {}> {

    public componentDidMount() {
      console.log("===>load reports");
      // TODO: get request for reports

      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      //         .then(response => response.json())
      //         .then(json => console.log(json))
    }

    public render() {
        return (
            <div className="App">

                <InputForm />
                <ReloadButton />
                <ReportsData />

            </div>
        );
    }
}

export default App;
