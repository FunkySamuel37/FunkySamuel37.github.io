var flag = false;
$(".app-footer a").each(function(){
  var path = document.location.pathname.split('/');
  var page = path[path.length - 1];
  var href = $(this).attr("href");
  if (href === page) {
    $(this).addClass("active");
    flag = true;
    return false;
  }
});

$(".sidebar a").each(function(){
  var path = document.location.pathname.split('/');
  var page = path[path.length - 1];
  var href = $(this).attr("href");
  if (href === page) {
    $(this).addClass("active");
    flag = true;
    return false;
  }
});

if (!flag) {
  $(".sidebar a").first().addClass("active");
}
