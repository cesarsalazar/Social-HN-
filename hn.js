$(function(){

  function manipulateNewsFeed(data) {
    var rows = '';
    $.each(data.items, function(index, item){
      var row = '<p><a href="'+item.url+'">'+item.title+'</a></p><p>'+item.postedBy+'</p>';
      rows += row;
    });
    $('table').before(rows); 
  };
  
  chrome.extension.sendRequest({'action' : 'fetchNews'}, manipulateNewsFeed);

})