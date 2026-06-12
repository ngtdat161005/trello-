import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import {mapOrder} from '~/utils/sorts'


function BoardContent({board}) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box sx={{
      backgroundColor : (theme) => (theme.palette.mode === 'light' ? '#1976d2' : '#34495e'),
      width : '100%',
      height : (theme) => theme.trello.boardContentHeight,
      display : 'flex',
      // alignItems : 'center',
      p: '10px 0'
    }}>
      <ListColumns columns={orderedColumns}/>
    </Box>
  );
}

export default BoardContent;
