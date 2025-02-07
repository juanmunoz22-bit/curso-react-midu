import { useCatImage } from "../src/hooks/useCatImage"

export function Otro() {
  const { imageUrl } = useCatImage({ fact: 'Hola mundo' })
  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}