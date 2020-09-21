var randomNumber;
var clicked = 0;

function createRandomNumber(){
    randomNumber = Math.floor(Math.random() * 20);
}

function checkNumber(){
    clicked++
    document.querySelector('.btn').innerHTML = 'Check(' + clicked + ')'
    var inputValue = document.getElementById('inputValue').value;
    document.getElementById('inputValue').focus();
    document.getElementById('inputValue').placeholder = "You previously entered "+inputValue;
    document.getElementById('inputValue').value = '';
    console.log(inputValue)
    if(typeof(inputValue) != Number){
        if((inputValue > -1) && (inputValue < 21) ){
            document.querySelector('.btn').style.color = "white"
            if(randomNumber == inputValue){
                document.getElementById('status').innerHTML = 'Hurrahh!! You found me.'
                document.querySelector('.btn').style.backgroundColor = "green"
                setTimeout(function(){
                    location.reload()
                },3000)
            } else if(Math.abs(randomNumber - inputValue) >= 7) {
                document.getElementById('status').innerHTML = 'You are far away.'
                document.querySelector('.btn').style.backgroundColor = "tomato"
            }else if(Math.abs(randomNumber - inputValue) >= 3) {
                document.getElementById('status').innerHTML = 'You are close.'
                document.querySelector('.btn').style.backgroundColor = "orange"
            }else if(Math.abs(randomNumber - inputValue) >= 1) {
                document.getElementById('status').innerHTML = 'You are too close, come on crack this.'
                document.querySelector('.btn').style.backgroundColor = "rgb(126, 160, 57)"
            }
        }
        else{
            document.getElementById('status').innerHTML = 'Please type in between (1-20)'
        } 
    }else {
        document.getElementById('status').innerHTML = 'Please Enter a Number.'
    }
   
    
}

function key(e){
    if(e.keyCode === 13){
        checkNumber()
    }
}
document.addEventListener('keyup', key)