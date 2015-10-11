$(document).ready(function(){
  $('a.twitter-share-to-win').click(sharePage);
  $('a.facebook-share-to-win').click(sharePage);
  $('a.email-share-to-win').click(emailPage);
});

function sharePage() {
  var link = $(this).data('href');
  window.open(link, "popupWindow", "width=600,height=600,scrollbars=yes");
}

function emailPage() {
  var link = $(this).attr('href');
  window.open(link, "popupWindow", "width=600,height=600,scrollbars=yes");
}