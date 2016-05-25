const githubChangeRemoteFile = require('github-change-remote-file')

function TriggerBuild (pkg, opts) {
  githubChangeRemoteFile({
    user: process.env.GH_USER,
    repo: 'citgm-harness',
    filename: '.travis.yml',
    transform: function (travisYML) {
      return travisYML.replace(/script: [^\n]*/, 'script: ./node_modules/.bin/citgm ' + pkg)
    },
    token: process.env.GH_TOKEN,
    pr: {
      title: 'kicking off build of ' + pkg,
      body: 'kicking off Canary in the Gold Mine build of ' + pkg + ' \\o/'
    }
  }, function (err, res) {
    console.log(res.html_url) // url of the pr
  })
}

module.exports = function (opts) {
  return new TriggerBuild(opts)
}
