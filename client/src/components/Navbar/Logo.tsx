import { Box, Typography } from '@mui/material';

import LogoImage from "../../assets/logo.png";

const Logo = () => 
  (
    <Box display="flex" alignItems="center" gap={1.5}>
        <img src={LogoImage} alt="Nesher Overflow Logo" style={{ height: 55 }} />
        <Typography
        variant="h6"
        sx={{ textDecoration: 'none', color: '#4b2e05', fontWeight: 'bold', fontSize: '1.25rem' }}
        >
        Nesher Overflow
        </Typography>
    </Box>
  );

export default Logo;