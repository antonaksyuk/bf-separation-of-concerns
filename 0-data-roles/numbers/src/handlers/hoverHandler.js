import dom from '../dom.js';

const hoverHandler = (e) => {
    const value = e.target.innerText;
    dom.input.value = value;
};

export default hoverHandler;
