"use client"
import * as React from 'react';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import Image from 'next/image';
import styles from './lenguaje.module.css'
import { Typography } from '@mui/material';
import LinearIndeterminate from '../../atoms/Burguer';
export const Lenguaje = () => {
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
    <Typography className={styles.text_lenguaje}>
        Estos son las herramientas que manejo
    </Typography>
    <secction className={styles.container_lenguaje}>
        <div className={styles.cards}>
        <Button type="button" onClick={handleClick} className={styles.but}>
            
            <Image
            className={styles.lenguaje}
            src="/images/html-5.png"
            alt='css'
            width={100}
            height={100}
            />
        </Button>
        
        </div>

        <div className={styles.cards}>
            <Button type="button" onClick={handleClick} className={styles.but}>
            
            <Image
            className={styles.lenguaje}
            src="/images/csse.png"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
        <div className={styles.cards}>
            <Button type="button" onClick={handleClick} className={styles.but}>
            
            <Image
            className={styles.lenguaje}
            src="/images/js.png"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
        <div className={styles.cards}>
            <Button type="button" onClick={handleClick} className={styles.but}>
            
            <Image
            className={styles.lenguaje}
            src="/images/react-2.svg"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
        <div className={styles.cards}>
            <Button type="button" onClick={handleClick} className={styles.but}>
            
            <Image
            className={styles.lenguaje}
            src="/images/next-js.svg"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
        <div className={styles.cards}>
            <Button  type="button" onClick={handleClick} className={styles.but}>
            
            <Image
            className={styles.lenguaje}
            src="/images/bootstrap-5-1.svg"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
        <div className={styles.cards}>
            <Button type="button" onClick={handleClick} className={styles.but}>
            
            <Image
            className={styles.lenguaje}
            src="/images/java-14.svg"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
        <div className={styles.cards}>
            <Button type="button" onClick={handleClick} className={styles.but}>
            
            <Image
            className={styles.lenguaje}
            src="/images/nodejs-icon.svg"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
        <div className={styles.cards}>
            <Button type="button" onClick={handleClick} className={styles.but}>
            
            <Image
            className={styles.lenguaje}
            src="/images/github.png"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
        <div className={styles.cards}>
            <Button type="button" onClick={handleClick} className={styles.but}>
            
            <Image
            className={styles.lenguaje}
            src="/images/material-ui-1.svg"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
        <div className={styles.cards}>
            <Button type="button" onClick={handleClick} className={styles.but}> 
            
            <Image
            className={styles.lenguaje}
            src="/images/python-5.svg"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
        <div className={styles.cards}>
            <Button type="button" onClick={handleClick} className={styles.but}> 
            
            <Image
            className={styles.lenguaje}
            src="/images/django.svg"
            alt='css'
            width={100}
            height={100}
            />
            </Button>
            
        </div>
    </secction>
        <LinearIndeterminate/>
    </>
  );
}



const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};



const Button = styled('button')`
  

  &:hover {
    background-color: ${blue[700]};
  }

  &:active {
    background-color: ${blue[700]};
  }

  &:focus-visible {
    box-shadow: 0 4px 20px 0 rgb(61 71 82 / 0.1), 0 0 0 5px rgb(0 127 255 / 0.5);
    outline: none;
  }
`;