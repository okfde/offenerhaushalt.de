var OSDE = OSDE ? OSDE : {};

OSDE.Table = function(elementID) {
  var self = this,
    $table = $(elementID),
    template = Handlebars.compile($('#table-template').html());

  self.render = function render(data, dimension) {
    $table.html(template(data));
    $table.find('.show-small').click(function() {
      $table.find('.small').slideDown('fast');
      $table.find('.hide-small').show();
      $table.find('.show-small').hide();
      return false;
    })
    $table.find('.hide-small').click(function() {
      $table.find('.small').slideUp('fast');
      $table.find('.show-small').show();
      $table.find('.hide-small').hide();
      return false;
    })
  }
};