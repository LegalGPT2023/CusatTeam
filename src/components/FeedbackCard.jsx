const FeedbackCard = ({ content, name, title, img, number }) => (
  <div className="flex justify-start flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
    <h2 className="text-[1.8em] font-bold text-gradient">#{number}</h2>

    <div className="flex flex-row mt-7">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-5">
      {content}
    </p>
  </div>
);

export default FeedbackCard;
