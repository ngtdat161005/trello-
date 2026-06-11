
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from './Card/Card'


function ListCards() {
    return (
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
            ${theme.trello.columnHeaderHeight} -
            ${theme.trello.columnFooterHeight} 
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
            <Card />
            <Card temporaryHideMedia />
            <Card temporaryHideMedia />
            <Card temporaryHideMedia />
            <Card temporaryHideMedia />
            <Card temporaryHideMedia />
            <Card temporaryHideMedia />


        </Box>
    );
}

export default ListCards;