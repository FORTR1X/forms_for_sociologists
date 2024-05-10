import React, { useState } from "react";
import UserHeader from "../UserHeader";
import styles from "./OneGroup.module.scss";
import { FaTrash } from "react-icons/fa";

const person = [
  {
    id: "0",
    name: "Вася Иванов",
    img: `..//images/4.jpg`,
    review: `Lorem ipsum`,
    role: "Администратор",
    email: "student.@mail.ru",
  },
  {
    id: "1",
    name: "Иванов Вася",
    img: `..//images/5.jpg`,
    review: `Lorem ipsum`,
    role: "Участник",
    email: "student.@mail.ru",
  },
  {
    id: "2",
    name: "Иван Васильев",
    img: `..//images/6.jpg`,
    review: `Lorem ipsum`,
    role: "Читатель",
    email: "student.@mail.ru",
  },
];

export default function OneGroup() {
  const [people, setPeople] = useState(person);
  const handleDeleteItem = (id) => {
    setPeople(people.filter((obj) => obj.id !== id));
  };
  return (
    <div>
      <UserHeader />
      <div className={styles.partisipiant}>
        <h2>Участники группы</h2>

        <table className={styles.table}>
          {people.map((p) => (
            <tr key={p.id} className={styles.survey_item}>
              <td href="" className={styles.survey_name}>
                {p.name}
              </td>

              <td href="" className={styles.survey_email}>
                {p.email}
              </td>
              <td href="" className={styles.survey_role}>
                {p.role}
              </td>
              <td className={styles.delete}>
                <FaTrash onClick={() => handleDeleteItem(p.id)} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
