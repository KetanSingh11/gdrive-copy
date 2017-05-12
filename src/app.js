import App from './components/App';
import Start from './components/start';
import FAQ from './components/faq';
import About from './components/about';

const app = new App({
  target: document.querySelector('#app'),
  data: {
    views: [
      {
        id: 'about',
        title: 'About',
        component: About
      },
      {
        id: 'start',
        title: 'Start',
        component: Start
      },
      {
        id: 'resume',
        title: 'Resume',
        component: FAQ
      },
      {
        id: 'pause',
        title: 'Pause',
        component: About
      },
      {
        id: 'faq',
        title: 'FAQ',
        component: FAQ
      }
    ],
    // must match the id of one of the views
    active: 'start'
  },
  components: {
      Start,
      About,
      FAQ
  }
});
