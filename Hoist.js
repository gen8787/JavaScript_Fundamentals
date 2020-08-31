// Assignment: JavaScript Hoisting
// Objectives:
// Practice reading JavaScript the same way as the interpreter reads it.
// Rewrite the given code as it is seen by the interpreter
// Predict the outputs

// 1 - GIVEN
    console.log(hello);
    var hello = 'world';

        // Predicted output:
        // undefined

        // Rewrite the given code as it is seen by the interpreter
        // var hello;
        // console.log(hello);
        // var hello = 'world';

// 2 - GIVEN
    var needle = 'haystack';
    test();
    function test(){
        var needle = 'magnet';
        console.log(needle);
    }
        // Predicted output:
        // magnet

        // Rewrite the given code as it is seen by the interpreter
        // var needle = 'haystack';
        // test();
        // function test(){
        //         var needle = 'magnet';
        //         console.log(needle);

// 3 - GIVEN
    var brendan = 'super cool';
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan);

        // Predicted output:
        // super cool

        // Rewrite the given code as it is seen by the interpreter
        // var brendan = 'super cool';
        // function print(){
        //     brendan = 'only okay';
        //     console.log(brendan);
        // }
        // console.log(brendan);

// 4 - GIVEN
    var food = 'chicken';
    console.log(food);
    eat();
    function eat(){
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
    }
        // Predicted output:
        // chicken
        // half-chicken

        // Rewrite the given code as it is seen by the interpreter
        // var food = 'chicken';
        // console.log(food);
        // eat();
        // function eat(){
        //     food = 'half-chicken';
        //     console.log(food);
        //     var food = 'gone';
        // }

// 5 - GIVEN
    mean();
    console.log(food);
    var mean = function() {
        food = "chicken";
        console.log(food);
        var food = "fish";
        console.log(food);
    }
    console.log(food);
        // Predicted output:
        // undefined
        // chicken
        // Actual output: mean is not a function

        // Rewrite the given code as it is seen by the interpreter
        // mean();
        // console.log(food);
        // var mean = function() {
        //     food = "chicken";
        //     console.log(food);
        //     var food = "fish";
        //     console.log(food);
        // }
        // console.log(food);

// 6 - GIVEN
    console.log(genre);
    var genre = "disco";
    rewind();
    function rewind() {
        genre = "rock";
        console.log(genre);
        var genre = "r&b";
        console.log(genre);
    }
    console.log(genre);
        // Predicted output:
        // undefined
        // rock
        // r&b
        // disco

        // Rewrite the given code as it is seen by the interpreter
        // var genre;
        // console.log(genre);
        // rewind();
        // function rewind() {
        //     genre = "rock";
        //     console.log(genre);
        //     var genre = "r&b";
        //     console.log(genre);
        // }
        // console.log(genre);

// 7 - GIVEN
    dojo = "san jose";
    console.log(dojo);
    learn();
    function learn() {
        dojo = "seattle";
        console.log(dojo);
        var dojo = "burbank";
        console.log(dojo);
    }
    console.log(dojo);
        // Predicted output:
        // san jose
        // seattle
        // burbank
        // san jose

        // Rewrite the given code as it is seen by the interpreter
        // dojo = "san jose";
        // console.log(dojo);
        // learn();
        // function learn() {
        //     dojo = "seattle";
        //     console.log(dojo);
        //     var dojo = "burbank";
        //     console.log(dojo);
        // }
        // console.log(dojo);


// 8 - GIVEN
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));
    function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
        // Predicted output:
        // Not sure
        // Actual output: { name: 'Chicago', students: 65, hiring: true }, Error: assignment to constant variable.

        // Rewrite the given code as it is seen by the interpreter
        // console.log(makeDojo("Chicago", 65));
        // console.log(makeDojo("Berkeley", 0));
        // function makeDojo(name, students){
        //     const dojo = {};
        //     dojo.name = name;
        //     dojo.students = students;
        //     if(dojo.students > 50){
        //         dojo.hiring = true;
        //     }
        //     else if(dojo.students <= 0){
        //         dojo = "closed for now";
        //     }
        //     return dojo;
        // }