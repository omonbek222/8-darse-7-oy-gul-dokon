export default function Blog() {
    return (
        <div>
            <div className="w-[310px] bg-[#F5F5F580] p-[15px] max-lg:hidden">
                <h3 className="font-bold">Categories</h3>
                <div className="flex flex-col gap-4 mt-[10px] pl-[10px]">
                    <div className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors text-[#46A358]">
                        <h3>House Plants</h3><p>(-1)</p></div>
                        <div className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors false">
                            <h3>Potter Plants</h3><p>(-24)</p></div>
                            <div className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors false">
                                <h3>Seeds</h3><p>(0)</p></div><div className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors false"><h3>Small Plants</h3><p>(11)</p></div>
                                <div className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors false"><h3>Big Plants</h3><p>(3)</p></div>
                                <div className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors false"><h3>Succulents</h3><p>(10)</p></div>
                                <div className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors false"><h3>Trerrariums</h3><p>(10)</p></div>
                                <div className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors false"><h3>Gardening</h3><p>(2)</p></div>
                                <div className="flex w-full justify-between text-base font-normal cursor-pointer hover:text-[#46A358] transition-colors false"><h3>Accessories</h3><p>(13)</p></div></div>
                                <div className="mt-[15px]"><h3 className="font-bold">Price Range</h3><div className="ant-slider css-k7429z ant-slider-horizontal"><div className="ant-slider-rail"></div><div className="ant-slider-track ant-slider-track-1" style={{left: "0%", width: "100%"}}></div>
                                <div className="ant-slider-step"></div><div className="ant-slider-handle ant-slider-handle-1" tabIndex="0" role="slider" aria-valuemin="0" aria-valuemax="1000" aria-valuenow="0" aria-disabled="false" style={{left: "0%", transform: "translateX(-50%)"}}></div>
                                <div className="ant-slider-handle ant-slider-handle-2" tabIndex="0" role="slider" aria-valuemin="0" aria-valuemax="1000" aria-valuenow="1000" aria-disabled="false" style={{left: "100%;", transform: "translateX(-50%)"}}></div>
                                </div><p className="font-normal">Price: <span className="font-bold text-[#46A358]">0$ - 1000$</span></p><button className="mt-[16px] bg-[#46A358] text-white px-[23px] py-[8px] rounded-lg">Filter</button></div>
                                <div className="mt-[20px] bg-[#d9fae0] w-full h-[300px] flex flex-col items-center"><h1 className="mt-[18px] text-[#46A358] text-4xl">The biggest discount!</h1><p className="mt-[11px] text-base font-bold">UP TO
        78% OFF</p><img className="my-[10px] h-[180px]" src="https://cdn.pixabay.com/photo/2019/02/16/11/34/potted-plant-4000135_960_720.png" alt="discount"/></div></div>
        </div>
    )}