import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    outline: none;
    border: none;
    background: none;
  }
  *::before,
  *::after {
    box-sizing: border-box;
   
  }
  
  /* Override measure restrictions */
  html,
  body,
  canvas,
  div,
  header,
  nav,
  main,
  input,
  label,
  svg,
  iframe,
  img,
  video,
  button,
  picture,
  source,
  section,
  footer {
    max-width: none;
  }
  
  ul, li, a { 
    color: inherit;
    text-decoration: none;
  }

  html, body, #app, #app> div, body>div{
    height: 100%
  }
  
  body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;;
    scroll-behavior: smooth;
    margin: 0 auto; 
  }
`;

const theme = Object.freeze({
    color: Object.freeze({
        light001: '#F8F9FA',
        light002: '#E9ECEF',
        light003: '#DEE2E6',
        teal: '#ADB5BD',
    }),
    /* ==========================================================
   Sizing
 ========================================================== */

    sz: Object.freeze({
        /* Small sizing ---------------------------------------- */

        s0: '0' as const,

        /** 2px (typical) */
        s05: '0.125rem' as const,

        /** 4px (typical) */
        s1: '0.25rem' as const,

        /** 8px (typical) */
        s2: '0.5rem' as const,

        /** 12px (typical) */
        s3: '0.75rem' as const,

        /** 16px (typical) */
        s4: '1rem' as const,

        /** 20px (typical) */
        s5: '1.25rem' as const,

        /** 24px (typical) */
        s6: '1.5rem' as const,

        /** 32px (typical) */
        s8: '2rem' as const,

        /** 40px (typical) */
        s10: '2.5rem' as const,

        /** 48px (typical) */
        s12: '3rem' as const,

        /** 56px (typical) */
        s14: '3.5rem' as const,

        /** 64px (typical) */
        s16: '4rem' as const,

        /** 80px (typical) */
        s20: '5rem' as const,

        /** 88px (typical) */
        s22: '5.5rem' as const,

        /** 96px (typical) */
        s24: '6rem' as const,

        /** 128px (typical) */
        s32: '8rem' as const,

        /** 160px (typical) */
        s40: '10rem' as const,

        /** 192px (typical) */
        s48: '12rem' as const,

        /** 256px (typical) */
        s64: '16rem' as const,

        /* Big sizing ------------------------------------------ */

        /** 320px (typical) */
        xs: '20rem' as const,

        /** 480px (typical) */
        sm: '30rem' as const,

        /** 560px (typical) */
        ms: '35rem' as const,

        /** 640px (typical) */
        md: '40rem' as const,

        /** 720px (typical) */
        ml: '45rem' as const,

        /** 800px (typical) */
        lg: '50rem' as const, //

        /** 960px (typical) */
        xl: '60rem' as const,

        /** 1280px (typical) */
        '2xl': '80rem' as const,

        /** 1280px (typical) */
        '3xl': '100rem' as const,
    }),

    /* ==========================================================
    Typography
  ========================================================== */

    ty: Object.freeze({
        /* Sizes ----------------------------------------------- */

        tiny10: '10px' as const, // 10px
        tiny11: '11px' as const, // 11px
        tiny12: '12px' as const, // 12px
        tiny14: '14px' as const, // 14px
        small: '15px' as const, // 15px
        standard: '16px' as const, // 16px
        medium: '18px' as const, // 18px
        large: '20px' as const, // 20px
        larger: '24px' as const, // 24px
        largerStill: '30px' as const, // 30px
        largest: '36px' as const, // 36px
        displaySmall: '48px' as const, // 48px
        display: '60px' as const, // 60px
        displayLarge: '80px' as const,

        /* Stacks ---------------------------------------------- */

        openSans: '"Open Sans", Sans-Serif',

        /* Weights --------------------------------------------- */

        regular: '400' as const,
        semiBold: '600' as const,
        bold: '700' as const,
    }),

    /* ==========================================================
Borders
========================================================== */

    bo: Object.freeze({
        extraSmall: '0.25rem' as const,
        small: '0.5rem' as const,
        medium: '1rem' as const,
        mediumLarge: '1.5rem' as const,
        large: '2rem' as const,
        round: '50%' as const,
    }),
    /* ==========================================================
Shadows
========================================================== */

    sh: Object.freeze({
        s1: '0 1px 3px hsla(0, 0%, 0%, 0.14), 0 1px 2px hsla(0, 0%, 0%, 0.24)' as const,
        s2: '0 3px 6px hsla(0, 0%, 0%, 0.15), 0 2px 4px hsla(0, 0%, 0%, 0.12)' as const,
        s3: '0 10px 20px hsla(0, 0%, 0%, 0.15), 0 3px 6px hsla(0, 0%, 0%, 0.1)' as const,
        s4: '0 15px 25px hsla(0, 0%, 0%, 0.15), 0 5px 10px hsla(0, 0%, 0%, 0.2)' as const,
        s5: '0 15px 35px hsla(0, 0%, 0%, 0.2)' as const,
    }),

    breakpoints: Object.freeze({
        sm: '768px',
        md: '1100px',
        lg: '1400px',
    }),

    media: Object.freeze({
        xs: '320px',
        sm: '420px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        xxl: '1440px',
    }),

    flex: {
        center: {
            spaceBetween: `
                display: flex;
                align-items: center;
                justify-content: space-between;`,
        },
    },

    spacer: ({ margin, padding }: { margin?: string; padding?: string }) => ({
        margin,
        padding,
    }),
});

export const StyleWrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            {children}
        </>
    </ThemeProvider>
);

export type Theme = typeof theme;
