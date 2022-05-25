import { useState } from "react";
import ContactList from "./ContactList";
import { Typography } from "@material-ui/core";
import styles from "../../styles.module.css";

const INITIAL_CONTACTS = [
  { id: 1, name: "Jon Doe", email: "jd@gmail.com" },
  { id: 2, name: "Jack Maa", email: "jm@gmail.com" },
  { id: 3, name: "Karl Jeminson", email: "kj@gmail.com" },
];

const Contacts = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  return (
    <div className={styles["class-list-wrapper"]}>
      <Typography variant="h5" gutterBottom className="text-center">
        Contact List
      </Typography>
      <ContactList contacts={contacts} />
    </div>
  );
};
export default Contacts;
