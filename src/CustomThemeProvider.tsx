import { ThemeProvider, createTheme } from '@mui/material';

interface Props {
  children: JSX.Element | JSX.Element[]
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
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;