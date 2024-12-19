export const Hero = () => {
    return (
      <div>
        <section className="text-gray-600 body-font flex-col md:flex-row">
          <div className="container mx-auto flex md:flex-row flex-col items-center w-596px h-2,431px top--1750px left-100px gap-32px">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <b><h1 className=" sm:text-5xl text-6xl mb-4  text-gray-900 w-700px size-64px ">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1></b>
              <p className="mb-8 w-11/12">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded text-lg">
                  Shop Now
                </button>
  
              </div>
  
            </div>
            <div className="bg-white lg:max-w-lg lg:w-96 md:w-1/2 w-2/6 ">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iBXYbLdMR8vO0MHMcwghH3HTOe7uPX7-ek2~0vooYOag05aVLBf5pTU-RQPCDSMGkzHaUoHam026SPy~w6yUFYl01HfKUo5YVDLulycrbdTIq07nkf74sAxt95ufsYIUgTi0YEv32J0v4t84BVnWoETfNt9qUNIMkjSiCbaUdb68TADkMMVOMc6tQuf2g20f6Nc~1vL1RDIyS6sFFecWtddTthgTo4NptAa9zSTRKHRps2T9nMXKX4yVRDV1-w6qQkPm-y3imzV7u~s1GEOISBl171NRveo9C2G1NPW6QggE0VbImeRzb-Ye0CZRklgOB6f48qQhRopZBZv54PrwtQ__"
              />
            </div>
          </div>
          <div className="bg-black text-white w-full h-24 flex justify-center items-center">
            <b><div className="mx-10 mr-44 ml-24 text-xl">VERSACE</div></b>
            <b><div className="mx-10 mr-44 text-xl">ZARA</div></b>
            <b><div className="mx-10 mr-44 text-xl">GUCCI</div></b>
            <b><div className="mx-10 mr-44 text-xl">PARDA</div></b>
            <b><div className="mx-10 mr-44 text-xl">CALVIN KLEIN</div></b>
          </div>
        </section>
      </div>
    )
  }
  