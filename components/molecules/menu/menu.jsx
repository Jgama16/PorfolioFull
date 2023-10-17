
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import styles from "./menu.module.css"
import Image from 'next/image';

export const Menu_initial =() => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }} className={styles.caja}>
      <AppBar position="static" className={styles.container}>
        <Toolbar >
          <Image 
            src="/images/hacker.png"
            alt='hacker'
            width={50}
            height={50}
            
          />
            
          
          <Typography  component="div" sx={{ flexGrow: 1 }}>
            <h6 className={styles.nombre}>Juan Eduardo Gama Torres</h6>
          </Typography>
          <div className={styles.contenedor_menu}>
            <a href="/Part_one" className={styles.enlace}>Inicio</a>
            <a href="/" className={styles.enlace}>Sobre mi</a>
            <a href="/" className={styles.enlace}>Mis Proyectos </a>
            <a href="/" className={styles.enlace}>Estudios</a>
          </div>
          <Button className='cebecera'>
          <svg className={styles.cabecera_svg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}