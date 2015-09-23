$(document).ready(function() {
  $('#btnThin').click(function(){
    $('#specimen-test p').css({
      'font-weight': '100',
      'font-style': 'normal',
    });
  });
  $('#btnLight').click(function(){
    $('#specimen-test p').css({
      'font-weight': '300',
      'font-style': 'normal',
    });
  });
  $('#btnRegular').click(function(){
    $('#specimen-test p').css({
      'font-weight': '400',
      'font-style': 'normal',
    });
  });
  $('#btnItalic').click(function(){
    $('#specimen-test p').css({
      'font-weight': '400',
      'font-style': 'italic',
    });
  });
  $('#btnMedium').click(function(){
    $('#specimen-test p').css({
      'font-weight': '500',
      'font-style': 'normal',
    });
  });
  $('#btnMediumItalic').click(function(){
    $('#specimen-test p').css({
      'font-weight': '500',
      'font-style': 'italic',
    });
  });
  $('#btnBold').click(function(){
    $('#specimen-test p').css({
      'font-weight': '700',
      'font-style': 'normal',
      });
  });
  $('#btnBoldItalic').click(function(){
    $('#specimen-test p').css({
      'font-weight': '700',
      'font-style': 'italic',
    });
  });
});
