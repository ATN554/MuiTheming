import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme.js";
import Button from "@mui/material/Button";

import MyH1 from "./MyH1.js";
import MyH2 from "./MyH2.js";

export default function App() {
  const [x, setX] = React.useState(false);

  const theme = React.useMemo(() => getTheme(x), [x]);

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={() => setX(!x)}>
        {theme.my.Tab.root.backgroundColor}
      </Button>
      <MyH1 />
      <MyH2 />
    </ThemeProvider>
  );
}
