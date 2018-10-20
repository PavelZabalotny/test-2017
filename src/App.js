import React, {Component} from 'react';
import SearchHistory from './SearchHistory'
import SearchForm from './SearchForm'

class App extends Component {
    state = {
        search:
            [
                {
                    id: 1,
                    date: new Date(),
                    text: 'сообщение 1'
                },
                {
                    id: 2,
                    date: new Date(),
                    text: 'сообщение 2'
                },
                {
                    id: 3,
                    date: new Date(),
                    text: 'сообщение 3'
                },
            ]
    };

    render() {
        return (
            <div>
                {/*добавление истории поиска*/}
                <SearchForm add={this.handleSubmitSearchString}/>
                <div>Search history {this.state.search.length} request(s)</div>
                <ul>
                    {
                        this.state.search
                            .sort((a, b) => b.date - a.date)
                            .map(item => {
                                return <SearchHistory
                                    key={item.id}
                                    id={item.id}
                                    date={this.getHistoryDate(item.date)}
                                    text={item.text}
                                    deleteSearchHistory={this.handleDeleteSearchHistory}
                                />
                            })
                    }
                </ul>
            </div>
        );
    }

    handleDeleteSearchHistory = (id) => {
        const index = this.state.search.findIndex(item => item.id === id);
        const prevState = this.state.search;
        prevState.splice(index, 1);

        this.setState({
            search: prevState,
        })
    };

    handleSubmitSearchString = (text) => {
        const prevState = this.state.search;
        prevState.push({
            id: prevState.length + 1,
            date: this.setHistoryDate(),
            text,
        });

        this.setState({
            search: prevState,
        })
    };

    setHistoryDate = () => new Date();

    getHistoryDate = (date) => {
        const day = this.formatDate(date.getDate());
        const month = this.formatDate(date.getMonth(), true);
        const year = this.formatDate(date.getFullYear());
        const hours = this.formatDate(date.getHours());
        const minutes = this.formatDate(date.getMinutes());
        return `${day}/${month}/${year} ${hours}:${minutes}`
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
