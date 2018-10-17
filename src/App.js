import React, {Component} from 'react';
import SearchRequest from './SearchHistory'

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
                <form className="form-inline">
                    <div className="form-group mb-2">
                        <label htmlFor="staticEmail2" className="sr-only">I'm looking for!</label>
                        <input type="text" readOnly className="form-control-plaintext" id=""
                               value="I'm looking for!"/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label htmlFor="inputPassword2" className="sr-only">Text of my search request</label>
                        <input type="text" className="form-control" id="" placeholder="Text of my search request"/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Add search string</button>
                </form>

                <div>
                    {
                        this.state.search.map(item => {
                            return <SearchRequest key={item.id} date={this.getDate()} text={item.text}/>
                        })
                    }
                </div>
            </div>
        );
    }

    getDate = function(){
        const date = new Date();
        return `${this.formatDate(date.getDate())}/${this.formatDate(date.getMonth(), true)}/${this.formatDate(date.getFullYear())} ${this.formatDate(date.getHours())}:${this.formatDate(date.getMinutes())}`
    };

    formatDate = function(date, m = undefined){
        const d = m ? String(date + 1) : String(date);
        return (
            d.length > 1 ?
            (d) :
            `0${d}`
        )
    }
}

export default App;
