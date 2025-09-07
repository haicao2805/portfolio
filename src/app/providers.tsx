'use client';

import React from 'react';

import { ThemeProvider } from 'next-themes';
import { SnackbarProvider } from 'notistack';
import { AppConst } from '@/common';

export const Providers: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SnackbarProvider
        dense
        disableWindowBlurListener
        maxSnack={AppConst.NOTISTACK_MAX_SNACKBAR}
        anchorOrigin={AppConst.NOTISTACK_ANCHOR_ORIGIN}
        autoHideDuration={AppConst.NOTISTACK_AUTO_HIDE_DURATION}>
        {children}
      </SnackbarProvider>
    </ThemeProvider>
  );
};
