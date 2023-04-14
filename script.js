document.getElementById('delete').onclick = reset;


document.getElementById('change').onclick = Convert;


function reset() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
}


function Convert() {
    
    var celsius = document.getElementById("celsius").value;


    var fahrenheit = document.getElementById("fahrenheit").value;

    if (fahrenheit != '') {
         celsius = (parseFloat(fahrenheit) -32) /1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }

    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
}

