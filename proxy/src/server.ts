import * as http from 'http'

const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type')
  console.debug(req.url)
  let options = {
    host: 'db',
    method: 'GET',
    port: '5984',
    path: req.url
  }
  let proxyReq = http.request(options, res => {
    let body:any = []
    res.on('data', chunk => {
      body.push(chunk)
    })
    res.on('end', ()=> {
      console.log(body)
    })
  })

  proxyReq.on('error', (e) => console.warn(e.message))
  proxyReq.end()
}

const proxyServer = http.createServer(requestHandler)

proxyServer.listen(3000, '0.0.0.0', () => {
  console.info('proxy running at 3000')
})
