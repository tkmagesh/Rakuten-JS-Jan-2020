//Create an  object and assign it to a varibale 'spinner'

var spinner = (function(){
    var counter = 0;
    function up(){
        return ++counter;
    }
    function down(){
        return --counter;
    }
    return {
        up : up,
        down : down
    }
})();

var spinner = (function(){
    var counter = 0;
    return {
        up : function(){
            return ++counter;
        },
        down : function(){
            return --counter;
        }
    };
})();

/* 
methods
====== 
*/
spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3

spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

spinner.counter = 10000
counter = 10000
