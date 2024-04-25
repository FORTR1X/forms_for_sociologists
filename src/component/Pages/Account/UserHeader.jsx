import React from "react";
import styles from "./UserHeader.module.scss";
import { NavLink } from "react-router-dom";

export default function UserHeader() {
  return (
    <div>
      <div className={styles.header}>
        <NavLink to="/">
          <div className={styles.logo_wrapper}>
            F<span>F</span>
          </div>
        </NavLink> 

        <NavLink to="/newTeam">Создать команду</NavLink>
        <NavLink to="/survey">Создать опрос</NavLink>
        <NavLink to="/allTeam">Все команды</NavLink>

        <form action="" method="post" className="form-search">
          {/* <div className={styles.search}>
            <input
              className={styles.searchFormText}
              required 
              type="text"
              id="search"
              name="search"
              placeholder="Поиск..."
            ></input>
            <button className={styles.searchFormBtn}>
              <svg
                className="icon"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 5C12.75 5.99456 12.3549 6.94839 11.6516 7.65165C10.9484 8.35491 9.99454 8.75 8.99998 8.75C8.00541 8.75 7.05159 8.35491 6.34833 7.65165C5.64506 6.94839 5.24998 5.99456 5.24998 5C5.24998 4.00544 5.64506 3.05161 6.34833 2.34835C7.05159 1.64509 8.00541 1.25 8.99998 1.25C9.99454 1.25 10.9484 1.64509 11.6516 2.34835C12.3549 3.05161 12.75 4.00544 12.75 5ZM1.50098 19.118C1.53311 17.1504 2.33731 15.2742 3.74015 13.894C5.14299 12.5139 7.03206 11.7405 8.99998 11.7405C10.9679 11.7405 12.857 12.5139 14.2598 13.894C15.6626 15.2742 16.4668 17.1504 16.499 19.118C14.1464 20.1968 11.5881 20.7535 8.99998 20.75C6.32398 20.75 3.78398 20.166 1.50098 19.118Z"
                  fill="#dadada"
                  stroke="#dadada"
                  stroke-width="0.1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div> */}
        </form>
        <div className={styles.userPanel}>US</div>
      </div>
    </div>
  );
}
