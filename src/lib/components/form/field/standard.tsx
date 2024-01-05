import TextField from '@mui/material/TextField';
import { TextFieldProps } from "@mui/material";

export const TextFieldStandard: React.FC<TextFieldProps> = (props: TextFieldProps) =>{
    return <TextField {...props} variant='standard'/>
} 