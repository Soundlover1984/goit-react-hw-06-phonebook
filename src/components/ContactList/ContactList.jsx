
import { List } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { removeContact} from 'redux/contactSlice';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

    if (query && !filteredContacts.length) {
      Notiflix.Notify.warning(
        'No contacts matching your request'
      );
    }
    return filteredContacts;
  };



  return (
    <List>
      {filterContacts().map(contact => {
        return (
          <ContactItem
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteBtnClick={() => dispatch(removeContact(contact))}
          />
        );
      })}
    </List>
  );
};

