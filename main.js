const button = document.querySelector('#finish-button')
const progress = document.querySelectorAll('.progress__bar')

button.addEventListener('click', () => {
  progress.forEach(p => {
    let valueNow = Number(p.getAttribute('aria-valuenow'));
    console.log(valueNow);
    const interval = setInterval(() => {
      p.style.width = `${valueNow}%`;
      p.innerText = `${valueNow}%`;
      if (valueNow > 99) {
        clearInterval(interval);
      } else {
        valueNow += 10;
      }
    }, 90);
  });
});