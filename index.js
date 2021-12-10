// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const observer = {
  list: [],
  notify: function () {
    for (let l of this.list) {
      l.onEvent();
    }
  },
  addListener: function (listener) {
    this.list.push(listener);
  },
};

// A few listeners
const listener1 = {
  onEvent: () => {
    console.log('listener1: listening');
  },
};

const listener2 = {
  onEvent: () => {
    console.log('listener2: listening');
  },
};

const listener3 = {
  onEvent: () => {
    console.log('listener3: listening');
  },
};

// Adding listeners and printing to console when triggered
observer.addListener(listener1);
observer.addListener(listener2);
observer.addListener(listener3);

const intervalId = setInterval(() => {
  observer.notify();
  console.log('----------------------------');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
