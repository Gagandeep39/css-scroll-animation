const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

// Manually call it first itme to show items on screen
checkboxes();

function checkboxes() {
  // Height where animation is triggered
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    // Refer docs: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    // Gives an elements position and other details
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop, triggerBottom, box.classList);
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
