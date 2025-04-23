import dom from '../dom.js';
import clickHandler from '../handlers/clickHandler.js';

const clickEvent = () => {
    dom.output.addEventListener('click', (e) => {
        clickHandler(e);
    });
};

export default clickEvent;
