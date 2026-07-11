import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { ThemeProvider, Typography } from "@mui/material";
import theme from "@/general/theme";

export default function App({ Component, pageProps : { session, ...pageProps } }: AppProps) {
  return( 
       <SessionProvider session={session}>
          
         <Provider store={store}>
               <ThemeProvider theme={theme}>
                  <Component {...pageProps} />
               </ThemeProvider>
         </Provider>

       </SessionProvider>
       ) ;
}
