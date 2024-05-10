import React, { useState } from "react";
import UserHeader from "./UserHeader";
import styles from "./OneTeam.module.scss";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { MdGroupAdd } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import DropDown from "./dropdown/DropDown";
import DropDownTeam from "./dropdown/DropDownTeam";
import { GoArrowUpRight } from "react-icons/go";
import { EditPostForm } from "./edit/EditPostForm";

const info = [
  {
    id: "0",
    name: "Команда Шашлыки",
    img: `..//images/4.jpg`,
    review: `Кто какое мясо ест`,
  },
];

const person = [
  {
    id: "0",
    name: "Вася Иванов",
    img: `..//images/4.jpg`,
    review: `Lorem ipsum`,
    role: "",
    email: "student.@mail.ru",
  },
  {
    id: "1",
    name: "Иванов Вася",
    img: `..//images/5.jpg`,
    review: `Lorem ipsum`,
    role: "",
    email: "student.@mail.ru",
  },
  {
    id: "2",
    name: "Иван Васильев",
    img: `..//images/6.jpg`,
    review: `Lorem ipsum`,
    role: "",
    email: "student.@mail.ru",
  },
];

const team = [
  {
    id: "0",
    name: "Пишки",
    img: `..//images/1.jpg`,
    review: `Геоштуки, карты, хорошие ребятки`,
  },
  {
    id: "1",
    name: "Исы",
    img: `..//images/2.jpg`,
    review: `Нормально в целом`,
  },
  {
    id: "2",
    name: "Пины",
    img: `..//images/3.jpg`,
    review: `Lorem ipsum`,
  },
  {
    id: "3",
    name: "Ивт",
    img: `..//images/3.jpg`,
    review: `Lorem ipsum`,
  },
];

const team_survey = [
  {
    img: `..//images/7.jpg`,
    name: "Опрос 1",
    review: `Опрос почему вы поступили на магистратуру, а не пошли работать и
      каков ваш психологический возраст`,
  },
  {
    img: `..//images/8.jpg`,
    name: "Опрос 2",
    review: `Опрос почему вы поступили на магистратуру, а не пошли работать и
      каков ваш психологический возраст`,
  },
  {
    img: `..//images/9.jpg`,
    name: "Опрос 3",
    review: `Опрос почему вы поступили на магистратуру, а не пошли работать и
      каков ваш психологический возраст`,
  },
];

export default function OneTeam() {
  const [selected, setSelected] = useState(<CgMoreVerticalAlt />);
  const [selectedTeam, setSelectedTeam] = useState(<MdGroupAdd />);
  const [people, setPeople] = useState(person);
  const [teams, setTeams] = useState(team);
  const [show, showEditForm] = useState(false);

  const handleDeleteItem = (id) => {
    setPeople(people.filter((obj) => obj.id !== id));
  };

  const handleDeleteTeam = (id) => {
    setTeams(teams.filter((obj) => obj.id !== id));
  };

  const handleEditFormShow = () => {
    showEditForm(true);
  };
  const handleEditFormHide = () => {
    showEditForm(false);
  };

  return (
    <div className={styles.wrapper}>
      <UserHeader />

      <div className={styles.team_description}>
        {show && <EditPostForm handleEditFormHide={handleEditFormHide} />}
        <div className={styles.team_item}>
          <a href="" className={styles.team_image}>
            <img src="./../../../..//images/2.jpg" alt="" className="" />
            <CiEdit className={styles.edit_foto} />
            <FaTrash className={styles.delete_foto} />
          </a>
          <div className={styles.team_text}>
            <div className={styles.info}>
              {info.map((p) => (
                <>
                  <h3>{p.name}</h3>
                  <div>{p.review}</div>
                </>
              ))}
            </div>

            <CiEdit className={styles.edit_info} onClick={handleEditFormShow} />
            {/* <Button text={"Сохранить"} /> */}
          </div>
        </div>

        <div className={styles.team_partisipants}>
          <div className={styles.team_title}>
            <h2>Участники команды</h2>
            <NavLink to="/addPart">
              <Button text={"Добавить участника"} />
            </NavLink>
          </div>

          <div className={styles.survey_items}>
            {people.map((p) => (
              <div key={p.id} className={styles.survey_item}>
                <div className={styles.survey_item}>
                  <div href="" className={styles.survey_image}>
                    <img src={p.img} alt="" className="" />
                    <DropDown
                      id={p.id}
                      className={styles.choice_role}
                      selected={
                        selected[p.id] ? selected[p.id] : <CgMoreVerticalAlt />
                      }
                      fullSelected={selected}
                      setSelected={setSelected}
                    />

                    <DropDownTeam
                      id={p.id}
                      className={styles.choice_team}
                      selected={
                        selectedTeam[p.id] ? selectedTeam[p.id] : <MdGroupAdd />
                      }
                      fullSelected={selectedTeam}
                      setSelected={setSelectedTeam}
                    />
                  </div>

                  <div className={styles.row}>
                    <div href="" className={styles.survey_name}>
                      {p.name}
                    </div>

                    <div className={styles.delete}>
                      <FaTrash onClick={() => handleDeleteItem(p.id)} />
                    </div>
                  </div>

                  <div href="" className={styles.survey_email}>
                    {p.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.team_team}>
          <div className={styles.team_title}>
            <h2>Группы участников</h2>
            <NavLink to="/newGroup">
              <Button text={"Создать группу"} />
            </NavLink>
          </div>

          <div className={styles.survey_items}>
            {teams.map((t) => (
              <div key={t.id} className={styles.survey_item}>
                <div className={styles.survey_item}>
                  <div href="" className={styles.survey_image}>
                    <img src={t.img} alt="" className="" />
                    <NavLink to="/oneGroup">
                      <GoArrowUpRight
                        className={`${styles.choice_role} ${styles.bc}`}
                      />
                    </NavLink>
                  </div>
                  <div className={styles.team_name_title}>
                    <div href="" className={styles.survey_name}>
                      {t.name}
                    </div>
                    <div className={styles.delete}>
                      <FaTrash onClick={() => handleDeleteTeam(t.id)} />
                    </div>
                  </div>

                  <div href="" className={styles.survey_review}>
                    {t.review}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.team_survey}>
          <div className={styles.team_title}>
            <h2>Опросы команды</h2>
            <Button text={"Создать опрос"} />
          </div>

          <div className={styles.survey_items}>
            {team_survey.map((ts) => (
              <div className={styles.survey_item}>
                <div className={styles.survey_item}>
                  <div href="" className={styles.survey_image}>
                    <img src={ts.img} alt="" className="" />
                  </div>

                  <div className={styles.survey_title_go}>
                    <div href="" className={styles.survey_name}>
                      {ts.name}
                    </div>
                    <NavLink to="/survey">
                      <GoArrowUpRight className={styles.survey_go} />
                    </NavLink>
                  </div>

                  <div href="" className={styles.survey_review}>
                    {ts.review}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
