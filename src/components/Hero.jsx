import ComingSoonButton from "./ComingSoonButton";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <div className="min-h-screen background-container grid items-center justify-center text-center">
      <div className="flex flex-col gap-4 text-white">
        <h1 className="max-md:hidden font-bold text-4xl leading-9 md:text-[92px] md:leading-[92px] capitalize">
          Click to food is <br /> launching in 2024
        </h1>
        <h1 className="md:hidden font-extrabold text-4xl leading-9 capitalize">
          We Are <br /> launching in <br />
          2024
        </h1>
        <p className="font-medium text-sm md:text-[18px] leading-[21px] md:leading-7 w-[286px] md:w-[632px] text-center">
          Savior the anticipation! Out food delivery service is gearing up to
          bring delectable meals right to your doorstep
        </p>
        <div className="flex max-md:flex-col gap-[10px] mt-3 items-center justify-center mb-7">
          <CTAButton text="Contact Support" varient="purple" />
          <CTAButton text="Get Notified" />
        </div>
        <ComingSoonButton />
      </div>
    </div>
  );
}
