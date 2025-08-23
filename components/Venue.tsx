const Venue = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-8 relative pb-3 uppercase">
          Venue
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-orange-300 rounded-full"></div>
        </h2>
        <div className="max-w-5xl mx-auto text-center mb-8">
          <p className="text-gray-600 text-justify mb-6 text-lg">
            The conference will be held at Manipal University Jaipur, a premier
            institution known for its state-of-the-art facilities and beautiful
            campus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/images/jaipur/MUJ_Venue.webm" type="video/webm" />
            </video>
          </div>

          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3533024187473!2d75.56271931501774!3d26.84588198315421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b996759e88e2b22!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1644827941051!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8">
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Address:</span> Manipal University Jaipur, Dehmi-Kalan, Near
            GVK Toll Plaza, Jaipur-Ajmer Express Highway, Jaipur, Rajasthan
            303007, India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Venue;
