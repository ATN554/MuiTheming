import { createTheme } from "@mui/material/styles";

function theme1() {
  return createTheme({
    my: {
      Tab: {
        root: {
          backgroundColor: "green",
          border: "5px solid gray"
        }
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "1rem"
          }
        }
      }
    }
  });
}

function theme2() {
  return createTheme({
    my: {
      Tab: {
        root: {
          backgroundColor: "blue",
          border: "10px solid gray"
        }
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: "2rem"
          }
        }
      }
    }
  });
}

export default function getTheme(x) {
  if (x) {
    return theme2();
  }
  return theme1();
}
