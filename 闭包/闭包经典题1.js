


for (var i = 1; i <= 5; i++) {

    setTimeout( function timer() {

        console.log(i);

    }, 1000 );

}

for (var i = 1; i <= 5; i++) {

    (function(i){

        setTimeout( function timer() {

            console.log(i);

        },  1000 );

    })(i);

}

for (let i = 1; i <= 5; i++) {

    setTimeout( function timer() {

        console.log(i);

    }, 1000 );

}
