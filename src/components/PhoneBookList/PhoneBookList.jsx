import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DivContacts, HTwo, ListContacts } from './PhoneBookListStyled';
import { BookItem } from 'components/PhoneBookListItem';
import { SearchInput, Paragraph } from '../PhoneBookForm/PhoneBookFormStyled';
export class PhoneBookList extends Component {
  render() {
    const { array, search: handleChangeSearch } = this.props;
    return (
      <DivContacts>
        <HTwo>Contacts</HTwo>
        <Paragraph>Find contacts by name</Paragraph>
        <SearchInput onChange={evt => handleChangeSearch(evt)}></SearchInput>
        <ListContacts>
          {array.map(({ name, id, number }) => {
            return <BookItem key={id} contactName={name} number={number} />;
          })}
        </ListContacts>
      </DivContacts>
    );
  }
}
PhoneBookList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string.isRequired, id: PropTypes.string.isRequired })
      .isRequired
  ),
};
