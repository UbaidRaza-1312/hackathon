import { FaStar } from "react-icons/fa"
import { TiTick } from "react-icons/ti"

export const Comments = () => {
    return (
        <div className="flex flex-col md:flex ">
             <div className="ml-64  mt-14 text-black text-4xl  font-semibold "><h1>OUR HAPPY CUSTOMERS</h1></div>
        
            <section className=" body-font">
            <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden  relative">
                            <div className=" mr-5 flex gap-2 h-10">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-2 flex">
                                Sarah M.
                                <TiTick className="rounded-full bg-[#01AB31] text-white"/>
                            </h1>
                            <p className="leading-relaxed mb-3">
                                I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden  relative">
                          <div className=" mr-5 flex gap-2 h-10">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 flex">
                                Alex K.
                                <TiTick className="rounded-full bg-[#01AB31] text-white"/>
                            </h1>
                            <p className="leading-relaxed mb-3">
                                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
                            </p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-200 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden  relative">
                          <div className=" mr-5 flex gap-2 h-10">
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                                <FaStar className="text-yellow-400" />
                            </div>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 flex">
                                James L.
                                <TiTick className="rounded-full bg-[#01AB31] text-white"/>
                            </h1>
                            <p className="leading-relaxed mb-3">
                                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}



