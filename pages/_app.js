import React , {useEffect,useState} from 'react';
import { Layout } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )};

export default MyApp
