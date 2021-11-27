const showBanner = require('node-banner')
const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const printBanner = async (title, color) => {
  await showBanner(title, '', color)
}

printBanner('Deploying', 'yellow')

const EnvDomain = {
  test: {
    host: '114.132.41.66',
    user: 'ys',
    password: 'b%RU470!',
    short: 'test',
    remoteRoot: '/heatmap',
  },
  production: {
    host: '47.94.7.204',
    user: 'yangshan',
    password: 'CbfaPhFjs4SPhW3N',
    short: 'prod',
    remoteRoot: '/heatmap',
  },
}

const env = EnvDomain[process.env.NODE_ENV]
const { user, host, password, short, remoteRoot } = env
printBanner(`Deploying ${short}`, 'yellow')

const config = {
  user,
  password,
  host,
  port: 21,
  localRoot: __dirname + '/build',
  remoteRoot,
  include: ['*', '**/*'],
  deleteRemote: true,
  forcePasv: true,
}

ftpDeploy
  .deploy(config)
  .then(() => printBanner(`Deploy ${short} Success`, 'green'))
  .catch((err) => {
    console.log(err)
    printBanner(`Deploy ${short} failed`, 'red')
  })
