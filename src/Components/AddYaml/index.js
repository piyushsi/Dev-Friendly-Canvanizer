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
  const [defaultData, setDefaultData] = React.useState(
    "Problem:\n- Hard to find a suitable employee\n- Hard to find a suitable job\n- Complicated Interview Problems \n- Existing Alternatives:\n- Angel\n- Hirist\nSolution:\n- Develop a technology that allows both employee and employer to find relevant Job/Employee\nKey Metrics:\n- A Logical implemented CV\n- Online Interview Features with coding Assessment\nUnique Value Proposition:\n- Users can truly find what they're looking for\n- Skills will help to get Job for Employee\n- High Level Concept:\n- Need to use the good backend to  Show Real-Time Data for interview features\nUnfair Advantage:\n- Innovation\nChannels:\n- User References\nCustomer Segment:\n- All Employees/Employers/Students\n- Early Adopters:\n- People from Corona  affected  Area\nCost Structure:\n- Hosting\n- Development\n- Marketing\nRevenue Streams:\n- Investment\n- Advertising\n- Staffing firm (b2b)"
  );
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
  };

  const handleClick = () => {
    localStorage.setItem("data","xyz");
  };

  const handleClick2 = () => {
    var e = { target: {} };
    e.target = {
      name: "payload",
      value: defaultData,
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
          <div>
            {data.payload == "" ? (
              <Chip
                clickable
                avatar={<ReplayIcon />}
                label="Example for Job Portal"
                onClick={handleClick2}
                variant="outlined"
              />
            ) : (
              ""
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
