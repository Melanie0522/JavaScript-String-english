// Complete the following procedure, the 'name' variable in all letters to uppercase,
// output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
var name_upper=name.toUpperCase();
console.log(name_upper);


// Complete the following procedure, capitalizing all the words in the variable sentence 
//and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function firstletterup(str) {    
    var newStr = str.split(" ");    
    for(var i = 0; i<newStr.length; i++){
        newStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1).toLowerCase();
    }    
    return newStr.join(" ");
}
sentence_up=firstletterup(sentence);
console.log(sentence);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var money_num=money.match(/\d+(.\d+)?/g);
console.log(money_num);
