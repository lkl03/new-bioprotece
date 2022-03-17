import '../styles/main.scss'
import Layout from '../components/Generales/Layout'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useRouter } from "next/router";
import { useEffect } from 'react'

function MyApp({ Component, pageProps, router }) {
  const { pathname } = useRouter();

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, [pathname]);

  return (

    <>
      <Layout>
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-215784134-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)};
            gtag('js', new Date());
            gtag('config', 'UA-215784134-1');
          </script>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="fabricación y comercialización de implantes médicos." />
          <meta name="keywords" content="implantes médicos, protesis medicas, implantes dentales, implantes, ." />
          <meta name="theme-color" content="#151515" />
          <meta property="og:image" content="https://i.postimg.cc/x8sDDP53/preview.png" />
          <link rel="icon" type="image/png" href="./img/Logo vector2.png" />
          <title>Bioprotece SA</title>
        </Head>
        <main>
          <motion.div key={router.router} inital="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            },
          }}>
            <Component {...pageProps} />
          </motion.div>
        </main>
      </Layout>
    </>

  )
}

export default MyApp
