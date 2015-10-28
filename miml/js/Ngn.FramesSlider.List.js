Ngn.FramesSlider.List = new Class({
  Extends: Ngn.FramesSlider,
  currentItemId: 0,
  getScrollKey: function() {
    if (this.frameN == 2 && !this.currentItemId) throw new Error('Set data-id attribute to item elements');
    return this.frameN + (this.currentItemId || '');
  }
});
