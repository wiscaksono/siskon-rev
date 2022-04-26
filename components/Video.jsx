export default function Video() {
  return (
    <div className="mb-[30px]">
      <h4 className="text-center subhead-lg font-bold">{title}</h4>
      <p className="mb-[20px] font-bold subhead-md">{secondTitle}</p>
      <div className="aspect-video">
        <iframe className="w-full h-full" src={link}></iframe>
      </div>
    </div>
  );
}
