import '../styles/globals.css';
import { Header, Footer } from '../components/';
function MyApp({ Component, pageProps }) {
  const email = 'manjunathkalburgi@gmail.com';
  return (
    <div className="">
      <div className="container mx-auto p-5 max-w-screen-lg">
        <Header />
        <Component {...pageProps} />
      </div>
      <Footer email={email} />
    </div>
  );
}

export default MyApp;
