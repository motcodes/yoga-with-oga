import { vimeoClient } from '../../../vimeo'

export default function vimeoHandler(req, res) {
  const {
    query: { id },
  } = req

  vimeoClient.request(
    {
      path: '/videos/' + id,
    },
    (error, body) => {
      console.log('body :', body)
      if (!error) {
        res.status(200).json(body)
      }
    }
  )
}
