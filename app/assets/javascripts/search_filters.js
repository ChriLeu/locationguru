
var open = true;
var lessFilters = $('#filter').data('less-filters');
var moreFilters = $('#filter').data('more-filters');

$('#filter').click(function () {
  if (open) {
    $('#filter').html(lessFilters + '<i class="fas fa-chevron-up"></i>');
  } else {
    $('#filter').html(moreFilters + '<i class="fas fa-chevron-down"></i>');
  }
  open = !open;
});
