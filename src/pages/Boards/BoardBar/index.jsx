import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const MENU_STYLE = {
              color: 'primary.main', 
              bgcolor: 'white',
              border: 'none',
              paddingX: '5px',
              borderRadius: '4px',
              '& .MuiSvgIcon-root': {
                color: 'primary.main',      
              },
              '&:hover': {
                bgcolor: 'primary.50',      
              }
}
function BoardBar() {
    return (
      <Box sx={{
        width : '100%',
        height : (theme) => theme.trello.boardBarHeight,
        display : 'flex',
        alignItems : 'center', 
        justifyContent : 'space-between',
        paddingX : 2,
        gap : 2,
        overflow : 'auto',
        borderTop : '1px solid #00bfa5',
      }}>
        <Box sx={{ display : 'flex', alignItems : 'center', gap: 2}}>
          <Chip 
            sx={MENU_STYLE}
            icon={<DashboardIcon />}
            label="Dashboard"
            clickable
          />
          <Chip 
            sx={MENU_STYLE}
            icon={<VpnLockIcon />}
            label="Public/Private Workspace"
            clickable
          />
          <Chip 
            sx={MENU_STYLE}
            icon={<AddToDriveIcon />}
            label="Add to Drive"
            clickable
          />
          <Chip 
            sx={MENU_STYLE}
            icon={<BoltIcon />}
            label="Automation"
            clickable
          />
          <Chip 
            sx={MENU_STYLE}
            icon={<FilterListIcon />}
            label="Filters"
            clickable
          />
      
        </Box>

        <Box sx={{ display : 'flex', alignItems : 'center', gap: 2}}>
          <Button variant='outlined'startIcon={<PersonAddIcon />}>
            Invite
          </Button>
          <AvatarGroup 
            max={5}
            sx={{
              '& .MuiAvatar-root': {
                width: 34,
                height: 34,
                fontSize: 16,
              }
            }}
          >
            <Tooltip title="emilia"> 
              <Avatar 
                alt="emilia" 
                src="https://th.bing.com/th/id/OIP.5GtQy0VMXlHGmiSPfga1kwHaEK?w=274&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" />
            </Tooltip>
            <Tooltip title="subaru"> 
              <Avatar 
                alt="subaru" 
                src="https://img1.ak.crunchyroll.com/i/spire3/b2565c092161bd2ce3a53f366e1fc6fa1596476874_main.png" />
            </Tooltip>
            <Tooltip title="meili"> 
              <Avatar 
                alt="meili" 
                src="https://th.bing.com/th/id/OIP.wXX9Vr2UVnA6pJuPklMkrAHaKg?w=194&h=276&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" />
            </Tooltip>
            <Tooltip title="therasia"> 
              <Avatar 
                alt="therasia" 
                src="https://th.bing.com/th/id/OIP.GR4IUbP3N_uDyGKwJLEHzgHaKP?w=194&h=268&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" />
            </Tooltip>
            <Tooltip title="otto"> 
              <Avatar 
                alt="otto" 
                src="https://th.bing.com/th/id/OIP.8UsNSCA00I7DpUUH9rSU2QHaFj?w=228&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3" />
            </Tooltip>

          </AvatarGroup>
        </Box>
      </Box>
    );
}

export default BoardBar;
