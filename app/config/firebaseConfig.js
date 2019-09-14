const prodConfig = {
    apiKey           : "YOUR_API_KEY",
    authDomain       : "your-app.firebaseapp.com",
    databaseURL      : "https://your-app.firebaseio.com",
    projectId        : "your-app",
    storageBucket    : "your-app.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
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
