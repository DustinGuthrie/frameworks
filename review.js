$(document).ready(function () {
    page.init();

});


var page = {
  init: function () {
    page.initEvents();
    page.initStyling();
  },
  initStyling: function () {},
    page.loadArticles(blogData);
    page.loadTemplate($('aside'), {}, $('#asideTmpl'))

  initEvents: function (){
  },
  loadTemplate: function ($el, data, template) {
    var template = _.template(tmpl);
    var html = template(data);
    $el.append(html);
  },
  loadArticles: function (arr) {
    _.each(arr, function (curEl, idx, arr) {
      currEl.id = idx;
      page.loadTemplate($('.blog'), currEl, $('#articleTmpl').html());
    });
  }


},
