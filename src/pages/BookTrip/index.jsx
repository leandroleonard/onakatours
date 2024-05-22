import Forms from "../containers/Forms"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LuggageIcon from '@mui/icons-material/Luggage';
import { Skeleton } from "@mui/material";
import FloatButtom from "../../components/FloatBottom";


const BookTrip = (props = { loading }) => {
    const { loading = false } = props;

    return (
        <Forms>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    {
                        loading ? (
                            <Skeleton animation="wave" variant="circular" width={40} height={40} />
                        ) : (
                            <LuggageIcon />
                        )
                    }
                </Avatar>
                <Typography component="h1" variant="h5">
                    Formulário de Reserva
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                margin="normal"
                                required
                                id="name"
                                label="Nome Completo"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                margin="normal"
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                margin="normal"
                                required
                                id="phone"
                                label="Telefone"
                                name="phone"
                                fullWidth
                                type="tel"
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField
                                margin="normal"
                                required
                                id="count_person"
                                label="Pessoas"
                                name="count_person"
                                fullWidth
                                type="number"
                                min={1}
                            />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <TextField
                                margin="normal"
                                required
                                id="destination"
                                label="Destino"
                                name="destination"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                margin="normal"
                                required
                                id="departure-date"
                                label="Data de partida"
                                name="departure-date"
                                fullWidth
                                type="date"
                                value=""
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                margin="normal"
                                required
                                id="arrived-date"
                                label="Data de volta"
                                name="arrived-date"
                                fullWidth
                                type="date"
                                value=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="obs"
                                label="Observações"
                                placeholder="Informe aqui os detalhes que gostarias que soubessemos"
                                multiline
                                rows={4}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Enviar
                    </Button>
                </Box>
            </Box>

            <FloatButtom />
        </Forms>
    );
}

export default BookTrip;