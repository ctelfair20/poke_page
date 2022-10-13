import { ThemeProvider, createTheme } from '@mui/material';

interface Props {
  // This comp should expect JSX comps as children
  children: JSX.Element | JSX.Element[]
  // This theme can be expanded upon to include anything from the default theme from MUI  -- maybe this should go in a separate file so that I can breakdown all the objects into separate interfaces
  theme: {
    palette: {
      primary: {
        main: string
      },
      background: {
        paper: string
      }
    },
  }
}

// This theme can be expanded upon to include anything from the default theme from MUI
export const theme = createTheme({
  palette: {
    primary: {
      main: '#CCC'
    },
    background: {
      paper: '#AA4A44',
    }
  },
});

const CustomThemeProvider = ({ children }: Props) => {
  return (
    // works just like pokeContext without the need of a useContext hook
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;