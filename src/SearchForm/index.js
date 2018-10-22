import React from "react";

// компонент отвечает за добавление запроса
export default class SearchForm extends React.Component {
    state = {
        text: '',
    };

    render() {
        return (
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
        )
    }

    // валидация для поля ввода (не меньше 1 символа и не больше 100)
    validate = () => !(this.state.text.trim().length > 0 && this.state.text.trim().length
        < 101);

    // добавить поисковый запрос
    writeRequest = e => {
        e.preventDefault();
        this.props.add(this.state.text);

        //обнуляем состояние после добавления запроса
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