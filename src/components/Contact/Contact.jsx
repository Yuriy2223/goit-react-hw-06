import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import { FaPhoneAlt } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item} key={id}>
      <div className={styles.itemConteiner}>
        <div>
          <RiContactsFill />
          {name}
        </div>
        <div>
          <FaPhoneAlt />
          {number}
        </div>
      </div>
      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
