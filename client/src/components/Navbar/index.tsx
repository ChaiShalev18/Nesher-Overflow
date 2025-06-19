import { AppBar, Toolbar, Typography, Box, Button, Paper } from '@mui/material';

import Logo from './Logo';

const Navbar = () => {
    const user = null; 

    const login = () => {
      // Implement logout logic here
      console.log('User logged out');
    };

     const register = () => {
      // Implement logout logic here
      console.log('User logged out');
    };
    
     const logout = () => {
      // Implement logout logic here
      console.log('User logged out');
    };
    

  return (
    <AppBar
        position="fixed"
        elevation={2}
        sx={{
            backgroundColor: '#EBE4DC',
            borderBottom: '4px solid #f8b14d',
            zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        >
      <Toolbar sx={{ justifyContent: 'space-between', px: 3, py: 1 }}>
        <Logo />

        <Box display="flex" alignItems="center" gap={2}>
          {!user ? (
            <>
              <Button
                onClick={login}
                variant="outlined"
                sx={{ color: '#a85f00', borderColor: '#f5a623', '&:hover': { borderColor: '#c97600' } }}
              >
                התחברות
              </Button>
              <Button
                onClick={register}
                variant="contained"
                sx={{ backgroundColor: '#f8b14d', color: '#4b2e05', '&:hover': { backgroundColor: '#f59f0a' } }}
              >
                הרשמה
              </Button>
            </>
          ) : (
            <>
              <Typography variant="body1" sx={{ color: '#4b2e05' }}>
                שלום, {user.username}
              </Typography>
              <Button
                onClick={logout}
                variant="outlined"
                sx={{ color: '#aa2a00', borderColor: '#ff7043', '&:hover': { borderColor: '#e65100' } }}
              >
                התנתקות
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;