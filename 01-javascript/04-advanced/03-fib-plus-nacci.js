function fib() {
    // Some variables here
    var arr = [0,1]
    function nacci() {
       // do something to those variables here
        arr.push(arr[0] + arr[1]);
        console.log(arr[1]);
        arr.shift();

    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  
  fibCounter() // should console.log "8"
  
  fibCounter() // should console.log "8"
  fibCounter() // should console.log "8"
  fibCounter() // should console.log "8"
