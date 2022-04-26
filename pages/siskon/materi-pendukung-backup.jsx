import Link from "next/link";

export default function MateriPendukung() {
  return (
    <div>
      <div className="flex gap-[15px] mb-[30px]">
        <Link href="#root-locus">
          <button className="h-[28px] p-md text-[#CA3B3C] font-semibold border-2 border-[#FFBCBD] rounded-[5px] capitalize w-full">
            Root Locus
          </button>
        </Link>
        <Link href="#bode-plot">
          <button className="h-[28px] p-md text-[#CA3B3C] font-semibold border-2 border-[#FFBCBD] rounded-[5px] capitalize w-full">
            Bode Plot
          </button>
        </Link>
        <Link href="#pid-controller">
          <button className="h-[28px] p-md text-[#CA3B3C] font-semibold border-2 border-[#FFBCBD] rounded-[5px] capitalize w-full">
            PID Controller
          </button>
        </Link>
      </div>

      <div>
        <div id="pid-controller">
          <Video
            title="PID Controller"
            secondTitle="1. Memahami PID Controller"
            link="https://www.youtube.com/embed/aaMA-v509QQ"
          />
          <Video
            secondTitle="2. PID Tuning Dengan Ziegler-Nichols"
            link="https://www.youtube.com/embed/ULeueObnqp4"
          />
        </div>
      </div>
    </div>
  );
}
const Video = ({ title, secondTitle, link }) => {
  return (
    <div className="mb-[30px]">
      <h4 className="text-center subhead-lg font-bold">{title}</h4>
      <p className="mb-[20px] font-bold subhead-md">{secondTitle}</p>
      <div className="aspect-video">
        <iframe className="w-full h-full" src={link}></iframe>
      </div>
    </div>
  );
};
