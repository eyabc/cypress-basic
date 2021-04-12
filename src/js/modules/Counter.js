const MAX_VAL = 12;
const MIN_VAL = 8;

export default function Counter({ $app }) {
  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const validateMinValue = (value) => MIN_VAL < value;
  const validateMaxValue = (value) => MAX_VAL > value;

  const process = (validateValue, el, valueOfAdd) => {
    const value = Number(el.value);
    if (validateValue(value)) {
      el.value = value + valueOfAdd;
    }
  }

  const addClickEvent = (el) => {
    document.querySelector('.minus-button')
            .addEventListener('click', () => {
              process(validateMinValue, el, -1);
            });

    document.querySelector('.plus-button')
            .addEventListener('click', () => {
              process(validateMaxValue, el, 1);
            });
  };

  const init = () => {
    render();
    addClickEvent(document.querySelector('.count-display'));
  };


  init();
}
