// When styling components in MUIv5 use the 'sx' prop. The keys can be short hand: 'p' is for padding. 'm' is for margin. The numbers you provide as values for the keys are that number times the defualt spacing value: 4px -- p: 2 == padding: 2*4px => padding: 8px. Want to scale down/up? Just change the default spacing from 4px and whatever you want! => https://www.youtube.com/watch?v=_W3uuxDnySQ & https://mui.com/system/properties/ -- make sure to zoom out to see the whole chart
export interface themeI {
  palette: {
    primary: {
      main: string
    },
    background: {
      paper: string
    }
  }
}
