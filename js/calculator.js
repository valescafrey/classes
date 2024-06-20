
    function insert(num){
        var number = document.getElementById('display').innerHTML 
        document.getElementById('display').innerHTML = number + num;
    }

    function clean() {
        document.getElementById('display').innerHTML = "";
    }

    function calculate() {
        var result = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = eval (result);

        }   