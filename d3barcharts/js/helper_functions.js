
function get_occurences(string_to_split){
  var occurences = [];
  occurences[0]  = (string_to_split.split('a').length - 1) ;
  occurences[1]  = (string_to_split.split('b').length - 1) ;
  occurences[2]  = (string_to_split.split('c').length - 1) ;
  occurences[3]  = (string_to_split.split('d').length - 1) ;
  occurences[4]  = (string_to_split.split('e').length - 1) ;
  occurences[5]  = (string_to_split.split('f').length - 1) ;
  occurences[6]  = (string_to_split.split('g').length - 1) ;
  occurences[7]  = (string_to_split.split('h').length - 1) ;
  occurences[8]  = (string_to_split.split('i').length - 1) ;
  occurences[9]  = (string_to_split.split('j').length - 1) ;
  occurences[10]  = (string_to_split.split('k').length - 1) ;
  occurences[11]  = (string_to_split.split('l').length - 1) ;
  occurences[12]  = (string_to_split.split('m').length - 1) ;
  occurences[13]  = (string_to_split.split('n').length - 1) ;
  occurences[14]  = (string_to_split.split('o').length - 1) ;
  occurences[15]  = (string_to_split.split('p').length - 1) ;
  occurences[16]  = (string_to_split.split('q').length - 1) ;
  occurences[17]  = (string_to_split.split('r').length - 1) ;
  occurences[18]  = (string_to_split.split('s').length - 1) ;
  occurences[19]  = (string_to_split.split('t').length - 1) ;
  occurences[20]  = (string_to_split.split('u').length - 1) ;
  occurences[21]  = (string_to_split.split('v').length - 1) ;
  occurences[22]  = (string_to_split.split('w').length - 1) ;
  occurences[23]  = (string_to_split.split('x').length - 1) ;
  occurences[24]  = (string_to_split.split('y').length - 1) ;
  occurences[25]  = (string_to_split.split('z').length - 1) ;
  occurences[26] = string_to_split.length - (occurences[0]+ occurences[1]
                    + occurences[2]+ occurences[3]+ occurences[4]
                    + occurences[5]+ occurences[6]+ occurences[7]
                    + occurences[8]+ occurences[9]+ occurences[10]
                    + occurences[11]+ occurences[12]+ occurences[13]
                    + occurences[14]+ occurences[15]+ occurences[16]
                    + occurences[17]+ occurences[18]+ occurences[19]
                    + occurences[20]+ occurences[21]+ occurences[22]
                    + occurences[23]+ occurences[24]+ occurences[25]);

  return occurences;
}

//sorted Alphabetically
function convert_data_to_percentages(data){
  for (var i = 0; i < data.length - 1; i++){
    data[i].frequency = data[i].frequency/data[27].total_letters;
  }
}

//sorted alphabetically
function get_max_frequency(data){
  var maxFrequency = 0;
  for (var i = 0; i < data.length-1; i++){
      if (data[i].frequency  > maxFrequency){
        maxFrequency = data[i].frequency;
      }
  }
  return maxFrequency;
}

function clearText(){
  $('#ghapidata').html("<h2></h2>");

}
