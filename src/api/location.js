let location
switch (process.env.NODE_ENV) {
  case 'development':
    location = 'www.aaa.com'
    break
  case 'production':
    location = 'www.bbb.com'
}
export default location
