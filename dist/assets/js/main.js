$(document).ready(function(){

  // Set initial active toggle
  $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

  //Activate bootstrip tooltips
  $("[data-toggle='tooltip']").tooltip();

// Toggle Sidebar
  $('[data-toggle="sidebar"]').click(function(event) {
    event.preventDefault();
    $('.app').toggleClass('sidenav-toggled');
  });

});
function loadSubMenu() {
  // Activate sidebar treeview toggle
  $("[data-toggle='treeview']").click(function(event) {
    event.preventDefault();
    if(!$(this).parent().hasClass('is-expanded')) {
      $('.app-menu').find("[data-toggle='treeview']").parent().removeClass('is-expanded');
    }
    $(this).parent().toggleClass('is-expanded');
  });
}
