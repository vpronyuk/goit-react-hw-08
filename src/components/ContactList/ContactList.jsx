import { useSelector } from "react-redux";

import ContactListItem from "../ContactListItem/ContactListItem";
import { selectFilteredContacts } from "../../redux/filter/selectors";

import css from "../ContactList/ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {Array.isArray(filteredContacts) &&
        filteredContacts.map((contact) => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
