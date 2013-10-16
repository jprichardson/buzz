var me = module.exports

me.splitArgs = function(args) {
  var args = args.slice(0) //clone array
  var argO = {}

  //command is either 2nd, 4th, or 6th. This would change if more options get added
  var maybeArgs = [args[2], args[4], args[6]]
  var n = maybeArgs.reduce(function(last, item, i) {
    if (last > 0) return last

    var maybeIndx = (i+1)*2
    if (item && item.indexOf('-') != 0)
      return maybeIndx
    else
      return last
  },-1)

  argO.n = n

  if (n < 0)
    return argO

  argO.execName = args[n]
  argO.execArgs = args.splice(n)
  argO.execArgs.shift() //get rid of exec

  argO.buzzArgs = args
  return argO
}