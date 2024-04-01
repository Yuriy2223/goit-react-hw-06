import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Required field"),
  number: Yup.string()
    .min(9, "Minimum 7 symbols")
    .max(9, "Maximum 7 symbols")
    .required("Required field"),
});

const formatPhoneNumber = (value) => {
  const number = value.replace(/[^\d]/g, "");
  let phone = "";
  if (number.length < 4) {
    phone = number;
  } else if (number.length < 7) {
    phone = `${number.slice(0, 3)}-${number.slice(3)}`;
  } else {
    phone = `${number.slice(0, 3)}-${number.slice(3, 5)}-${number.slice(5, 7)}`;
  }
  return phone;
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (values.name && values.number) {
        dispatch(addContact(values));
        resetForm();
      }
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="name" className={styles.inputLabel}>
        User name
      </label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.formImput}
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Rosie Simpson"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={styles.errorMessage}>{formik.errors.name}</div>
        ) : null}
      </div>
      <label htmlFor="number" className={styles.inputLabel}>
        Phone number
      </label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.formImput}
          id="number"
          name="number"
          type="text"
          onChange={(event) => {
            formik.setFieldValue(
              "number",
              formatPhoneNumber(event.target.value)
            );
          }}
          value={formik.values.number}
          placeholder="345-67-89"
        />
        {formik.touched.number && formik.errors.number ? (
          <div className={styles.errorMessage}>{formik.errors.number}</div>
        ) : null}
      </div>
      <button type="submit" className={styles.formBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
