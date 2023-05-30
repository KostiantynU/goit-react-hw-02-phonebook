import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookForm, NameInput, AddBtn, Paragraph, Div, TelInput } from './PhoneBookFormStyled';
import { nanoid } from 'nanoid';
export class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeBook = (evt, changeContacts) => {
    evt.preventDefault();
    const newContact = {
      name: evt.target.name.value,
      id: nanoid(),
      number: evt.target.number.value,
    };
    changeContacts(newContact);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  handleChangeNameTel = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { changeContacts } = this.props;

    const { name: nameValue, number: telValue } = this.state;
    return (
      <BookForm onSubmit={evt => this.changeBook(evt, changeContacts)}>
        <Div>
          <Paragraph>Name</Paragraph>
          <NameInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={nameValue}
            onChange={evt => this.handleChangeNameTel(evt)}
          />
          <Paragraph>Number</Paragraph>
          <TelInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={telValue}
            onChange={evt => this.handleChangeNameTel(evt)}
          ></TelInput>
          <AddBtn type="submit">Add contact</AddBtn>
        </Div>
      </BookForm>
    );
  }
}
PhoneBookForm.propTypes = {
  changeContacts: PropTypes.func.isRequired,
};
// PhoneBookForm.propTypes = {
//   changeBook: PropTypes.func.isRequired,
//   nameValue: PropTypes.string.isRequired,
//   handleChangeName: PropTypes.func.isRequired,
//   telValue: PropTypes.string.isRequired,
//   handleChangeTel: PropTypes.func.isRequired,
// };
