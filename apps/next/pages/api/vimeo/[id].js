export default async function vimeoHandler(req, res) {
  const {
    method,
    query: { id },
  } = req

  if (method === 'GET') {
    const result = await fetch(`https://player.vimeo.com/video/${id}/config`)
    const data = await result.json()

    if (!data) {
      return res.status(400).json('User not found')
    }

    return res.status(200).json({
      thumbnailUrl: data.video.thumbs.base,
      videoUrl: data.request.files.progressive[0].url,
      duration: data.video.duration,
    })
  }
}
