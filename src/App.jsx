import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import  Typography  from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'

function ModeToggler() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      Switch to {mode === 'light' ? 'dark' : 'light'} mode
    </Button>
  )
}

function App() {
  return (
    <>
    <ModeToggler />
    <hr />
    <div>dazoriii</div>

    <Typography variant="h1" color="text.secondary">
      h1. Heading
    </Typography>

     <Button variant="text">Text</Button>
     <Button variant="contained" color= "success">Contained</Button>
     <Button variant="outlined">Outlined</Button>
     <br />
     <AccessAlarmIcon />
     <ThreeDRotation />
     <HomeIcon />
<HomeIcon color="primary" />
<HomeIcon color="secondary" />
<HomeIcon color="success" />
<HomeIcon color="action" />
<HomeIcon color="disabled" />
<HomeIcon sx={{ color: pink[300] }} />
    </>
  )
}

export default App
