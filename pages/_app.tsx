import { useRouter } from "next/router";
import * as gtag from "../app/lib/gtags";
import 'semantic-ui-css/semantic.min.css'
import '../app/styles/app.scss'
import interceptRequests from "../app/api/ApiInterceptor"

// Next
import { AppProps } from "next/app";
import { useEffect } from "react";

// Redux
import { Provider } from 'react-redux'
import store from './../app/context/store'

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    interceptRequests()

    useEffect(() => {
        interceptRequests()
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return <Provider store={store}><Component {...pageProps} /></Provider>;
};

export default App;
