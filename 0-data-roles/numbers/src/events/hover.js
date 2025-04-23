import dom from '../dom.js';
import hoverHandler from '../handlers/hoverHandler.js';

const hoverEvent = () => {
    dom.output.addEventListener('mouseover', (e) => {
        hoverHandler(e);
    });
};

export default hoverEvent;
