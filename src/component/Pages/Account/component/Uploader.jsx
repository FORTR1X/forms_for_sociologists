import React from "react";
import styles from "./Uploader.module.scss";
import { useState } from "react";
import { MdDriveFolderUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

function Uploader() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("Файл не выбран");

  return (
    <div className={styles.uploader}>
      <div
        className={styles.file_wrapper}
        onClick={() => document.getElementById("1").click()}
        // action=""
      >
        <input
          type="file"
          accept="image/*"
          className={styles.input_field}
          id="1"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />
        {image ? (
          <img src={image} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} alt="Название файла" />
        ) : (
          <>
            <MdDriveFolderUpload color="#14da8f" size={60} />
            <p>Выберете файл для аватарки</p>
          </>
        )}
      </div>
      
      <section className={styles.uploaded_row}>
        {/* <AiFillFileImage color="#1475cf"/> */}
        <span className={styles.uploaded_content}>
            {fileName}
            <MdDelete onClick={() => {
                setFileName('Нет выбранных файлов')
                setImage(null)
            }}/>
        </span>
      </section>
    </div>
  );
}

export default Uploader;
