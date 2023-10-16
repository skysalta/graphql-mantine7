import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ClientOnly from '../components/ClientOnly';
import Welcome from '../components/Welcome/Welcome';

export default function ClientSide() {
  return (
    <ClientOnly>
      <Welcome></Welcome>
    </ClientOnly>
  );
}
