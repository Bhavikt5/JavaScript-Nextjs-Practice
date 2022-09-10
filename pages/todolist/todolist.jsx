import React, { useEffect, useState } from "react";
import styles from "../../styles/todolistcss/TodoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faSquareCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const todolist = () => {
  const [todonote, setTodonote] = useState("");
  const [noteArr, setNoteArr] = useState([
    { name: "sadasdaasad" },
    { name: "asdgfdgfdg" },
    { name: "asdasdasad" },
  ]);
  const [open, setOpen] = useState(false);
  const [strike, setStrike] = useState({});
  const [modalInput, setModalInput] = useState("");

  let findNote;

  const handleOpen = (index) => {
    findNote = noteArr[index].name;
    setModalInput(findNote);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);

    const getIndex = noteArr.indexOf(modalInput);

    noteArr[getIndex].name = modalInput;

    console.log((noteArr[getIndex].name = modalInput));
    console.log(noteArr);

    // if (noteArr.indexOf(modalInput)) {
    //   console.log("found");
    // } else {
    //   console.log("not found");
    // }
  };

  const addToList = (e) => {
    e.preventDefault();
    noteArr.push(todonote);
    console.log(noteArr);
    setTodonote("");
  };

  const strikeTxt = (index) => {
    if (noteArr[index] === index) {
      setStrike({ textDecoration: "line-through" });
    } else {
      setStrike({});
    }
  };

  const deleteNote = (index) => {
    noteArr.splice(index, 1);
    setNoteArr([...noteArr]);
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}> ToDo List</h1>
        <form className={styles.input} onSubmit={addToList}>
          <input
            type="text"
            placeholder="... buy grocery, fill gas"
            onChange={(i) => setTodonote(i.target.value)}
            value={todonote}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </form>

        <div className={styles.noteContainer}>
          {noteArr.map((i, index) => {
            return (
              <div key={index} className={styles.noteCard}>
                <p style={strike}>{i.name}</p>
                <div className={styles.cardBtn}>
                  <button
                    onClick={() => {
                      handleOpen(index);
                      setOpen(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button onClick={() => strikeTxt(index)}>
                    <FontAwesomeIcon icon={faSquareCheck} />
                  </button>
                  <button onClick={() => deleteNote(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={styles.modalCard}>
              <input
                type="text"
                placeholder={modalInput}
                onChange={(i) => setModalInput(i.target.value)}
              />
              <button type="submit" onClick={(index) => handleClose(index)}>
                Save
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default todolist;
