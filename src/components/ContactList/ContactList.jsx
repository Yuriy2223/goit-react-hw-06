import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(nameFilter?.toLowerCase())
  );

  return (
    <>
      <h2 className={styles.title}>List of contacts</h2>
      <ul className={styles.list}>
        {filterContacts?.map((contact) => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
