
import { teal, deepOrange, cyan, orange } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// Create a theme instance.
const theme = extendTheme({
  trello : {
    appBarHeight : '48px',
    boardBarHeight : '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
        info: cyan,
        warning: orange,
        },  
    }
},    dark: {
      palette: {
        primary: teal,
        secondary: deepOrange,
        info: cyan,
        warning: orange,
        },
    }    
}) 
export default theme