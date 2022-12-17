import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { style } from "./MovieModalStyle";
import { imageBaseURL } from "../../services/constant";
import formatDate from '../../services/formatDate';

const MovieModal = ({ open, handleClose, modalContent }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal"
      // style={{
      //   width: "400px",
      //   marginLeft: "40%",
      //   backgroundColor: "transparent",
      // }}
    >
      <Box className="modal_box" sx={style}>
        <div className="modal_nav">
          <h4>{modalContent.title}</h4>
          <IconButton
            className="modal_close_button"
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon className="modal_close_icon" />
          </IconButton>
        </div>
        <div className="nav_body">
          <img
            src={modalContent.poster_path != null ? imageBaseURL + modalContent.poster_path : "/poster-holder.jpg"}
            alt="poster_img"
          />
          <div className="modal_description">
            <p className="movie_release_date">
              <b>Release date:</b> {modalContent.release_date && formatDate(modalContent.release_date)}
            </p>
            <p className="movie_description">
              {modalContent.overview}
            </p>
            <p className="movie_rating">
              <b>{modalContent.vote_average}</b> / 10 ({modalContent.vote_count} total votes)
            </p>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default MovieModal;
