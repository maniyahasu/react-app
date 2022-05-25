import React from "react";
import styles from "../../styles.module.css";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const { contacts } = props;
  return (
    <React.Fragment>
      <table className={styles["m-auto"]} cellPadding="10px" cellSpacing="10px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>
                <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
              </td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default ContactList;
