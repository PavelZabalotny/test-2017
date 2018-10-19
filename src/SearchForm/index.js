import React from "react";


export default class SearchForm extends React.Component {
    state = {
        text: '',
    };

    render() {
        return (
            <form className="form-inline">
                <div className="form-group mb-2">
                    <label htmlFor="staticEmail2" className="sr-only">I'm looking for!</label>
                    <input type="text" readOnly className="form-control-plaintext" id=""
                           value="I'm looking for!"/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="inputPassword2" className="sr-only">Text of my search request</label>
                    <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Text of my search request"
                        onChange={this.handleChangeRequest}
                        value={this.state.text}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    onClick={this.writeRequest}>Add search string</button>
            </form>
        )
    }

    writeRequest = (e) => {
        e.preventDefault(); //отменяет обновление при добавлении поискового запроса
        this.props.add(this.state.text);

        this.setState({
            text: '',
        });
    };

    handleChangeRequest = (e) => {

        //(value.length && value.length > 1 && value.length < 100)
        this.setState({
            text: e.target.value,
        })
    }
}