//$.getScript("/js/data.js",function(){ }); //import data.js
$(function(){
    $('#ghsubmitbtn').on('click', function(e){
      e.preventDefault();
      clearText();
      var username = $('#ghusername').val();
      var requri   = 'https://api.github.com/search/users?q='+username;

      requestJSON(requri, function(json) {
        if(json.total_count == "0") {
          $('#ghapidata').html("<h2>No User Info Found</h2>");
          d3.selectAll("svg > *").remove();
        }
        else if (json.total_count < 5){
          for (var i = 0; i < json.total_count; i++){
            var username = json.items[i].login;
            data[27].total_letters += username.length;
            console.log(username);
            var occurences = [];
            occurences = get_occurences(username);
            for (var j = 0; j < occurences.length; j++){
              data[j].frequency += occurences[j];
            }
            for (var k = 0; k < data.length-1; k++){
              console.log(data[k].letter);
              console.log(data[k].frequency);
            }
          }
          animateBarsUp(data);
          }
        else {
          console.log(json.total_count);
            for (var i = 0; i < 5; i++){
              var username = json.items[i].login;
              data[27].total_letters += username.length;
              console.log(username);
              var occurences = [];
              occurences = get_occurences(username);
              for (var j = 0; j < occurences.length; j++){
                data[j].frequency += occurences[j];
              }
              for (var k = 0; k < data.length-1; k++){
                console.log(data[k].frequency);
              }
            }
      animateBarsUp(data);
      } // end else statement
    }); // end requestJSON Ajax call
  }); // end click event handler

    function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  }
});
