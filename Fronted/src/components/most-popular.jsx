import { Star } from "lucide-react"

export default function MostPopular() {
  return (
  <section className="bg-white py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ultimas propiedades</h2>
              <p className="text-muted-foreground max-w-md">
                Descubre las propiedades en tu sector.
              </p>
            </div>
            <button variant="ghost" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
              Ver Todo
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Hotel 1 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Danubius Hotel Regents Park"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-emerald-600 font-medium">London NW8 7JT England</div>
                <h3 className="text-xl font-bold">Danubius Hotel Regents Park</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">$200</span>
                    <span className="text-muted-foreground">Par Night</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                    ))}
                    <span className="ml-1 text-sm font-medium">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel 2 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="The Resident Soho"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-emerald-600 font-medium">London NW8 7JT England</div>
                <h3 className="text-xl font-bold">The Resident Soho</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">$200</span>
                    <span className="text-muted-foreground">Par Night</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                    ))}
                    <span className="ml-1 text-sm font-medium">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel 3 */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="London Bridge Hotel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <div className="text-sm text-emerald-600 font-medium">London NW8 7JT England</div>
                <h3 className="text-xl font-bold">London Bridge Hotel</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">$200</span>
                    <span className="text-muted-foreground">Par Night</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                    ))}
                    <span className="ml-1 text-sm font-medium">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}