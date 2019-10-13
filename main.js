import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

const messageDOM = document.getElementsByClassName('message')[0];

const onClickMessage = (count) => {
    messageDOM.innerHTML = `I am Clicked ${count} times`
};

fromEvent(messageDOM, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(onClickMessage);