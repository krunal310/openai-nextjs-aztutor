import '@/styles/globals.css';
import appInsights, {
  trackUserMessage,
  trackBotResponse,
  trackBotError,
  trackUserRating,
  trackBotPerformance,
  trackUserDropOff
} from '../lib/ai';

function MyApp({ Component, pageProps }) {
  if (process.env.NODE_ENV === 'production') {
      appInsights.trackPageView();
  }
  return <Component {...pageProps} />;
}

export default MyApp;