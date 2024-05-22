import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectModal() {
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState(0);
    const [title, setTitle] = React.useState('Países com isenção de vistos para angolanos');

    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
        setTitle(event.target.selectedOptions[0].label)
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>{title}</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Lista de Países</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel htmlFor="demo-dialog-native">Lista</InputLabel>
                            <Select
                                native
                                value={age}
                                onChange={handleChange}
                                input={<OutlinedInput label="Lista" id="demo-dialog-native" />}
                            >
                                <option value={0}>Países com isenção de vistos para angolanos</option>
                                <option value={1}>Países isentos de visto para estadia em Angola</option>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}