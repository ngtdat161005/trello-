import Box from '@mui/material/Box'
import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import  Tooltip  from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

  const COLUMN_HEADER_HEIGHT = '50px'
  const COLUMN_FOOTER_HEIGHT = '56px'

function BoardContent() {
  const id = React.useId()
  const basicColumnDropdown = `${id}-button`
  const basicMenuColumnDropdown = `${id}-menu`
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {setAnchorEl(event.currentTarget)}
  const handleClose = () => {setAnchorEl(null)}

    return (
      <Box sx={{
        backgroundColor : (theme) => (theme.palette.mode === 'light' ? '#1976d2' : '#34495e'),
        width : '100%',
        height : (theme) => theme.trello.boardContentHeight,
        display : 'flex',
       // alignItems : 'center',
        p: '10px 0'
      }}>
        <Box sx={{
          backgroundColor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track':{ m: 2 }
        }}>
        {/*Box column1 */}
          <Box sx={{
            minWidth: '300px',
            maxWidth: '300px',
            backgroundColor : (theme) => (theme.palette.mode === 'light' ? '#ebecf0' : '#333643'),
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}>
            {/*Box column header*/}
            <Box sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Typography variant='h6' sx={{
                  fontSize: '1rem' ,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Column Title
              </Typography>
              <Box>
                <Tooltip>
                  <ExpandMoreIcon
                  sx={{
                    color: 'text.primary',
                    cursor: 'pointer'
                  }}
                    id={basicColumnDropdown}
                    aria-controls={open ? basicMenuColumnDropdown : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    />
                </Tooltip>
                  <Menu
                    id={basicMenuColumnDropdown}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        'aria-labelledby': basicColumnDropdown
                      }
                    }}
                  >
                    <MenuItem>
                      <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                      <ListItemText>Add new card</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                      <ListItemText>Cut</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                      <ListItemText>Copy</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                      <ListItemText>Paste</ListItemText>
                    </MenuItem>

                    <Divider />
                    <MenuItem>
                      <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
                      <ListItemText>Remove this column</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                      <ListItemText>Archive this column</ListItemText>
                    </MenuItem>
                  </Menu>
                </Box>
            </Box>

            {/*Box column body1*/}
            <Box sx={{
              p: '0 5px',
              m: '0 5px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) => `calc(
              ${theme.trello.boardContentHeight} - 
              ${theme.spacing(5)} -
              ${COLUMN_HEADER_HEIGHT} -
              ${COLUMN_FOOTER_HEIGHT} 
              )`,
            '&::-webkit-scrollbar-thumb':{
              backgroundColor: '#ced0da',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover':{
              backgroundColor: '#bfc2cf',
              borderRadius: '8px'
            }  
            }}>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'

                }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://th.bing.com/th/id/OIP.cOxdhYuj6ofsMORZhg1uzgHaFo?w=210&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
                  title="green iguana"
                />
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5} }}>
                  <Typography>NgTDat Trello web UI</Typography>
                </CardContent>
                <CardActions sx={{ p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon />}>20</Button>
                  <Button size="small" startIcon={<CommentIcon />}>10</Button>
                  <Button size="small" startIcon={<AttachmentIcon />}>11</Button>

                </CardActions>
              </Card>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
                }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5} }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
                }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5} }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
                }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5} }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
                }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5} }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
                }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5} }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
                }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5} }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
                }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5} }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>


            </Box>

            {/*Box column footer*/}
            <Box sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Button startIcon={<AddCardIcon/>}>Add new card</Button>
              <Tooltip title='Drag to move'>
                <DragHandleIcon sx={{cursor:'pointer'}}/>
              </Tooltip>
            </Box>

          </Box>


        {/*Box column2*/}
          <Box sx={{
            minWidth: '300px',
            maxWidth: '300px',
            backgroundColor : (theme) => (theme.palette.mode === 'light' ? '#ebecf0' : '#333643'),
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
          }}>
            {/*Box column header*/}
            <Box sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Typography variant='h6' sx={{
                  fontSize: '1rem' ,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Column Title
              </Typography>
              <Box>
                <Tooltip>
                  <ExpandMoreIcon
                  sx={{
                    color: 'text.primary',
                    cursor: 'pointer'
                  }}
                    id={basicColumnDropdown}
                    aria-controls={open ? basicMenuColumnDropdown : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    />
                </Tooltip>
                  <Menu
                    id={basicMenuColumnDropdown}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        'aria-labelledby': basicColumnDropdown
                      }
                    }}
                  >
                    <MenuItem>
                      <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                      <ListItemText>Add new card</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                      <ListItemText>Cut</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                      <ListItemText>Copy</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                      <ListItemText>Paste</ListItemText>
                    </MenuItem>

                    <Divider />
                    <MenuItem>
                      <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
                      <ListItemText>Remove this column</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                      <ListItemText>Archive this column</ListItemText>
                    </MenuItem>
                  </Menu>
                </Box>
            </Box>

            {/*Box column body1*/}
            <Box sx={{
              p: '0 5px',
              m: '0 5px',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              overflowX: 'hidden',
              overflowY: 'auto',
              maxHeight: (theme) => `calc(
              ${theme.trello.boardContentHeight} - 
              ${theme.spacing(5)} -
              ${COLUMN_HEADER_HEIGHT} -
              ${COLUMN_FOOTER_HEIGHT} 
              )`,
            '&::-webkit-scrollbar-thumb':{
              backgroundColor: '#ced0da',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover':{
              backgroundColor: '#bfc2cf',
              borderRadius: '8px'
            }  
            }}>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'

                }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://th.bing.com/th/id/OIP.cOxdhYuj6ofsMORZhg1uzgHaFo?w=210&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
                  title="green iguana"
                />
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5} }}>
                  <Typography>NgTDat Trello web UI</Typography>
                </CardContent>
                <CardActions sx={{ p:'0 4px 8px 4px'}}>
                  <Button size="small" startIcon={<GroupIcon />}>20</Button>
                  <Button size="small" startIcon={<CommentIcon />}>10</Button>
                  <Button size="small" startIcon={<AttachmentIcon />}>11</Button>

                </CardActions>
              </Card>
              <Card sx={{ 
                cursor: 'pointer',
                boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
                overflow: 'unset'
                }}>
                <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5} }}>
                  <Typography>Card 01</Typography>
                </CardContent>
              </Card>
            </Box>
            
            {/*Box column footer*/}
            <Box sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Button startIcon={<AddCardIcon/>}>Add new card</Button>
              <Tooltip title='Drag to move'>
                <DragHandleIcon sx={{cursor:'pointer'}}/>
              </Tooltip>
            </Box>

          </Box>
        </Box>

      </Box>
    );
}

export default BoardContent;
