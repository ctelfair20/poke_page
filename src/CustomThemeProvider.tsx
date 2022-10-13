import { ThemeProvider, createTheme } from '@mui/material';
import { themeI } from './themeInterfaces';

interface Props {
  // This comp should expect JSX comps as children
  children: JSX.Element | JSX.Element[]
  // This theme can be expanded upon to include anything from the default theme from MUI -- I just need to add the interface to './themeInterfaces'
  theme: themeI
}

// This theme can be expanded upon to include anything from the default theme from MUI -- I just need to add the interface to './themeInterfaces' ASK ROB - I DON'T have to add it to the interface...WHY?
export const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#CCC'
  //   },
  //   background: {
  //     paper: '#CCC',
  //   }
  // },
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