import '@testing-library/jest-dom';
jest.mock('@/assets/images/aadhaar.png', () => 'test-aadhaar.png');
jest.mock('@/assets/images/ndl.png', () => 'test-ndl.png');

jest.mock('firebase/analytics', () => ({
  getAnalytics: jest.fn().mockReturnValue({}),
  isSupported: jest.fn().mockResolvedValue(false),
}));

jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn().mockReturnValue({}),
  doc: jest.fn(),
  getDoc: jest.fn().mockResolvedValue({ data: () => ({ totalVisitors: 0 }) }),
  setDoc: jest.fn().mockResolvedValue(undefined),
}));
import { TextEncoder, TextDecoder } from 'node:util';

// Polyfill TextEncoder and TextDecoder for Jest/jsdom
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder as unknown as typeof global.TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;
}
