import React, { Component } from 'react';
import { PhoneBookForm } from './PhoneBookForm';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { nanoid } from 'nanoid';
const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};
export class App extends Component {
  state = { ...INITIAL_STATE };
  changeBook = evt => {
    evt.preventDefault();
    const newContact = {
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    this.reset();
  };
  handleChangeName = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleChangeTel = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleChangeSearch = ({ target }) => {
    this.setState({ filter: target.value.toLowerCase().trim() });
  };
  arrayWithSearch = () => {
    const searchQuery = this.state.filter;
    const filtered = this.state.contacts.filter(el => el.name.includes(searchQuery));
    return filtered;
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <PhoneBookForm
          changeBook={this.changeBook}
          nameValue={this.state.name}
          handleChangeName={this.handleChangeName}
          handleChangeTel={this.handleChangeTel}
        ></PhoneBookForm>
        <PhoneBookList
          array={this.arrayWithSearch()}
          search={this.handleChangeSearch}
        ></PhoneBookList>
      </>
    );
  }
}

/* <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div> */
