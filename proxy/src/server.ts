import * as http from 'http'

const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type')
  console.info(req.url)
  res.end()
}

const proxyServer = http.createServer(requestHandler)

proxyServer.listen(3000, '0.0.0.0', () => {
  console.info('proxy running at 3000')
})
