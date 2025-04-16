import React from 'react'
import { Box, IconButton, useTheme } from "@mui/material"
import { useContext } from 'react'
import { colorModeContext, tokens } from '../../themes'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeoutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsoutlinedIcom from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colormode = useContext(colorModeContext)
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*search bar*/}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/*Icons*/}
      <Box display="flex" justifyContent="space-between" p={2}>
        <IconButton onClick={colormode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (<DarkModeoutlinedIcon />) : (<LightModeOutlinedIcon />)}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton >
          <SettingsoutlinedIcom />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Navbar