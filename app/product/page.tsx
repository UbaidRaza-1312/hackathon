import { FaStar, FaStarHalf } from "react-icons/fa";

export const Products = () => {
  return (
    <div>
        <div className="flex justify-center text-center mt-14 text-black text-4xl font-semibold "><h1>NEW  ARRIVALS</h1></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMe64u59Lbvp4VwEgv8OwbO7thHyKffvaBrWs9JKyEHrDKsIDvSX54RYRAUTDpjQ5iY7s941rgr3viG5jedENtp0uwF1NKoQ921qNo-Hj5iup7B4thow4MKkkRCRCySD5C8ep-VDw0ObVx8rs~DBcoodaR8~-0TGpS9iaCqB5-0l45YxzaC5HIZfh48l55HFqjRtoKv45ukZD5sm~hGWSi3~R3~pHz3Kx6WnBQOkQ00nVlmWCqbUrxoZIBY683sMLVdyggezPIsRNE-ThuMs1~xu52~ErDH20fgERK8AZzrFHBT2UHQ39-c1rYErDVIgjWCTamyaHMgGCRKZMTRtMA__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    T-SHIRT WITH TAPE DETAILS
                  </h1>
                  <p className="text-gray-900 font-bold">$120</p>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">4.5/5 stars</p>
                </div>
              </div>
            </div>

            {/* Second Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fG3YkAyLsyvn29Eo5Lg4oUnjHDeCI4QUmWkN2iuBoTk89NX8SucQLSnUbazfDB6WzzRPPnsJKxw8WZMcaNyqBVlIfeqh0B5ZPJgHZa4huPesp13kzb~fM~6n3yK1IjyUbWPC07z0xDPiZOh3SrdeFIUj8ZWWp46d6K8P4APdcEtulYSvs6EpfGeEKKhN9fRMeOitHZ8dAzaH7qbIRpZK35QzjL3HRMcDt5Mmci~CKK~zB2-2L9unDIHURWoMilRJ44j8Kz~39eHe7rWXj49yXnYJrdHVBkOxfrp3Bsq5vsnSfpUVA-otfIXtLq0KsmjfHTP7IYjP1lEKwnzk2KwVlg__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    SKINNY FIT JEANS
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-gray-900 font-bold">$240</p>
                    <p className="text-gray-400 font-bold"><del>$260</del></p>
                    <p className="text-red-500 bg-red-200 ">$20%</p>
                  </div>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">3.5/5 stars</p>
                </div>
              </div>
            </div>

            {/* Third Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y1FAr2GBDyLqQHdZMGqRPoShVoH0ICY30fbO8w6GqMVCxbGcy~ijhCojxv2kt2xEGZ2f67QBP5KbPwNbJSZZbKAl-LI-KvGlJ741KjpnAsvyhdSpz1HMevd3zkY3v4Vmf~XejHPivYfQPI7LPLD-DaAlL0k7yCZy08R3hLJ4pfOmKqfJPhVIwryNse1u6aCt5bUwf0LkWx4mMTsqB1GJ9KKxbmQ7rFWnA7XP56n1We0TKN6voJmJBdjbFVDG6t1UI6JK8Oz1sr4v46XzlH8Qvy-2ax-MQYvZj2OtWRiMQMYGBKoAItEslk3VqlpXTenUyfcecJe9KobJQaL0PQWEBw__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    CHECKERED SHIRT
                  </h1>
                  <p className="text-gray-900 font-bold">$180</p>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">4.5/5 stars</p>
                </div>
              </div>
            </div>

            {/* Fourth Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/3457/42c2/7cc557f42cf1d489f7cc811856b90e9f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l6Wv8Hwd6uZKfUjFgEnlGTQYUC3s30hsUipVo0FxSXqSrEkiEiMmStneHQpQLjT7PeS3y7u9KkO-tnuKw3Fa~V6eYW0AXoJiknZKr3bUuWCMgE3ZOuqgG~ILUNM2wTvS6FaJl-ZlRRpxwzgS~VwYWm-~6eQi3VJSbdKxSjvuuQL3TyNcKybo3k4iwf5p4t~7-RdI1BU5TxO11C83SJdJbkov35ETTmhsYf12vGCjFZHnt4ztFtf0cVZjplYGBnwVEtmRIMin7EfxQF~m1hBoR~GNsbIICDL4VL0xG9YSTkQZ2w5C1YJhFjZ9pPTgVbhKm6gNsQvpXrnFcqBMpNBhfA__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    SLEEVE STRIPED T-SHIRT
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-gray-900 font-bold">$130</p>
                    <p className="text-gray-400 font-bold"><del>$160</del></p>
                    <p className="text-red-500 bg-red-200 ">$30%</p>
                  </div>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">4.5/5 stars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <div className="flex justify-center mt-5 mb-5">
          <button className="text-black bg-white hover:bg-white hover:text-blue-400 w-16px">View All</button>
        </div>



      <div className="flex justify-center text-center mt-14 text-black text-4xl font-semibold "><h1>Top Selling</h1></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/e01f/5d3c/d9029bd465a4c7158689ab1619693014?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SAvhuHJx5gUnalgPEyX-ovy4xJY0em90BiYUvb0Zhf1-Hfpod6qOKxKOPtET7CwOdFppjcOTrUHY6yX0BkVNIom5ioMSwpGFWWeUEyyNDE19E2jnP8p1z101lVHHKZRNg3WocYcsa~CymkNzEsDVvPBo-0iXrqrt6NiAM6ZyxEqrq74-cDu~poc95ZkevxOV96CTuRj0oVQ1pEiw2qlirHi~g91mXy6YUrOkJQWVjj~hNA-zY2Mo9gOQx1C0YZIf910KQJFoQMZOYu-HeL37ZjDrmlMLRHuTzPtyh1JccfozR2OUrXaiIEk~4MMwM3HGeuJFPzpbtkpCn0Z27NTTOg__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  VERTICAL STRIPED SHIRT
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-gray-900 font-bold">$212</p>
                    <p className="text-gray-400 font-bold"><del>$232</del></p>
                    <p className="text-red-500 bg-red-200 ">$20%</p>
                    </div>
                    <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">5.0/5 stars</p>
                </div>
              </div>
            </div>

            {/* Second Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RPA8sVhqEDae1stCaElmvCYIbg8B25yY6zXSKWuwVnxqYbRZEeHyiCzI9WkcstVrI7YV-BrFHTXsSm9tFJlboh0cJf9pPcJmXACoGTPbwIII~afFKmaxmUiY2GVwjr-PjNrsB-75~R7yBKjEYC-liOxELIoD8VFrWxrc453s7BjuRhwr-HuPSzjuPGuSIlWavjX7WhtHeI0EnzyYMBmniIao6yBRWAwjQ2baE9-8aMxb~VcL0rvqI6kc5zzscCDvbl46UDFvcIkpnke3HwHZ0RsYEWDjXVo7hLqlaktTa1sZn134xCnL1SSW8z7-41gL~VjLyV2-sy7l4-ooLI4FuA__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  COURAGE GRAPHIC T-SHIRT
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-gray-900 font-bold">$145</p>
                   
                  </div>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">4.0/5 stars</p>
                </div>
              </div>
            </div>

            {/* Third Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JX8-Sjl3IPkwIqd2-4tfn8wc6ghPnCc~I~40xFq3NaRbU51mLZk7EgY-IYjSrxmvUW-AZ2qAvVT6XRX1GVkSbQNexW-LeKUJinA15jQV0V3sZOyDBR-eH9OhWKD~eAY0Fx~UbnDq2T9j4loZq4aBrQHtSokAYtI1ITJh3DTzyI2hVhnNVgY0WucsXEM8~MqsgUf96BR~R8qf1yGAtXv7llMgLWAKQUXRqm~z1EFdX3ogMthMJHv9-7oOHyHf0--GH65n2~RXynpVt5YpUdLFjaAEACfXph5mxjjjham4iSWYagzJ5CYgn8YQYjUKwmQ3VLdaqYuSrPwZy0QokF~63w__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  LOOSE FIT BERMUDA SHORTS
                  </h1>
                  <p className="text-gray-900 font-bold">$80</p>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    </div>
                  <p className="text-gray-900 text-sm mt-2">3.0/5 stars</p>
                </div>
              </div>
            </div>

            {/* Fourth Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/f180/c768/08e2ff8a46be56aa933f031aed3abe75?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7Rsk58lMFQNReaimP1Zgma3qR4E5zZL0P9g0FP5qCxjJmKmLZQZO0-T1gE~DZtxDSNwjpojfVaWMfsk8LMh~yGe6Ax1lZL28CAUQFWQxG2wmoX0MbCYvzqNfROU3pLynuV-xYT85wahFypLHoTkUqu0rEgW6PF-N3wo1rbEdf~Nu1Y38CuuhVLimPXcA0IH7g1v4hWDnKTZa6TXEsvHjotWflN5IuLbkpwc6yNlrAX6UBf1Zr07j4359WWJvkRliUE2h1LeH69GLsw6pAk1thdrak~4kbXA9ryuETzVP8V-6GUzLXjnsCZj358MmOM0ue9mqzWp3ia6389zAnJajg__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  FADED SKINNY JEANS
                  </h1>
                  <p className="text-gray-900 font-bold">$210</p>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">4.5/5 stars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-black bg-white hover:bg-white hover:text-blue-400 w-16px">View All</button>
        </div>
      </section>   
   </div>
  );
}
