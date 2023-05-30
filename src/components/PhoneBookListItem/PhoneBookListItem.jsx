import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookLi, NameSpan, TelSpan } from './PhoneBookListItemStyled';
import { DeleteBtn } from 'components/PhoneBookForm/PhoneBookFormStyled';

export class BookItem extends Component {
  render() {
    const { contactName, number, btnId, deleteItem } = this.props;
    return (
      <BookLi>
        <NameSpan>{contactName} :</NameSpan> <TelSpan>{number}</TelSpan>
        <DeleteBtn type="button" data-id={btnId} onClick={evt => deleteItem(evt)}>
          Delete
        </DeleteBtn>
      </BookLi>
    );
  }
}
BookItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  btnId: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
