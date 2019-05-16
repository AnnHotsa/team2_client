import React from "react";
const data = require("../data/reports.json");


interface IReportData {
    id: string;
    dateFrom: string;
    dateTo: string;
    creationDate: string;
}

interface IReportsDataState {
    reports: IReportData[];
}

interface IReportsDataProps {

}

export class ReportsData extends React.Component<IReportsDataProps, IReportsDataState> {

    public constructor(props: IReportsDataProps) {
        super(props);

        this.state = {
            reports: data
        }

        this._renderReportsData = this._renderReportsData.bind(this);
    }

    public render() {
        return <div className="reports-container">
            <h2>Available reports:</h2>

            <div className="reports-table">
                <div className="reports-title">
                    <label className="report-label">Report_id</label>
                    <label className="report-label">Creation date</label>
                    <label className="report-label">Date from</label>
                    <label className="report-label">Date to</label>
                    <label className="report-label">Export as:</label>
                </div>

                {this._renderReportsData()}
            </div>
        </div>
    }

    private _renderReportsData() {
        return this.state.reports.map(r => {
            return <ReportData key={r.id} {...r} />
        });
    }

}


const ReportData = (props: IReportData) => {

    let onJSONClick = () => {
        console.log("export ad JSON", props.id);
        // TODO:: send get request for appropriate report ID (props.id)

        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //         .then(response => response.json())
        //         .then(json => console.log(json))
    }


    let onXMLClick = () => {
        console.log("export ad XML", props.id);
        // TODO:: send get request for appropriate report ID (props.key)

        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //         .then(response => response.json())
        //         .then(json => console.log(json))
    }


    return (
        <div className="report-row">
            <label className="report-label">{props.id}</label>
            <label className="report-label">{props.creationDate}</label>
            <label className="report-label">{props.dateFrom}</label>
            <label className="report-label">{props.dateTo}</label>

            <label className="report-label">

                <button className="btn btn-secondary report-export" onClick={onJSONClick}>JSON</button>
                <button className="btn btn-secondary report-export" onClick={onXMLClick}>XML</button>

            </label>
        </div>
    );
}