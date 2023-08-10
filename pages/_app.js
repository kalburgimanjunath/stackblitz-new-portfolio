import '../styles/globals.css';
import { Header } from '../components/';
function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto px-5 max-w-screen-lg">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
