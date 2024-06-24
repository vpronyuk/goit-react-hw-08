import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import css from "../ContactListItem/ContactListItem.module.css";

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={css.container}>
      <div className={css.name}>{contact.name}</div>
      <div className={css.number}>{contact.number}</div>
      <Button
        variant="contained"
        size="small"
        style={{ minWidth: "100px" }}
        color="error"
        startIcon={<DeleteIcon />}
        type="button"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </li>
  );
};

export default ContactListItem;
