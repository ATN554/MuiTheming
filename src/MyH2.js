import React from "react";
import { withStyles } from "@mui/styles";

const styles = (theme) => {
  return {
    mytab: theme.my.Tab.root
  };
};

class MyH2 extends React.Component {
  render() {
    return <h2 className={this.props.classes.mytab}>Hello CodeSandbox</h2>;
  }
}

export default withStyles(styles)(MyH2);
