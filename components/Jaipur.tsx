import Image from "next/image";

const Jaipur = () => {
  const images = [
    "/images/jaipur/hawa-mahal.jpg",
    "/images/jaipur/amber-fort.jpg",
    "/images/jaipur/bapu-bazaar.jpg",
    "/images/jaipur/jantar-mantar.jpg",
    "/images/jaipur/nahargarh-fort.jpg",
  ];

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-8 relative pb-3 uppercase">
          About Jaipur
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-orange-300 rounded-full"></div>
        </h2>
        <div className="max-w-5xl mx-auto text-center mb-8">
          <p className="text-gray-600 text-justify mb-6 text-lg">
            Jaipur, famously known as the Pink City, is the vibrant capital of
            Rajasthan and a remarkable testament to Indian architecture and
            culture. Founded in 1727 by Maharaja Jai Singh II, the city enchants
            visitors with its majestic forts, opulent palaces, and bustling
            colorful markets. Seamlessly blending its rich historical heritage
            with modern amenities, Jaipur offers a captivating setting for both
            tourism and professional events. Its warm hospitality, stunning
            architecture, and lively atmosphere make it an ideal destination,
            providing an unforgettable backdrop for our conference.
          </p>
        </div>

        <div className="relative w-full overflow-hidden h-96">
          <div className="flex animate-scroll gap-4">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[450px] h-96 relative rounded-lg overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Jaipur Scene ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jaipur;
