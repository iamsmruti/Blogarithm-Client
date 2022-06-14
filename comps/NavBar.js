import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  InputBase,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import styles from '../styles/Home.module.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FeedIcon from '@mui/icons-material/Feed';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ScienceIcon from '@mui/icons-material/Science';
import TerminalIcon from '@mui/icons-material/Terminal';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import Link from 'next/link'

import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const NavBar = () => {
  const router = useRouter()
  const [auth, setAuth] = useState(true);
  const [drawerState, setDrawerState] = useState(false);

  const handleLogout = () => {
    setAuth = false
  }

  const handleDrawer = (state) => () => {
    setDrawerState(state);
  };

  const drawer = (anchor) => (
    <>
      <Box
        sx={{ width: 250, bgcolor: 'black', height: '100%', color: 'white' }}
        role="presentation"
        onClick={handleDrawer(anchor, false)}
        onKeyDown={handleDrawer(anchor, false)}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            pt: 2,
          }}
        >
          {!auth && <Button sx={{mb: 2}} variant="contained">Login</Button>}
          {auth &&
            <IconButton sx={{ ml: 2 }}>
              <Avatar sx={{ width: 70, height: 70 }}>H</Avatar>
            </IconButton>
          }
        </Box>
        {auth && <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push('/user/profile')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={'Profile'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon sx={{ color: 'white' }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={'Logout'} />
            </ListItemButton>
          </ListItem>
        </List>}

        <Divider sx={{ bgcolor: 'lightgray' }} />

        <Box sx={{
            mt: 2,
            pr: 1
        }}>
            <Search width={10}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </Box>

        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push('/blog/news')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary={'News'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push('/blog/science')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <ScienceIcon />
              </ListItemIcon>
              <ListItemText primary={'Science'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push('/blog/programming')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <TerminalIcon />
              </ListItemIcon>
              <ListItemText primary={'Programming'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push('/blog/gadgets')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <DevicesOtherIcon />
              </ListItemIcon>
              <ListItemText primary={'Gadgets'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push('/blog/tutorials')}>
              <ListItemIcon sx={{ color: 'white' }}>
                <LightbulbIcon />
              </ListItemIcon>
              <ListItemText primary={'Tutorials'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      {/* <Box
        sx={{
          mt: 'auto',
          bgcolor: 'black',
          display: 'flex',
          justifyContent: 'center',
          pb: 4,
        }}
      >
        <Button variant="outlined" sx={{ textTransform: 'capitalize' }}>
          admin dashboard
        </Button>
      </Box> */}
    </>
  );

  return (
    <>
      <AppBar sx={{ bgcolor: 'black' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href="/">
            <a>
              <Typography className={styles.linearWipe}>Blogarithm</Typography>
            </a>
          </Link>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
                lg: 'flex',
                xl: 'flex',
              },
            }}
          >
            <Box>
              <Button onClick={() => router.push('/blog/news')} sx={{ textTransform: 'capitalize', color: 'white' }}>
                News
              </Button>
              <Button onClick={() => router.push('/blog/science')} sx={{ textTransform: 'capitalize', color: 'white' }}>
                Science
              </Button>
              <Button onClick={() => router.push('/blog/programming')} sx={{ textTransform: 'capitalize', color: 'white' }}>
                Programming
              </Button>
              <Button onClick={() => router.push('/blog/gadgets')} sx={{ textTransform: 'capitalize', color: 'white' }}>
                Gadgets
              </Button>
              <Button onClick={() => router.push('/blog/tutorials')} sx={{ textTransform: 'capitalize', color: 'white' }}>
                Tutorials
              </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Search width={20}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              {!auth && <Button sx={{ml: 2}} variant="contained">Login</Button>}
              {auth && (
                <IconButton sx={{ ml: 2 }}>
                  <Avatar>H</Avatar>
                </IconButton>
              )}
            </Box>
          </Box>

          <Box sx={{ display: { md: 'none', lg: 'none', xl: 'none' } }}>
            <IconButton onClick={handleDrawer(true)}>
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'right'} open={drawerState} onClose={handleDrawer(false)}>
        {drawer('right')}
      </Drawer>
    </>
  );
};

export default NavBar;
