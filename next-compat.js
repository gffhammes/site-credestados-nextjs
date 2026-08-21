const { Buffer } = require('buffer')

if (!Buffer.SlowBuffer) {
  Buffer.SlowBuffer = Buffer
}

require('next/dist/bin/next')