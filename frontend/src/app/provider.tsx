'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';

import "../styles/globals.css";
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
