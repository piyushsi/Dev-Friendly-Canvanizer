import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Yaml from "yamljs";
import ReplayIcon from "@material-ui/icons/Replay";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(22),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "15rem",
    borderRadius: "0%",
    border: "1px solid lightgrey",
  },
  fullpaper: {
    height: "30rem",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  textarea: {
    width: "100%",
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  const [data, setData] = React.useState({
    payload: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    props.data(Yaml.parse(value));
    localStorage.setItem("data", value == "" ? localStorage.data : value);
  };

  const handleClick = () => {
    var e = { target: {} };
    e.target = {
      name: "payload",
      value: localStorage.data,
    };
    handleChange(e);
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      <Grid container>
        <Grid item xs={10} sm={10}>
          <TextareaAutosize
            name="payload"
            onChange={handleChange}
            className={classes.textarea}
            aria-label="minimum height"
            rowsMin={12}
            placeholder="Input YAML format in Title Case"
            value={data.payload}
          />
          {data.payload == "" ? (
            <div>
              <Chip
                clickable
                avatar={<ReplayIcon />}
                label="undo"
                onClick={handleClick}
                variant="outlined"
              />
            </div>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </div>
  );
}
