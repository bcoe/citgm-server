const githubChangeRemoteFile = require('github-change-remote-file')

function TriggerBuild (pkg, opts) {

}

module.exports = function (opts) {
  return new TriggerBuild(opts)
}
