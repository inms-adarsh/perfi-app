const prodConfig = {
    apiKey: "AIzaSyCPa27G9N7QmT0TDFcRh9tSo8oPs2oqwwE",
    authDomain: "transport-36109.firebaseapp.com",
    databaseURL: "https://transport-36109.firebaseio.com",
    projectId: "transport-36109",
    storageBucket: "transport-36109.appspot.com",
    messagingSenderId: "522231301405",
    appId: "1:522231301405:web:e986edab8c0d0af13f8df4"
};

const devConfig = {
    apiKey: "AIzaSyCPa27G9N7QmT0TDFcRh9tSo8oPs2oqwwE",
    authDomain: "transport-36109.firebaseapp.com",
    databaseURL: "https://transport-36109.firebaseio.com",
    projectId: "transport-36109",
    storageBucket: "transport-36109.appspot.com",
    messagingSenderId: "522231301405",
    appId: "1:522231301405:web:e986edab8c0d0af13f8df4"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
