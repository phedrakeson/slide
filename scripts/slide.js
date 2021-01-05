export default class Slide {
  constructor(wrapper, slide) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    console.log('segurou')
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  onMove(event) {
    console.log('moveu')
  }

  onEnd(event) {
    console.log('largou')
    this.wrapper.removeEventListener('mousemove', this.onMove);
  }



  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();

    return this;
  }

}