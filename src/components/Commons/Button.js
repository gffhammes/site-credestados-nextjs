import React from 'react'
import { useRouter } from "next/router";
import { Button as MuiButton, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { useIsMobile } from '../../hooks/useIsMobile'

export const Button = (props) => {
  const {
    children,
    href,
    variant,
    startIcon,
    element,
    sx,
    fullWidth,
    target,
    ...rest
  } = props;

  const isMobile = useIsMobile();

  const buttonStyle = fullWidth || isMobile
    ? {
      ...sx,
      height: 'fit-content',
    } : {
      ...sx,
      width: 'fit-content',
      height: 'fit-content',
    }

  const ButtonComponent = () => {
    return (
      <MuiButton
        {...rest}
        variant={variant}
        sx={buttonStyle}
        element={element ? element : MuiLink}
        target={target ? target : '_self'}
        href={href}
        passHref
        startIcon={startIcon}
        fullWidth={isMobile}
      >
        {children}
      </MuiButton>
    )
  }

  return (
    href && target !== '_blank'
    ? <Link href={href} passHref>
        <a style={{ textDecoration: 'none' }}><ButtonComponent /></a>
      </Link>
    : <ButtonComponent />
  )
}
