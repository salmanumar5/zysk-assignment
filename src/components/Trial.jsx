
const Trial = () => {
  return (
    <div className='bg-[#F9FAFB] py-24'>
        <div className='max-w-[1218px] flex flex-col gap-8 mx-auto'>
            <div className='flex flex-col gap-5 items-center'>
                <h1 className='font-semibold text-4xl'>Start Your Free Trial</h1>
                <p className='text-lg text-center md:text-xl font-light tracking-wider text-slate-500'>Join over 4,000+ startups already growing with Untitled.</p>
            </div>
            <div className="flex justify-center gap-2">
                <button className="py-3 px-5 font-semibold bg-white border rounded-lg">Learn More</button>
                <button className="py-3 px-5 bg-[#E63F3A] text-white rounded-lg font-semibold">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Trial