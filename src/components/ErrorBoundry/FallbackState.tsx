
const FallbackState = () => {
  return (
    <div className="text-center p-4 h-dvh flex flex-col items-center justify-center">
      <h2 className="text-xl text-red-500">Oops! The app crashed.</h2>
      <button onClick={() => window.location.reload()} className='bg-[#54BD95] text-white rounded-[10px] p-4 px-8 '>Retry</button>
    </div>
  )
}

export default FallbackState