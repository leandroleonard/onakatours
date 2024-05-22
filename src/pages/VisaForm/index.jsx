import Forms from "../containers/Forms"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Skeleton } from "@mui/material";
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const VisaForm = (props = { loading }) => {
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
                            <LocalAirportIcon />
                        )
                    }
                </Avatar>
                <Typography component="h1" variant="h5">
                    Solicitar Visto
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
                        <Grid item xs={12} md={4}>
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
                        <Grid item xs={12} md={4}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="safe-options">Tipo de visto</InputLabel>
                                <Select
                                    labelId="safe-options-label"
                                    id="safe-options"
                                    label="Tipo de seguro"
                                >
                                    <MenuItem value="Visto de estudante">Visto de estudante</MenuItem>
                                    <MenuItem value="Visto de trabalho">Visto de trabalho</MenuItem>
                                    <MenuItem value="Visto diplomático">Visto diplomático</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="message"
                                name="message"
                                label="Mensagem"
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
        </Forms>
    );
}

export default VisaForm;