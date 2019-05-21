import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:4000');

//subscribeToTimer is for the example:
//https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34s
function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

//TODO: Write way to call database every minute within namespace

export { subscribeToTimer };