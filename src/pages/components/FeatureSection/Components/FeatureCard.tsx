
const FeatureCard = ({ img, title, description }: { img: string, title: string, description: string }) => {
  return (
    <div className='min-h-[570px] md:w-[364px] space-y-[30px] md:min-w-[300px] max-sm:min-w-full shadow-md rounded-md '>
      <img src={img} className='min-h-[430px] min-w-full object-contain' />
      <div className='min-w-full h-[140px] space-y-[20px] text-center text-balance'>
        <p className='text-[20px] text-[#191A15] font-semibold'>
          {title}
        </p>
        <p className='text-[#A6A6A6] text-[16px] font-medium'>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard