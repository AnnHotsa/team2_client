import React from 'react';
import './App.css';

import { InputForm } from "./components/Input.form";
import { ReportsData } from "./components/Reports.data";
import { ReloadButton } from "./components/Reload.btn";
import { GET_REPORTS_METADATA } from './data/constants';
import { IReportData } from "./data/models";

const data = require("./data/reports.json");

interface IAppState {
  reports: IReportData[];
}

class App extends React.Component<{}, IAppState> {

  public constructor(props: any) {
    super(props);

    this.state = {
      reports: data
    }

  }

  public componentDidMount() {
    console.log("===>load reports");
    // TODO: get request for reports

    fetch(GET_REPORTS_METADATA)
      .then(response => response.json())
      .then(json => {
        console.log(JSON.parse(json));

        this.setState({
          reports: JSON.parse(json),
        })
      });
  }

  public render() {
    return (
      <div className="App">

        <InputForm />
        <ReloadButton />
        <ReportsData reports={this.state.reports} />

      </div>
    );
  }
}

export default App;
