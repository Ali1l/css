

document.writeln('<meta name="viewport" content="width=device-width, initial-scale=1">');
document.writeln('<iframe  id="iframe" name="myiframe" frameborder="0"  allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" ></iframe>');
document.writeln('');
document.writeln('<style>');
document.writeln('  iframe {');
document.writeln(' position: fixed;');
document.writeln(' right:0;');
document.writeln(' bottom:0;');
document.writeln(' top:0;');
document.writeln(' left:0;');
document.writeln(' height:100%;');
document.writeln(' width:100%;');
document.writeln(' display: flex;');
document.writeln(' align-items: center;');
document.writeln(' padding: 0px;');
document.writeln(' z-index: 1;');
document.writeln(' background:black;');
document.writeln(' border:0;');
document.writeln('  }');
document.writeln('  ');
document.writeln('   </style>');

var url = window.location.pathname;

var filename = url.substring(url.lastIndexOf('/')+1).replace(/.html/g,'');

$(document).ready(function(){
   $('#iframe').attr('src', 'https://p-television.blogspot.com/'+filename+'');
});


