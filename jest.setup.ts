import '@testing-library/jest-dom';
jest.mock('@/assets/images/aadhaar.png', () => 'test-aadhaar.png');
jest.mock('@/assets/images/ndl.png', () => 'test-ndl.png');

import { TextEncoder, TextDecoder } from 'node:util';

// Polyfill TextEncoder and TextDecoder for Jest/jsdom
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder as unknown as typeof global.TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;
}