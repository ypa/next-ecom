import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const message: string = 'Hello World!';

  return <div>{message}</div>;
}
