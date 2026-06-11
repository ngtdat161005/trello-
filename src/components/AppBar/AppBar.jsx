import {useState} from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
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
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
    return (
      <Box  sx={{
        width : '100%',
        height : (theme) => theme.trello.appBarHeight,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingX : 2,
        gap : 2,
        overflowX : 'auto',
        backgroundColor : (theme) => (theme.palette.mode === 'light' ? '#1565c0' : '#2c3e50'),
      }}>
        <Box sx={{ display : 'flex', alignItems : 'center', gap: 2}}>
          <AppIcon sx={{ color : 'white'}} />
          <Box sx={{ display : 'flex', alignItems : 'center', gap: 0.5}}>
            <SvgIcon component={trelloLogo} fontSize="small" inheritViewBox sx={{ color : 'white'}}/>
            <Typography variant='span' color='white' sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>Trello</Typography>
          </Box>

          <Box sx={{ display:{xs:'none', md:'flex'}, gap: 1}}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <Button 
              startIcon={<LibraryAddIcon />} 
              sx={{ 
                color: 'white', 
              }}
            >
              Create
            </Button>
          </Box>
        </Box>

        <Box sx={{ display : 'flex', alignItems : 'center', gap: 2}}>
          <TextField 
            id="outlined-search" 
            label="Search..." 
            type="text" 
            size="small" 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
              startAdornment:(
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              endAdornment:(
                <CloseIcon 
                  fontSize="small"
                  sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setSearchValue('')}
                />
              )
            }}
            sx={{
              minWidth: '120px',
              maxWidth: '200px',
              '& label': { color: 'white' },
              '& input': { color: 'white' },
              '& label.Mui-focused': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white'},
                '&:hover fieldset': { borderColor: 'white'},
                '&.Mui-focused fieldset': { borderColor: 'white'}
              }    




            }} 
          />
          <ModeSelect /> 
          <Tooltip title="Notifications">
            <Badge color="warning" variant="dot" sx={{ cursor: 'pointer'}}>
              <NotificationsNoneIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <Badge  sx={{ cursor: 'pointer'}}>
              <HelpOutlineOutlinedIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>

          <Profile />
          
        </Box>
      </Box>
    );
}

export default AppBar;
