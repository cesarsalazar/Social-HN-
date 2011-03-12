  function createList(data){
    var items = data
    $(function(){
      manipulateNewsFeed(items);
    });
  }

  function manipulateNewsFeed(data) {
    var rows = '';
    $.each(data.items, function(index, item){
      item.domain = jQuery.url.setUrl(item.url).attr("host");
      item.number = index+1;  
      var row =   '<tr>'
              +     '<td align=right valign=top class="title" style="color:#ff6600;">'+item.number+'.</td>'
              +     '<td>'
              +       '<center>'
              +         '<a id=up_2314532 href="item?id='+item.id+'" target="blank">'
              +           '<img src="http://ycombinator.com/images/grayarrow.gif" border=0 vspace=3 hspace=2>'
              +         '</a>'
              +         '<span id=down_2314532></span>'
              +       '</center>'
              +     '</td>'
              +     '<td class="title">'
              +       '<a href="'+item.url+'">'+item.title+'</a>'
              +       '<span class="comhead"> ('+item.domain+') </span>'
              +     '</td>'
              +   '</tr>'
              +   '<tr>'
              +     '<td colspan=2></td>'
              +     '<td class="subtext">'
              +       '<span id=score_2314532>'+item.points+' points</span> by <a href="user?id='+item.postedBy+'">'+item.postedBy+'</a> '+item.postedAgo+'  | <a href="item?id='+item.id+'">'+item.commentCount+' comments</a>'
              +     '</td>'
              +   '</tr>'
              +   '<tr style="height:5px"></tr>';
      
      rows += row;
          
    });
    $('tbody').eq(2).prepend(rows); 
  };
  
  chrome.extension.sendRequest({'action' : 'fetchNews'}, createList);
