import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

function Profile() {
  const id = React.useId()

  const profileButtonId = `${id}-button`
  const profileMenuId = `${id}-menu`

  const [anchorEl, setAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ padding: 0 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open}
          >
        <Avatar
         sx={{ width: 30, height: 30 }}
         src=""
         alt="NgTDat"
         />
          </IconButton>
        </Tooltip>

      <Menu
        id={profileMenuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': profileButtonId
          }
        }}
      >
        <MenuItem >
          <Avatar sx={{ width: 25, height: 25, mr: 2 }} src="" alt="NgTDat" />
          Profile
        </MenuItem>

        <MenuItem >
          <Avatar sx={{ width: 25, height: 25, mr: 2 }} src="" alt="NgTDat" />
          My account
        </MenuItem>

        <Divider />

        <MenuItem >
        <ListItemIcon>
            <PersonAddIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Add another account</ListItemText>
        </MenuItem>

        <MenuItem >
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>

        <MenuItem >
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Profile