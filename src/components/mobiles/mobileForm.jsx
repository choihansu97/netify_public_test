import { useState, useEffect } from 'react';

function MobileForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    time: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, contact, time } = formData;
    setIsFormValid(name && contact && time);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-auto bg-black bg-opacity-50 p-5">
      <div className="relative m-auto w-full max-w-md animate-slideUp rounded-lg bg-white px-4 pb-8 pt-4 shadow-lg">
        <span
          className="absolute right-4 top-2 cursor-pointer text-2xl font-bold text-gray-400 hover:text-black"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="my-2 text-left text-xl font-semibold text-black">
          디자이너 구독 상담 문의
        </h2>
        <p className="text- mb-6 text-left font-normal">
          원활한 상담을 위해 아래 내용을 작성해 주시면
          <br />
          전담 매니저가 1:1 상담을 도와드립니다.
        </p>

        <form id="counselForm">
          <div className="form-group mb-8 flex w-full flex-col items-start gap-2">
            <label
              htmlFor="name"
              className="text-base font-normal text-black text-opacity-90"
            >
              기업명<span className="purple-custom">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="디자이너하이어"
              required
              className="placeholder-font-normal placeholder-text-base h-14 w-full rounded-lg border border-black border-opacity-15 bg-white p-4 placeholder-black placeholder-opacity-30 outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-8 flex w-full flex-col items-start gap-2">
            <label
              htmlFor="contact"
              className="text-base font-normal text-black text-opacity-90"
            >
              휴대폰 번호 <span className="purple-custom">*</span>
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="010-1234-5678"
              required
              className="placeholder-font-normal placeholder-text-base h-14 w-full rounded-lg border border-black border-opacity-15 bg-white p-4 placeholder-black placeholder-opacity-30 outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-6 flex w-full flex-col items-start gap-2">
            <label
              htmlFor="time"
              className="text-base font-normal text-black text-opacity-90"
            >
              비고
            </label>
            <input
              type="text"
              id="time"
              name="time"
              placeholder="상담이 필요한 내용"
              required
              className="placeholder-font-normal placeholder-text-base h-14 w-full rounded-lg border border-black border-opacity-15 bg-white p-4 placeholder-black placeholder-opacity-30 outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="form-group flex w-full flex-col gap-2">
            <button
              type="submit"
              className={`h-12 w-full cursor-pointer rounded-lg border-none p-3 text-base font-bold text-white outline-none ${
                isFormValid
                  ? 'bg-purple-custom'
                  : 'cursor-not-allowed bg-[rgba(0,0,0,0.1)]'
              }`}
              disabled={!isFormValid}
            >
              상담 신청하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MobileForm;
