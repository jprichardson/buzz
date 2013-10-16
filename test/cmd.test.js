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

  describe('> when only one param is passed and the command has a parameter', function() {
    it('should properly identify the command and its args', function() {
      var args = "node buzz -d 250 my-script.sh 10".split(' ')
      var argO = cmd.splitArgs(args)
      EQ (argO.n, 4)
      EQ (argO.buzzArgs, 'node,buzz,-d,250')
      EQ (argO.execArgs, '10')
      EQ (argO.execName, 'my-script.sh')
    })
  })

  describe('> when no params are passed and the command has a parameter', function() {
    it('should properly identify the command and its args', function() {
      var args = "node buzz my-script.sh 10".split(' ')
      var argO = cmd.splitArgs(args)
      EQ (argO.n, 2)
      EQ (argO.buzzArgs, 'node,buzz')
      EQ (argO.execArgs, '10')
      EQ (argO.execName, 'my-script.sh')
    })
  })

  describe('> when no params are passed', function() {
    it('should properly identify the command and its args', function() {
      var args = "node buzz my-script.sh".split(' ')
      var argO = cmd.splitArgs(args)
      EQ (argO.n, 2)
      EQ (argO.buzzArgs, 'node,buzz')
      EQ (argO.execArgs, '')
      EQ (argO.execName, 'my-script.sh')
    })
  })
})