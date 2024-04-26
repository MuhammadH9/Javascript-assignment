alert("Calculator here")
function calc() {
        var inputValue = document.getElementById("inputValue")
        console.log("inputValue", inputValue.value)
        var result = eval(inputValue.value)
        console.log("result", result)
    }
    
    
    
    function addValue(num) {
        console.log("number", num)
    
        var input = document.getElementById("input")
    
        input.value += num
        // input.value = input.value + num
    
    
    }
    
    
    function result() {
        var input = document.getElementById("input")
    
        console.log(input.value)
    
        var ans = eval(input.value)
        console.log(ans, "ans")
        input.value = ans
    }
    
    
    function clearValue() {
        var input = document.getElementById("input")
        console.log(input.value.slice(0, -1))
        input.value = input.value.slice(0, -1)
    }
    
    function clearAll() {
        var input = document.getElementById("input")
        input.value = ""
    }