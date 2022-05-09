import '@deckdeckgo/charts';
import '@deckdeckgo/core';
import '@deckdeckgo/drag-resize-rotate';
import '@deckdeckgo/elements';
import '@deckdeckgo/highlight-code';
import '@deckdeckgo/laser-pointer';
import '@deckdeckgo/lazy-img';
import '@deckdeckgo/markdown';
import '@deckdeckgo/math';
import '@deckdeckgo/remote';
import '@deckdeckgo/slide-aspect-ratio';
import '@deckdeckgo/slide-author';
import '@deckdeckgo/slide-chart';
import '@deckdeckgo/slide-content';
import '@deckdeckgo/slide-gif';
import '@deckdeckgo/slide-playground';
import '@deckdeckgo/slide-poll';
import '@deckdeckgo/slide-qrcode';
import '@deckdeckgo/slide-split';
import '@deckdeckgo/slide-title';
import '@deckdeckgo/slide-youtube';
import '@deckdeckgo/social-img';
import '@deckdeckgo/studio';
import '@deckdeckgo/word-cloud';
import 'deckdeckgo-remote';
import '@ionic/core';
import {setupConfig} from '@ionic/core';
import {setupConfig as setupDeckGoConfig} from '../app/config/environment-config';

setupConfig({
  inputBlurring: false
});

setupDeckGoConfig({
  app: {
    mock: false,
    features: ['deck']
  },
  deckdeckgo: {
    website: 'https://deckdeckgo.com',
    globalAssetsUrl: 'https://app.deckdeckgo.com/assets',
    pollUrl: 'https://app.deckdeckgo.com/poll',
    apiUrl: '<@API_URL@>',
    socketUrl: '<@SOCKET_URL@>',
    terms: 'https://deckdeckgo.com/terms',
    privacy: 'https://deckdeckgo.com/privacy'
  },
  firebase: {
    apiKey: '<@FIREBASE_API_KEY@>',
    authDomain: '<@FIREBASE_AUTH_DOMAIN@>',
    databaseURL: '<@FIREBASE_DATABASE_URL@>',
    projectId: '<@FIREBASE_PROJECT_ID@>',
    storageBucket: '<@FIREBASE_STORAGE_BUCKET@>',
    messagingSenderId: '<@FIREBASE_MESSAGING_SENDER_ID@>',
    storageUrl: '<@FIREBASE_STORAGE_URL@>',
    functionsUrl: '<@FIREBASE_FUNCTIONS_URL@>',
    appId: '<@FIREBASE_APP_ID@>'
  },
  tenor: {
    url: 'https://api.tenor.com/v1/',
    key: '<@TENOR_KEY@>'
  },
  unsplash: {
    url: '<@UNSPLASH_URL@>',
    cdn: 'https://unpkg.com/@deckdeckgo/api@latest/lib/index.js'
  },
  google: {
    fontsUrl: 'https://fonts.googleapis.com/css?display=swap&family='
  },
  cloud: {
    api: {
      cdn: 'https://unpkg.com/@deckdeckgo/firebase@4.1.3/dist/deckdeckgo-firebase/index.esm.js'
    },
    signIn: {
      cdn: 'https://unpkg.com/@deckdeckgo/firebase@4.1.3/dist/deckdeckgo-firebase/deckdeckgo-firebase.esm.js',
      tag: 'deckgo-firebase-signin'
    }
  },
  jszip: {
    cdn: 'https://cdn.jsdelivr.net/npm/jszip@3.7.1/dist/jszip.min.js'
  }
});

import {deleteAllLocal, exportSlides, importData} from "../app/export";


// @ts-ignore
window.exportSlides = exportSlides;
// @ts-ignore
window.importSlides = importData;
// @ts-ignore
window.deleteAllLocal = deleteAllLocal;
