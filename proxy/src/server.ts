import * as http from 'http'

const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  console.info(req.url)
  res.end()
}

const proxyServer = http.createServer(requestHandler)

proxyServer.listen(3000, () => {
  console.info('proxy server running at 3000')
})
