// lib/ai.js

import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: process.env.NEXT_PUBLIC_APP_INSIGHTS_KEY,
        enableAutoRouteTracking: true
    }
});
appInsights.loadAppInsights();

export function trackUserMessage() {
    appInsights.trackEvent({ name: "UserMessageSent" });
}

export function trackBotResponse(responseType) {
    appInsights.trackEvent({ name: "BotResponse", properties: { responseType }});
}

export function trackBotError(error) {
    appInsights.trackException({ exception: new Error(error) });
}

export function trackUserRating(rating) {
    appInsights.trackEvent({ name: "UserSatisfactionRating", properties: { rating }});
}

export function trackBotPerformance(startTime, endTime) {
    appInsights.trackMetric({ name: "BotResponseTime", average: endTime - startTime });
}

export function trackUserDropOff(step) {
    appInsights.trackEvent({ name: "UserDropOff", properties: { step }});
}

export default appInsights;
