import React from "react";

// компонент отвечает за добавление запроса
export default class SearchForm extends React.Component {
    state = {
        text: '',
    };

    render() {
        return (
            <div>

                <form className="row">
                    <div className="col-3 m-auto">
                        <span className="text align-self-center p-2">I'm looking for</span>
                    </div>
                    <div className="col-9 input-group m-auto">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Text of my search request"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                            onChange={this.handleChangeRequest}
                            value={this.state.text}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="submit"
                                id="button-addon2"
                                onClick={this.writeRequest}
                                disabled={this.validate()}
                            >Add search string
                            </button>
                        </div>
                    </div>
                </form>

                {/*<div className="form-group mb-2">
                    <label htmlFor="staticEmail2" className="sr-only">I'm looking for!</label>
                    <input type="text" readOnly className="form-control-plaintext" id=""
                           value="I'm looking for!"/>
                </div>

                <div className="mx-sm-3 mb-2">
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
                    onClick={this.writeRequest}
                    disabled={this.validate()}
                >Add search string
                </button>*/}
            </div>
        )
    }

    validate = () => !(this.state.text.trim().length > 0 && this.state.text.trim().length
        < 101);

    writeRequest = e => {
        e.preventDefault(); //отменяет обновление при добавлении поискового запроса
        this.props.add(this.state.text);

        this.setState({
            text: '',
        });
    };

    handleChangeRequest = e => {
        this.setState({
            text: e.target.value,
        })
    }
}