export function ClinicalImg({ src, alt, caption }) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        className="w-full max-w-[700px] rounded-[10px] my-4 block object-cover"
      />
      {caption && (
        <p className="text-[11.5px] text-[rgba(60,52,48,0.5)] italic -mt-2 mb-5 pl-0.5">
          {caption}
        </p>
      )}
    </>
  )
}

export function ImgPair({ images, caption }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 my-4 max-[820px]:grid-cols-1">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full rounded-[10px] object-cover h-[260px]"
          />
        ))}
      </div>
      {caption && (
        <p className="text-[11.5px] text-[rgba(60,52,48,0.5)] italic -mt-2 mb-5 pl-0.5">
          {caption}
        </p>
      )}
    </>
  )
}
