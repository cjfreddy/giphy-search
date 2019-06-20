// giphy key
const giphyKey = '1DGjN4EomBXdhiR6Ycn8BiNEjsw1vJ0x';

function gifSearch() {
  // this clears the div container for multiple searches
  $('.gifsDisplay').empty();

  var searchKeyword = $("#searchText").val();

  // jquery giphy api call
  var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchKeyword}&api_key=${giphyKey}&limit=10`);
  xhr.done(function(answer) { console.log("GIFs found!", answer); 

  var gifs = answer.data

  // appends gifs to div container
  for (i in gifs) {
    $('.gifsDisplay').append("<img src='"+gifs[i].images.original.url+"''/>")
  }
  });
}