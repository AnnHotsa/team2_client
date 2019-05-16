import React from "react";
import { POST_INPUT_ENDPOINT, DATE_MIN, DATE_MAX } from "../data/constants";

interface IInputFormProps {

}

interface IInputFormState {
    dateFrom: string;
    dateTo: string;
}

export class InputForm extends React.Component<IInputFormProps, IInputFormState> {
    private _dateFromRef: React.RefObject<HTMLInputElement>;
    private _dateToRef: React.RefObject<HTMLInputElement>;


    public constructor(props: IInputFormProps) {
        super(props);

        this.state = {
            dateFrom: "",
            dateTo: ""
        }

        this.onDateFromChange = this.onDateFromChange.bind(this);
        this.onDateToChange = this.onDateToChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this._dateFromRef = React.createRef();
        this._dateToRef = React.createRef();
    }

    public render() {
        return (<div className="input-container">
            <h2>Please choose dates for report generation:</h2>

            <form onSubmit={this.onSubmit} className="input-form">
                <div className="form-group">
                    <label htmlFor="dateFrom">
                        Date from:
                    </label>
                    <input
                        name="dateFrom"
                        id="dateFrom"
                        type="date"
                        className="form-control"
                        value={this.state.dateFrom}
                        onChange={this.onDateFromChange}
                        min={DATE_MIN}
                        max={DATE_MAX}
                        ref={this._dateFromRef}
                    />

                </div>

                <div className="form-group">

                    <label htmlFor="dateTo">
                        Date to:
                    </label>
                    <input
                        name="dateTo"
                        id="dateTo"
                        type="date"
                        className="form-control"
                        value={this.state.dateTo}
                        onChange={this.onDateToChange}
                        min={DATE_MIN}
                        max={DATE_MAX}
                        ref={this._dateToRef}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Generate" disabled={!this.state.dateFrom || !this.state.dateTo} />
            </form>

        </div>);
    }

    private onDateFromChange(e: React.FormEvent<HTMLInputElement>) {
        if (!e || !e.currentTarget) { return; }

        this.setState({
            dateFrom: e.currentTarget.value
        });

        if (this._dateToRef && this._dateToRef.current) {
            this._dateToRef.current.min = e.currentTarget.value;
        }
    }

    private onDateToChange(e: React.FormEvent<HTMLInputElement>) {
        if (!e || !e.currentTarget) { return; }

        this.setState({
            dateTo: e.currentTarget.value
        });

        if (this._dateFromRef && this._dateFromRef.current) {
            this._dateFromRef.current.max = e.currentTarget.value;
        }
    }

    private onSubmit(e: React.FormEvent) {
        e.preventDefault(); // prevent page reload on form submission
        console.log(`Generete report from ${this.state.dateFrom} to ${this.state.dateTo}`);

        // TODO: ajax post request with dateFrom and dateTo
        // EXAMPLE OF POST REQUEST
        fetch(POST_INPUT_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dateFrom: new Date(this.state.dateFrom).getTime(),
                dateTo: new Date(this.state.dateTo).getTime()
            })
        })
            .then(res => {
                console.log("POST INPUT DATES SUCCESSFUL");
                if (res) {
                    console.log(res.json().then(m => console.log("message==>", m)));
                }
            })
            .catch(e => {
                console.log("ERROR ON POST INPUT DATES");
                console.log(e);
            });
    }
}

