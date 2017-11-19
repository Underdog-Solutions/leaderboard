import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyAQI1NWgGm8OhN7eDQSsilfSVpVh6iNnjQ',
  authDomain: 'koa-leaderboard.firebaseapp.com',
  databaseURL: 'https://koa-leaderboard.firebaseio.com',
  projectId: 'koa-leaderboard',
  storageBucket: '',
  messagingSenderId: '826393811885'
}

let app = Firebase.initializeApp(config)

export default app
