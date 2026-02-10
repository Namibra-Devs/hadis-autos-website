import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kwame Mensah',
      location: 'Accra, Ghana',
      text: 'Hadi\'s Motors made importing my first car from Canada incredibly smooth. The transparency and communication were excellent!',
      rating: 5,
      image: '/images/testimonial/person1.jpg',
    },
    {
      name: 'Ama Asante',
      location: 'Kumasi, Ghana',
      text: 'Professional service from start to finish. The vehicle arrived exactly as described. Will definitely use them again.',
      rating: 5,
      image: '/images/testimonial/person2.jpg',
    },
    {
      name: 'Kofi Boateng',
      location: 'Takoradi, Ghana',
      text: 'Saved me thousands compared to local prices. The shipping process was handled perfectly. Highly recommended!',
      rating: 5,
      image: '/images/testimonial/person1.jpg',
    },
  ]

  return (
    <section className="bg-primary-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from satisfied customers who have imported vehicles with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials