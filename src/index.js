module.exports = function check(str, bracketsConfig) {
  // your solution
    let stack = []
    const openBrackets = []
    const bracketsObject = {}

    for(let i = 0; i < bracketsConfig.length; i++) {
      bracketsObject[bracketsConfig[i][1]] = bracketsConfig[i][0]
      openBrackets.push(bracketsConfig[i][0])
    }

      for (let i = 0; i < str.length; i++) {  
      let curSymbol = str[i]

        if (stack.length === 0) { 
          if (openBrackets.includes(curSymbol)) {   
            stack.push(curSymbol)
            } else {   
              return false
            }
        } else {
          let topEl = stack[stack.length - 1]
            if (bracketsObject[curSymbol] === topEl) {
              stack.pop()
            } else if(openBrackets.includes(curSymbol)) {
              stack.push(curSymbol)
            }
        }    
      }
    return stack.length === 0
}
