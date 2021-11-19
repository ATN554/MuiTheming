import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mytab: theme.my.Tab.root
}));

export default function MyH1(props) {
  const classes = useStyles();

  return <h1 className={classes.mytab}>Hello CodeSandbox</h1>;
}
