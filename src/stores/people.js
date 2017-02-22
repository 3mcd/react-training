import data from '../data';
import EventEmitter from 'eventemitter3';

const store = new EventEmitter();

store.delete = function (obj) {
  // var obj = data.find(x => x.last === last);
  data.splice(data.indexOf(obj), 1);
  store.emit('update', data);
};

store.get = function () {
  return data;
};

export default store;