import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import HttpsIcon from "@material-ui/icons/Https";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import RedeemIcon from "@material-ui/icons/Redeem";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import StarsIcon from "@material-ui/icons/Stars";
import OpenWithIcon from "@material-ui/icons/OpenWith";
import PersonIcon from "@material-ui/icons/Person";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EuroIcon from "@material-ui/icons/Euro";

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
    textAlign: "left",
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
  head: {
    color: "white",
    fontSize: "1rem",
    textTransform: "uppercase",
    textAlign: "center",
  },
  node: {
    marginTop: "5rem",
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  const data = props.data;

  const child = (data) => {
    return data && data[0] ? (
      data.map((value) => {
        return !value || typeof value === "string" || value[0] ? (
          <div>- {value ? value : ""}</div>
        ) : (
          <>
            <div className={classes.head + " " + classes.node}>
              {Object.keys(value)[0]}
            </div>
            {Object.values(value)[0] ? child(Object.values(value)[0]) : ""}
          </>
        );
      })
    ) : (
      <div>N/A</div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
      {data ? (
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Paper
              className={classes.paper + " " + classes.fullpaper}
              style={{ background: "#8C0FB5", color: "#fff" }}
            >
              <div className={classes.head}>
                {" "}
                <HttpsIcon />
                <br />
                Problem
              </div>
              {child(data["Problem"])}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={classes.paper}
              style={{ background: "#FF9A00", color: "#fff" }}
            >
              <div className={classes.head}>
                <LockOpenIcon />
                <br />
                Solution
              </div>
              {child(data["Solution"])}
            </Paper>
            <Paper
              className={classes.paper}
              style={{ background: "#FC6B28", color: "#fff" }}
            >
              <div className={classes.head}>
                <RedeemIcon />
                <br />
                Key Metrics
              </div>
              {child(data["Key Metrics"])}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={classes.paper + " " + classes.fullpaper}
              style={{ background: "#00AB45", color: "#fff" }}
            >
              <div className={classes.head}>
                <EqualizerIcon />
                <br />
                Unique Value Proposition
              </div>
              {child(data["Unique Value Proposition"])}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={classes.paper}
              style={{ background: "#7FD02D", color: "#fff" }}
            >
              <div className={classes.head}>
                <StarsIcon />
                <br />
                Unfair Advantage
              </div>
              {child(data["Unfair Advantage"])}
            </Paper>
            <Paper
              className={classes.paper}
              style={{ background: "#00B9A9", color: "#fff" }}
            >
              <div className={classes.head}>
                <OpenWithIcon />
                <br />
                Channels
              </div>
              {child(data["Channels"])}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper
              className={classes.paper + " " + classes.fullpaper}
              style={{ background: "#55D1E5", color: "#fff" }}
            >
              <div className={classes.head}>
                <PersonIcon />
                <br />
                Customer Segment
              </div>
              {child(data["Customer Segment"])}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Paper
              className={classes.paper}
              style={{ background: "#2151CD", color: "#fff" }}
            >
              <div className={classes.head}>
                <LocalOfferIcon />
                <br />
                Cost Structure
              </div>
              {child(data["Cost Structure"])}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Paper
              className={classes.paper}
              style={{ background: "#00728C", color: "#fff" }}
            >
              <div className={classes.head}>
                <EuroIcon />
                <br />
                Revenue Streams
              </div>
              {child(data["Revenue Streams"])}
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12} sm={2}>
          YAML Not Found
        </Grid>
      )}
    </div>
  );
}
