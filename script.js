//Adding item to Todo list
$(function() {
    $( ".sortable" ).sortable({
      connectWith: ".connectedSortable",
      receive: function( event, ui ) {
        $(this).css({"background-color":"blue"});
      }
    }).disableSelection();
    $('.add-button').click(function() {
        var txtNewItem = $('#new_text').val();
        $(this).closest('div.container').find('ul').append('<li class="card">'+txtNewItem+'</li>');
    });    
  });

  //for progress
  $(function() {
    $( ".sortable" ).sortable({
      connectWith: ".connectedSortable",
      receive: function( event, ui ) {
        $(this).css({"background-color":"blue"});
      }
    }).disableSelection();
    $('.Progress-add-button').click(function() {
        var ProgressItem = $('#Progress_text').val();
        $(this).closest('div.container').find('ul').append('<li class="card">'+ProgressItem+'</li>');
    });    
  });

  //for add verified itemList
  $(function() {
    $( ".sortable" ).sortable({
      connectWith: ".connectedSortable",
      receive: function( event, ui ) {
        $(this).css({"background-color":"blue"});
      }
    }).disableSelection();
    $('.Verified-add-button').click(function() {
        var Item = $('#verified_text').val();
        $(this).closest('div.container').find('ul').append('<li class="card">'+Item+'</li>');
    });    
  });

  //for Add completed work
  $(function() {
    $( ".sortable" ).sortable({
      connectWith: ".connectedSortable",
      receive: function( event, ui ) {
        $(this).css({"background-color":"blue"});
      }
    }).disableSelection();
    $('.Done-add-button').click(function() {
        var Item = $('#Done_text').val();
        $(this).closest('div.container').find('ul').append('<li class="card">'+Item+'</li>');
    });    
  });