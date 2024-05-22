import Forms from "../containers/Forms"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Skeleton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';


const ContactForm = (props = { loading }) => {
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
                            <EmailIcon />
                        )
                    }
                </Avatar>
                <Typography component="h1" variant="h5">
                    Formulário de Contacto
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
                        <Grid item xs={12} md={6}>
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
                        <Grid item xs={12} md={6}>
                            <TextField
                                margin="normal"
                                required
                                id="subject"
                                label="Assunto"
                                name="subject"
                                fullWidth
                                placeholder="Reserva de viagem/Informaçōes sobre passagem"
                            />
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

export default ContactForm;