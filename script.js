const boxes = document.querySelectorAll('.box');
const boxFill = document.querySelector('.box-fill');

// Add drag events to all boxes
boxes.forEach((box) => {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
});

// Add drag events to the draggable item
boxFill.addEventListener('dragstart', dragStart);
boxFill.addEventListener('dragend', dragEnd);

function dragStart() {
  this.classList.add('box-hold'); // Add holding class for visual feedback
  setTimeout(() => this.classList.add('invisible'), 0); // Make invisible after drag starts
}

function dragEnd() {
  this.className = 'box-fill'; // Reset to original class
}

function dragOver(e) {
  e.preventDefault(); // Necessary to allow dropping
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered'); // Highlight the box being hovered
}

function dragLeave() {
  this.classList.remove('hovered'); // Remove hover effect
}

function dragDrop() {
  this.classList.remove('hovered'); // Remove hover effect
  this.appendChild(boxFill); // Append the draggable item to the new box
}
