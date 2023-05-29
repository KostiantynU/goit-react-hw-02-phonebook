import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookForm, NameInput, AddBtn, Paragraph, Div, TelInput } from './PhoneBookFormStyled';
export class PhoneBookForm extends Component {
  render() {
    const { nameValue, handleChangeName, telValue, handleChangeTel, changeBook } = this.props;
    return (
      <BookForm onSubmit={evt => changeBook(evt)}>
        <Div>
          <Paragraph>Name</Paragraph>
          <NameInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={nameValue}
            onChange={evt => handleChangeName(evt)}
          />
          <Paragraph>Number</Paragraph>
          <TelInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={telValue}
            onChange={evt => handleChangeTel(evt)}
          ></TelInput>
          <AddBtn type="submit">Add contact</AddBtn>
        </Div>
      </BookForm>
    );
  }
}
PhoneBookForm.propTypes = {
  changeBook: PropTypes.func.isRequired,
  nameValue: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  telValue: PropTypes.string.isRequired,
  handleChangeTel: PropTypes.func.isRequired,
};
