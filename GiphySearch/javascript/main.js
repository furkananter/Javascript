/* Grab the input value */
document.querySelector('.js-go').addEventListener('click', function() {
    var input = document.querySelector('input').value;
    console.log(input);
    pushToDOM(input);
});

document.querySelector('.js-userinput').addEventListener('keyup', function(e) {
    var input = document.querySelector('input').value;
    console.log(input);

    if (e.which === 13) {
        pushToDOM(input);
    }

});


/* 3. Do the data stuff with API */





/* 3. Show me the GIFs */
function pushToDOM(input) {
    var container = document.querySelector('.js-container');
    container.innerHTML = input;
}