var testutil = require('testutil')
  , cmd = require('../lib/cmd')

describe('+ cmd.splitArgs', function() {
  describe('> when all params are passed and the command has parameters', function() {
    it('should properly identify the command and its args', function() {
      var args = "node buzz -t 100000 -d 250 my-script.sh 10".split(' ')
      var argO = cmd.splitArgs(args)
      EQ (argO.n, 6)
      EQ (argO.buzzArgs, 'node,buzz,-t,100000,-d,250')
      EQ (argO.execArgs, '10')
      EQ (argO.execName, 'my-script.sh')
    })
  })
})