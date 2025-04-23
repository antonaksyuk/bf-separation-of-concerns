import data from '../data.js';
import dom from '../dom.js';
import saveNum from '../components/saveNum.js';

const changeHandler = () => {
    const value = dom.input.value;
    data.numbers.push(Number(value));
    const numDom = saveNum(value);
    dom.output.append(numDom);
};

export default changeHandler;
