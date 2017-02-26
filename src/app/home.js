/**
 * Created by matt on 2/19/17.
 */
import Footer from './footer';
import { pageInit } from './index';
import 'styles/globals.scss';
import 'styles/home.css';

const Home = () => `
  <section class="home">
    <h1 class="header">Home</h1>
    <p class="text">Some dummy texzt here</p>
    ${Footer()}
  </section>
`;

pageInit(Home);