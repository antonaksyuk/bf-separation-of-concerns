import dom from '../dom.js';
import changeHandler from '../handlers/changeHandler.js';

const changeEvent = () => {
    dom.input.addEventListener('change', changeHandler);
};

export default changeEvent;
