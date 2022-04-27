import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="flex items-center justify-center py-[10px] px-[25px] rounded-[10px] border-2 border-white hover:bg-white transition-colors  text-white hover:text-[#F35D5E]"
        onClick={() => setShowModal(true)}
      >
        <p className="p-lg font-semibold transition-colors">Klik Disini</p>
        <img src="/icon/arrow-right.svg" alt="" className="ml-[10px]" />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex  fixed inset-0 z-[53] outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto ">
              <div className="border-0 rounded-[8px] shadow-lg relative flex flex-col w-[611px]  bg-white p-[46px] outline-none focus:outline-none">
                <button
                  className="absolute top-[15px] right-[15px] bg-[#f35d5e] w-[30px] h-[30px] items-center justify-center rounded-full text-white font-bold"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
                <div className="text-center">
                  <h1 className="subhead-lg text-[#394149] font-semibold mb-[5px]">
                    Hubungi Kami
                  </h1>
                  <p className="text-[14px] text-[#474747] mb-[48px]">
                    Jangan malu-malu, kamu bisa menghubungi secara anonim.
                  </p>
                </div>
                <div>
                  <form className="flex flex-col gap-[10px]">
                    <label>
                      Nama <span>(Opsional)</span>
                    </label>
                    <input
                      type="text"
                      className="border border-gray-500 rounded-lg py-1 outline-none pl-[32px] bg-red-50"
                      placeholder="Wisnu Wicaksono"
                    />
                    <label>Isi Pesan</label>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="border border-gray-500 rounded-lg  outline-none px-[20px] py-[10px] bg-red-50"
                      placeholder="Ih bang wisnu baik banget loh..."
                    ></textarea>
                    <div>
                      <button className="inline-flex items-center justify-center py-[10px] px-[25px] rounded-[10px]  hover:bg-white bg-[#f35d5e] transition-colors  text-white hover:text-[#F35D5E] border border-[#F35D5E]">
                        <p className="p-lg font-semibold transition-colors">
                          Kirim
                        </p>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className=" fixed inset-0 z-[52] bg-black/30 backdrop-blur-sm"></div>
        </>
      ) : null}
    </>
  );
}
