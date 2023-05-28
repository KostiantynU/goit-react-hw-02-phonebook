import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BookLi } from './PhoneBookListItemStyled';

export class BookItem extends Component {
  render() {
    const { contactName, number } = this.props;
    return (
      <BookLi>
        {contactName} : {number}
      </BookLi>
    );
  }
}
BookItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
