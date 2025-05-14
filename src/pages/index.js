import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import HomePage from './home';


export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}