import css from './Contact.module.css'
import { FaUser, FaPhone } from "react-icons/fa6"

export default function Contact({id, name, number, onDelete }) {
  return (
    <>
      <div className={css.wrapper}>
        <p><FaUser />{name}</p>
        <p><FaPhone />{number}</p>
      </div>
      <button className={css.delete} onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
