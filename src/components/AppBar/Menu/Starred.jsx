import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Check from '@mui/icons-material/Check'

function Starred() {
  const id = React.useId()

  const starredButtonId = `${id}-button`
  const starredMenuId = `${id}-menu`

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
      <Button
        id={starredButtonId}
        aria-controls={open ? starredMenuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        Starred
      </Button>

      <Menu
        id={starredMenuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': starredButtonId
          }
        }}
      >
        <MenuItem>
          <ListItemText inset>Project Alpha</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText inset>Frontend Team</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText inset>Personal Board</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Check fontSize="small" />
          </ListItemIcon>
          <ListItemText>Favorite Workspace</ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Manage starred boards</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Starred