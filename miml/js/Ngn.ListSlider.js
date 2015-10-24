/**
 * Состоит только из 2-х кадров
 */
Ngn.ListSlider = new Class({
  Implements: [Options],

  options: {
    titleSelector: '.header .title', // CSS селектор для заголовка
    listSelector: '.list', // CSS селектор для списка
    listItemSelector: '.item', // CSS селектор для элемента списка
    itemTitleSelector: '.title', // CSS селектор для заголовка элемента списка
    contentSelectors: ['.text'] // {Array} CSS селекторы для элементов, которые будут отображаться во втором фрейме
  },

  firstFrameTitle: '',
  titles: [],
  contentElements: [],

  initialize: function(framesSlider, options) {
    this.setOptions(options);
    var eTitle = document.getElement(this.options.titleSelector);
    this.firstFrameTitle = eTitle.get('html');
    // todo: make on abstract css. why? and move to prev (02-framesSlider) lesson
    // init back btn
    this.backBtn = new Element('div', {
      'class': 'hBackBtn'
    }).inject(document.getElement('.header')).addEvent('click', function() {
        framesSlider.prev(function() {
          eTitle.set('html', this.firstFrameTitle);
          this.backBtn.setStyle('display', 'none');
        }.bind(this));
      }.bind(this));
    this.backBtn.setStyle('display', 'none');
    // ..
    if (framesSlider.frames.length != 1) throw new Error('wrong init frames count: ' + framesSlider.frames.length);
    this.listItems = framesSlider.frames[0].getElements(this.options.listItemSelector);
    this.listItems.each(function(eItem, i) {
      var wrapper = new Element('div');
      for (var j = 0; j < this.options.contentSelectors.length; j++) {
        // Вырезаем все элементы из айтемов первого фрейма и вставляем во врапер
        this.listItems[i].getElement(this.options.contentSelectors[j]).inject(wrapper);
      }
      this.titles[i] = eItem.getElement(this.options.itemTitleSelector).get('html');
      this.contentElements[i] = wrapper; // массив с элементами для второго слайда, где i - это номер айтема
      // add item click action
      this.listItems[i].addEvent('click', function() {
        //this.listItems[i].addClass('clicked');
        framesSlider.currentItemId = this.listItems[i].get('data-id');
        eTitle.set('html', this.titles[i]);
        this.backBtn.setStyle('display', 'block');
        framesSlider.frames[1].set('html', '');
        this.contentElements[i].inject(framesSlider.frames[1]);
        framesSlider.next();
      }.bind(this));
    }.bind(this));
    framesSlider.pushFrame('');
  }

});
