import React, {Component} from 'react';
import SearchHistory from './SearchHistory';
import SearchForm from './SearchForm';
import {DB_CONFIG} from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
    constructor() {
        super();

        this.app = firebase.initializeApp(DB_CONFIG);
        this.database = this.app.database().ref('search');

        this.state = {
            search: []
        }
    }

    componentDidMount() {
        this.database.on('value', snap => {
            const items = snap.val();

            if (items) {
                const prevState = [];
                const keys = Object.keys(items);

                for (const key of keys) {
                    prevState.push({
                        id: key,
                        date: items[key].date,
                        text: items[key].text,
                    });
                }

                this.setState({
                    search: prevState,
                });
            } else {
                // при удалении последнего элемента из FB, в state будет записываться пустой массив
                // иначе при удалении последнего элемента из FB, он остается в state и отображается
                this.setState({
                    search: []
                });
            }
        });

    }

    render() {
        const connecting = !!this.state.search.length;
        return (
            <div className='container mt-5'>
                {/*добавление истории поиска*/}
                <SearchForm add={this.handleSubmitSearchString}/>
                <h3 className="my-4">Search history {this.state.search.length} request(s)</h3>
                <ul>
                    {connecting !== undefined ?
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
                            }) :
                        `Connecting, please wait ... ${console.log(connecting)}`}
                </ul>
            </div>
        );
    }

    handleDeleteSearchHistory = (id) => {
        const itemRef = firebase.database().ref(`/search/${id}`);
        itemRef.remove();
    };

    handleSubmitSearchString = (text) => {
        this.database.push().set({
            date: this.setHistoryDate(),
            text
        })
    };

    setHistoryDate = () => Date.now();

    getHistoryDate = (timestamp) => {
        const date = new Date(timestamp);
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