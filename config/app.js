import { ENV } from './env';

export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const isClient = typeof window !== 'undefined';
// Else should represent live site
export const apiEndpoint = isDebug ? 'http://localhost:3000' : 'http://localhost:3000';
// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID = null;
