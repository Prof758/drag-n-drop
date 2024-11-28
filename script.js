const box = document.querySelectorAll('.box');
const boxFill = document.querySelector('.box-fill');

box.forEach((box) => {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
});

boxFill.addEventListener('dragstart', dragStart);
boxFill.addEventListener('dragend', dragEnd);

function dragStart() {
  this.className += ' hold';
  setInterval(() => ((this.className = 'invisible'), 0));
}
function dragEnd() {
  this.className = 'boxFill';
}
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'box';
}

function dragDrop() {
  this.className = 'box';
  this.append(boxFill);
}
