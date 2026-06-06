import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppIcon from '@mui/icons-material/Apps'
import {ReactComponent as trelloLogo} from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menu/Workspaces'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templants'
import Profile from './Menu/Profile'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'

function AppBar() {
    return (
      <Box px={2} sx={{
        width : '100%',
        height : (theme) => theme.trello.appBarHeight,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        gap : 2,
        overflowX : 'auto'
      }}>
        <Box sx={{ display : 'flex', alignItems : 'center', gap: 2}}>
          <AppIcon sx={{ color : 'primary.secondary'}} />
          <Box sx={{ display : 'flex', alignItems : 'center', gap: 0.5}}>
            <SvgIcon component={trelloLogo} fontSize="small" inheritViewBox sx={{ color : 'primary.secondary'}}/>
            <Typography variant='span' color='primary.secondary' sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>Trello</Typography>
          </Box>

          <Box sx={{ display:{xs:'none', md:'flex'}, gap: 1}}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <Button variant='outlined'>Create</Button>
          </Box>
        </Box>

        <Box sx={{ display : 'flex', alignItems : 'center', gap: 2}}>
          <TextField id="outlined-search" label="Search..." type="search" size="small" sx={{minWidth: '120px'}} />
          <ModeSelect /> 
          <Tooltip title="Notifications">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer'}}>
              <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <Badge  sx={{ cursor: 'pointer'}}>
              <HelpOutlineOutlinedIcon sx={{ color: 'primary.main' }} />
            </Badge>
          </Tooltip>

          <Profile />
          
        </Box>
      </Box>
    );
}

export default AppBar;
