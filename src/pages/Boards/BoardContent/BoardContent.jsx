import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import {mapOrder} from '~/utils/sorts'
import { DndContext, PointerSensor, useSensor,useSensors, MouseSensor, TouchSensor } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({board}) {
  //yêu cầu di chuyển 10px mới chạy event
  const pointerSensor = useSensor(PointerSensor, {activationConstraint: { distance: 10 }})
  const mouseSensor = useSensor(MouseSensor, {activationConstraint: { distance: 10 }})
//nhấn giữ 250ms 
  const touchSensor = useSensor(TouchSensor, {activationConstraint: { delay: 250, tolerance: 500 }}) 
  const sensors = useSensors(mouseSensor, touchSensor) //fix bug tren mobile

  const [orderedColumns, setOrderedColumns] = useState([])

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id')) 
  }, [board])

  const handleDragEnd = (event) => {
    console.log('handleDragEnd: ', event)
    const {active, over} = event

    if(!over) return 

    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id) //lấy vị trí từ tk active
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)

      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // xử lí gọi apis
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id )
      //cosnsole.log('dndOrderedColumns', dndOrderedColumns)
      //cosnsole.log('dndOrderedColumnsIds', dndOrderedColumnsIds)    
      setOrderedColumns(dndOrderedColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}> 
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
    </DndContext>
  );
}

export default BoardContent;
