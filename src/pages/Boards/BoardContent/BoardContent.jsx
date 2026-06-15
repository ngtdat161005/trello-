import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import {mapOrder} from '~/utils/sorts'
import {  DndContext, 
          PointerSensor, 
          useSensor,
          useSensors, 
          MouseSensor, 
          TouchSensor, 
          DragOverlay,
          defaultDropAnimationSideEffects,
          closestCorners } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove} from '@dnd-kit/sortable'
import Column from './ListColumns/Columns/Column'
import Card from './ListColumns/Columns/ListCards/Card/Card'
import { cloneDeep } from 'lodash'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({board}) {
  //yêu cầu di chuyển 10px mới chạy event
  const pointerSensor = useSensor(PointerSensor, {activationConstraint: { distance: 10 }})
  const mouseSensor = useSensor(MouseSensor, {activationConstraint: { distance: 10 }})
//nhấn giữ 250ms 
  const touchSensor = useSensor(TouchSensor, {activationConstraint: { delay: 250, tolerance: 500 }}) 
  const sensors = useSensors(mouseSensor, touchSensor) //fix bug tren mobile

  const [orderedColumns, setOrderedColumns] = useState([])
  // chỉ kéo column/ card cùng 1 tđ
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState(null)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id')) 
  }, [board])
  //tìm column theo cardId
  const findColumnByCardId = (cardId) => {
    return orderedColumns.find(column => column.cards.map(card => card._id)?.includes(cardId))
  }

  const moveCardBetweenDiffColumns = (
    overColumn,
    overCardId,
    active,
    over,
    activeColumn,
    activeDraggingCardId,
    activeDragItemData
  ) => {
    setOrderedColumns(prevColumns => {
    const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId) 

    // calc index mới cuar card     
    let newCardIndex 
    const isBelowOverItem = active.rect.current.translated &&
      active.rect.current.translated.top > over.rect.top + over.rect.height
    const modifier = isBelowOverItem ? 1 : 0
    newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1
    // console.log('isBelowOverItem: ', isBelowOverItem)
    // console.log('modifier: ', modifier)
    // console.log('newCardIndex: ', newCardIndex)          
    const nextColumns = cloneDeep(prevColumns)
    const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)  
    const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)     

    if(nextActiveColumn) {
      // xoá cards active và update array cardOrderIds
      nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)
      nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
    }
    if(nextOverColumn) {
      // kiểm tra và thêm card đang kéo vào vị trí mới và cập nhập lại mảng
      nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)
      nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDragItemData)  
      nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)                  
    }

    return nextColumns
    })
  }

  const handleDragStart = (event) => {
    // console.log('handleDragStart:', event) 
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)

    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id))
    }
  }
  //trigger during drag
  const handleDragOver = (event) => {
    if(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return 
    // console.log('handleDragOver: ', event)
    const {active, over} = event
    if(!over) return 

    const { id: activeDraggingCardId, data: {current: activeDraggingCardData} } = active
    const { id: overCardId } = over
    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if(!activeColumn || !overColumn) return 
    if(activeColumn._id !== overColumn._id) {
      moveCardBetweenDiffColumns(
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeDraggingCardId,
        activeDragItemData
      )
    } 
  }
  const handleDragEnd = (event) => {

    const {active, over} = event

    if(!over) return 
    // console.log('handleDragEnd: ', event)
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      // console.log('Drag drop action')
      const { id: activeDraggingCardId, data: {current: activeDraggingCardData} } = active
      const { id: overCardId } = over
      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      if(!activeColumn || !overColumn) return 

      if(oldColumnWhenDraggingCard._id !== overColumn._id) {
        //dragdrop between 2 column
        moveCardBetweenDiffColumns(
          overColumn,
          overCardId,
          active,
          over,
          activeColumn,
          activeDraggingCardId,
          activeDragItemData
        )
      } else {
        //dragdrop in column
        const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(c => c._id === activeDragItemId) 
        const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId)
        // dùng arraymove cho card cùng column
        const dndOrderedCards = arrayMove(oldColumnWhenDraggingCard?.cards, oldCardIndex, newCardIndex)
        setOrderedColumns(prevColumns => {
          const nextColumns = cloneDeep(prevColumns)
          //tìm tới column đang thả
          const targetColumn = nextColumns.find(c => c._id === overColumn._id)
          targetColumn.cards = dndOrderedCards
          targetColumn.cardOrderIds = dndOrderedCards.map(card => card._id)
          return nextColumns
        })
      }
    }

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (active.id !== over.id) {
        const oldColumnIndex = orderedColumns.findIndex(c => c._id === active.id) //lấy vị trí từ tk active
        const newColumnIndex = orderedColumns.findIndex(c => c._id === over.id)

        const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)
        // xử lí gọi apis
        // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id )
        //cosnsole.log('dndOrderedColumns', dndOrderedColumns)
        //cosnsole.log('dndOrderedColumnsIds', dndOrderedColumnsIds)    
        setOrderedColumns(dndOrderedColumns)
      }
    }




    setActiveDragItemData(null)
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setOldColumnWhenDraggingCard(null)
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd} 

    > 
      <Box sx={{
        backgroundColor : (theme) => (theme.palette.mode === 'light' ? '#1976d2' : '#34495e'),
        width : '100%',
        height : (theme) => theme.trello.boardContentHeight,
        display : 'flex',
        p: '10px 0'
      }}>
        <ListColumns columns={orderedColumns}/>
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  );
}

export default BoardContent;
