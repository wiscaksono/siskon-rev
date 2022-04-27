export default function Cards({ title, secondTitle, img }) {
  return (
    <div className="mb-[30px]">
      <h4 className="text-center subhead-lg font-bold">{title}</h4>
      <p className="mb-[20px] font-bold subhead-md">{secondTitle}</p>
      <div className="aspect-video">
        <img src={img} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}
