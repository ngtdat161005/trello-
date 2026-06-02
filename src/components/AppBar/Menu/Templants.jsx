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

function Templates() {
  const id = React.useId()

  const templatesButtonId = `${id}-button`
  const templatesMenuId = `${id}-menu`

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
        id={templatesButtonId}
        aria-controls={open ? templatesMenuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        Templates
      </Button>

      <Menu
        id={templatesMenuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': templatesButtonId
          }
        }}
      >
        <MenuItem>
          <ListItemText inset>Project Management</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText inset>Product Roadmap</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemText inset>Sprint Planning</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Check fontSize="small" />
          </ListItemIcon>
          <ListItemText>Team Tasks</ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemText>Browse all templates</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Templates