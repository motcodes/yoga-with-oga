import { vimeoClient } from '../../../vimeo'

export default async function vimeoHandler(req, res) {
  const {
    query: { id },
  } = req

  // vimeoClient.request(
  //   {
  //     path: `/video/${id}/config`,
  //   },
  //   (error, body) => {
  //     console.log('body :', body)
  //     if (!error) {
  //       res.status(200).json(body)
  //     }
  //   }
  const result = await fetch(`https://player.vimeo.com/video/${id}/config`)
  const data = await result.json()
  return res.status(200).json({
    thumbnailUrl: data.video.thumbs['640'],
    videoUrl: data.request.files.progressive[0].url,
    video: data.video,
  })
}
