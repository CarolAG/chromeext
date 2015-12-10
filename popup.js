

// function getStackSearch(searchTerm, callback, errorCallback) {
//   var searchUrl = 'https://api.stackexchange.com/docs/search'+ '/2.2/search?order=desc&sort=activity&intitle=' + searchTerm + '&site=stackoverflow';
//   $.get
// }
// $("div").click(function(){
//     alert("The paragraph was clicked.");
// });
//
console.log(document);

  $('#enter').on("click", function(){
      //console.log('inside click')
      //get the searchTerm the user has used
      var inputWord = $('input[type=text]').val()
      console.log($('input[type=text]').val());
        var retrieved =  $.get("https://api.stackexchange.com//2.2/search?order=desc&sort=activity&intitle="+inputWord+"&site=stackoverflow",
          function(data){
              //The data attained from doing a get request form the stackoverflow API
                       // console.log('data',data)
              //Saving specifically the answers gotten from the data.
              var answers = data.items;
              var titleOfQuestion,
                    tags,
                      link;
              for (var i = 0 ; i <answers.length; i++){
              //Grabbing the title of the stackoverflow question
                      //console.log('the title',answers[i]['title']);
                  titleOfQuestion = answers[i]['title'];
                      console.log('titleOfQuestion',titleOfQuestion);
                  tags = answers[i]['tags'];
                  link = answers[i]['link'];
                    //console.log('tags',tags,);
                   //console.log('link',link);
                //We're creating div tags and wrapping  every individual answers title, link and tags inone div
              // var searchItem = '<div class ="search"></div>';
              // $('body').append(searchItem);
              var searchItem = $('body').append('<div class= "search" ><a href ="' + link + '"/><p>' + titleOfQuestion + '</p></a>')

              }
        })
      //the whole object
      console.log('retrieved',retrieved)
 	});
