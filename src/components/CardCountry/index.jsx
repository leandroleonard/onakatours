import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardCountry = ({ props }) => {
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate()

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                        <LocalAirportIcon />
                    </Avatar>
                }
                title={props.country}
                subheader="Ida e volta"
                action={
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                }
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className="p-0">
                    <div className="w100">
                        <img src={props.img} alt="" height={194} style={{ objectFit: 'cover', width: '100%' }} />
                    </div>
                    <div className="w10 p-3">
                        <Typography paragraph>
                            A partir de {props.price}
                        </Typography>
                        <Button variant="contained" size="small" onClick={() => {
                            navigate('/reservar-viagem')
                        }}>
                            Reservar
                        </Button>
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default CardCountry;