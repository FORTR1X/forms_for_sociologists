import styles from "./EditUserImage.module.scss";
import CancelIcon from "@material-ui/icons/Cancel";
import { useEffect, useState } from "react";
import Button from "../Button";
import { MdDriveFolderUpload, MdDelete } from "react-icons/md";

export const EditUserImage = (props) => {
  //   const [postTitle, setPostTitle] = useState(props.selectedPost.title)
  //   const [postDesc, setPostDesc] = useState(props.selectedPost.description)

  //   const handlePostTitleChange = (e) => {
  //     setPostTitle(e.target.value)
  //   };

  //   const handlePostDescChange = (e) => {
  //     setPostDesc(e.target.value)
  //   };

  //   const savePost = (e) => {
  //     e.preventDefault()
  //     const post = {
  //       id: props.selectedPost.id,
  //       title: postTitle,
  //       description: postDesc,
  //       liked: props.selectedPost.liked,
  //     }

  //     props.editBlogPost(post);
  //     props.handleEditFormHide()
  //   }

  const handleEditImgHide = props.handleEditImgHide;
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("Файл не выбран");
  return (
    <>
      <form
        className={styles.editPostForm}
        //    onSubmit={savePost}
      >
        <button className={styles.hideBtn} onClick={handleEditImgHide}>
          <CancelIcon />
        </button>
        <h2>Редактирование аватара</h2>

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
              <img
                src={image}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                alt="Название файла"
              />
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
              <MdDelete
                onClick={() => {
                  setFileName("Нет выбранных файлов");
                  setImage(null);
                }}
              />
            </span>
          </section>
        </div>
        <div>
          <button className={styles.blackBtn} type="submit">
            <Button text={"Сохранить"} />
          </button>
        </div>
      </form>
      <div onClick={handleEditImgHide} className={styles.overlay}></div>
    </>
  );
};
