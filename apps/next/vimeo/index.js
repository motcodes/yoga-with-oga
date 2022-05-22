// const Vimeo = require('vimeo').Vimeo
const Vimeo = require('vimeo').Vimeo
import { env } from '../../../secrets'

export const vimeoClient = new Vimeo(
  `${env.VIMEO_CLIENT_IDENTIFIER}`,
  `${env.VIMEO_CLIENT_SECRET}`,
  `${env.VIMEO_ACCESS_TOKEN}`
)
