import 'tailwindcss/tailwind.css';
import "../styles/globals.css"

import Router from "next/router";
import nProgress from "nprogress";
import "../styles/nprogress.css";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"

import { Provider } from "react-redux";
// import AuthProvider from "../store/authProvider";
import store from "../store";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (<>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <AuthProvider> */}
        <Component {...pageProps} />
        {/* </AuthProvider> */}
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  </>)

}

export default MyApp
