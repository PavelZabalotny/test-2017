import React, {Component} from 'react';
import SearchHistory from './SearchHistory'
import SearchForm from './SearchForm'

class App extends Component {
    state = {
        search:
            [
                {
                    id: 1,
                    date: '10/02/2018 13:00',
                    text: 'сообщение 1'
                },
                {
                    id: 2,
                    date: '09/02/2018 11:00',
                    text: 'сообщение 2'
                },
                {
                    id: 3,
                    date: '09/02/2018 09:38',
                    text: 'сообщение 3'
                },
            ]
    };

    render() {
        return (
            <div>
                {/*добавление истории поиска*/}
                <SearchForm add={this.handleSubmitSearchString}/>
                <ul>
                    {
                        this.state.search.map(item => {
                            return <SearchHistory key={item.id} id={item.id} date={this.getDate()} text={item.text}/>
                        })
                    }
                </ul>
            </div>
        );
    }

    handleSubmitSearchString = (text) => {
        const prevState = this.state.search;
        prevState.push({
            id: prevState.length + 1,
            date: this.getDate(),
            text,
        });

        this.setState({
            search: prevState,
            })
    };

    getDate = () => {
        const date = new Date();
        return `${this.formatDate(date.getDate())}/${this.formatDate(date.getMonth(), true)}/${this.formatDate(date.getFullYear())} ${this.formatDate(date.getHours())}:${this.formatDate(date.getMinutes())}`
    };

    formatDate = (date, m = undefined) => {
        const d = m ? String(date + 1) : String(date);
        return (
            d.length > 1 ?
            (d) :
            `0${d}`
        )
    }
}

export default App;
