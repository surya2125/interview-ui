
import { FaArrowRight } from "react-icons/fa";
import { footerImg, leftImg, profileImg } from '@assets';
import AppLayout from '@Layout';
import { helpAndSolutions, products, supports } from '@Constants';
import FooterSection from './components/FootSection';

const Footer = () => {

  // Custom Input Field
  const InputField = ({
    name,
    type,
    placeholder,
    rows,
    classList,
    required,
  }: {
    name: string;
    type: string;
    placeholder: string;
    rows?: number;
    classList: string;
    required?: boolean;
  }) => (
    <div className="mb-2">
      {type === 'textarea' ? (
        <>
          <label className='text-[#ffffff] text-[18px]'>Message</label>
          <textarea
            required={required}
            name={name}
            rows={rows}
            placeholder={placeholder}
            className={`w-full rounded-lg border-1 border-[#DCDCDC] bg-white p-4 outline-none ${classList} `}
          />
        </>
      ) : (
        <>
          <label className='text-[#ffffff] text-[18px]'>Email</label>
          <input
            required={required}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`w-full rounded-lg border-1 border-[#DCDCDC] bg-white p-4 h-14 outline-none ${classList} `}
          />
        </>
      )}
    </div>
  );

  return (
    <footer className="bg-[#161C28] ">
      <AppLayout className='py-[60px]'>
        <div className="mx-auto max-w-[1440px] mb-12">
          <div className='flex flex-col  justify-between gap-[50px] md:gap-[101px] md:flex-row '>
            <div className='flex-1'>
              <div className='mb-12'>
                <h1 className='text-[#FFFFFF] text-[50px] font-bold tracking-[4px] leading-[1.2] mb-2'>People are Saying About Do White</h1>
                <span className='text-[#A6A6A6] text-[18px]'>
                  Everything you need to accept to payment and grow your money of manage anywhere on planet
                </span>
              </div>
              <div className='mb-12'>
                <img src={leftImg} alt="" className='mb-12' />
                <span className='text-[#A6A6A6] text-[18px]'>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</span>
                <span className='text-[#A6A6A6] text-[18px] block !mt-8'>_ Aria Zinanrio</span>
              </div>
              <div>
                <div className='flex'>
                  {[1, 2, 3, 4.5].map((i) => (
                    <img key={i} src={profileImg} alt="" className='me-4 rounded-[50%]' height={60} width={60} />
                  ))}
                </div>
              </div>
            </div>
            <div className='flex-1 bg-[#222938] p-10 rounded-[20px]'>
              <div className='flex flex-col items-center justify-center'>
                <img src={footerImg} alt="" height={60} width={60} />
                <h1 className='text-[#FFFFFF] cursor-pointer text-[30px] font-semibold'>Get Started</h1>
              </div>
              <form className="p-4">
                <InputField name="email" type="email" placeholder="Enter your email" classList="my-4" required />
                <InputField
                  name="query"
                  type="textarea"
                  placeholder="What are you say?"
                  rows={3}
                  classList="my-4"
                  required
                />
                <button type="submit" className="mx-auto flex w-full cursor-pointer items-center justify-center rounded-lg py-4 bg-[#54BD95] text-[#FFFFFF] font-semibold text-[16px]">
                  Request Demo
                </button>
                <p className='text-white text-end mt-1 text-[14px]'><span className='text-[#A6A6A6]'>or</span> Start Free Trial</p>
              </form>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div>
              <h1 className='text-[#54BD95] text-[50px] font-bold tracking-[4px] mb-2'>Biccas</h1>
              <span className='text-[#A6A6A6] text-[18px]'>
                Get started noew try our product
              </span>
              <form className="mt-4 flex w-full gap-x-2">
                <div className="relative w-full md:w-[400px]">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    className="w-full max-w-full border border-[#A6A6A6] rounded-[70px] bg-transparent text-[18px] text-[#A6A6A6] pr-12 pl-4 py-3 outline-none"
                  />
                  <div className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer p-[10px] bg-[#54BD95] rounded-[50%]">
                    <FaArrowRight className="text-[#FFFFFF]" />
                  </div>
                </div>
              </form>
            </div>
            <div className="flex gap-x-4 sm:gap-x-8 md:gap-x-14 lg:gap-x-20">
              <FooterSection title="Support" items={supports} />
              <FooterSection title="Help and Solution" items={helpAndSolutions} />
              <FooterSection title="Product" items={products} />
            </div>
          </div>
          <div className="text-[#FFFFFF] mt-6 flex flex-col md:flex-row items-center justify-between gap-x-3 gap-y-5 text-[18px]">
            <span>
              © 2025 Biccas Inc. Copyright and rights reserved
            </span>
            <span className='flex'>
              <li className='list-none cursor-pointer text-[18px]'>Terms and Condtions</li>
              <span className="text-[18px] text-[#A6A6A6] mx-4">•</span>
              <li className='list-none cursor-pointer text-[18px]'>Privacy Policy</li>
            </span>
          </div>
        </div>
      </AppLayout>
    </footer>
  );
};

export default Footer;
