const drag1 = document.querySelector('.drag-1');
const dragboxes = document.querySelectorAll('.dragbox');
drag1.addEventListener('dragstart', dragStart);
drag1.addEventListener('dragend', dragEnd);
for(const dragbox of dragboxes){
    dragbox.addEventListener('dragover', dragOver)
    dragbox.addEventListener('dragenter', dragEnter)
    dragbox.addEventListener('dragleave', dragLeave)
    dragbox.addEventListener('drop', dragDrop)
}
function dragStart(){
    this.className +=' save'
    setTimeout(() => this.className = 'invisible', 0)
}
function dragEnd(){
    this.className = ' drag-1'
}
function dragOver(e){
    e.preventDefault()
}
function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave(){
    this.className = 'dragbox'
}
function dragDrop(){
    this.className = 'dragbox'
    this.append(drag1)
}