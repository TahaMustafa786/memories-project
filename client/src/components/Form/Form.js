import useStyles from "./styles";
import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  const handleReset = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.form} ${classes.root}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6"> Creating a memory </Typography>
          <TextField
            name="creator"
            label="Creator"
            variant="outlined"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          ></TextField>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          ></TextField>
          <TextField
            name="message"
            label="Message"
            variant="outlined"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          ></TextField>
          <TextField
            name="tags"
            label="Tags"
            variant="outlined"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          ></TextField>
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={(base64) => {
                setPostData({ ...postData, selectedFile: base64.base64 })
              }
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
          <Button
            className={classes.buttonSubmit}
            style={{ marginTop: "8px" }}
            variant="contained"
            color="secondary"
            size="small"
            fullWidth
            onClick={handleReset}
          >
            Reset
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
