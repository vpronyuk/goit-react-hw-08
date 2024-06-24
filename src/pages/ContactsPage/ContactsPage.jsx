import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/filter/selectors";

import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import ContactListItem from "../../components/ContactListItem/ContactListItem";
import contactsBG from "../../assets/bg_contacts.jpg";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      className={css.contactContainer}
      style={{ backgroundImage: `url(${contactsBG})` }}
    >
      <DocumentTitle>Phonebook App - Contacts</DocumentTitle>
      <div>
        <ContactForm />
        <Filter />
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        <ul className={css.listContact}>
          {Array.isArray(contacts) && contacts.length === 0 && (
            <li>You don&apos;t have any added contacts yet!</li>
          )}
          {Array.isArray(contacts) &&
            contacts.map((contact) => {
              return <ContactListItem key={contact.id} contact={contact} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default ContactsPage;
