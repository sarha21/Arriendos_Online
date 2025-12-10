import { CircleParking, MapPin, Toilet, Users, SearchCode } from "lucide-react"

export default function Hero() {
  return (
   <div className="min-h-screen w-full relative">
  <div
    className="absolute inset-0 -z-10"
    style={{
      background: "#ffffff",
      backgroundImage: `
        radial-gradient(
          circle at top center,
          rgb(127, 211, 228),
          transparent 50%
        )
      `,
      filter: "blur(300px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     <main className="min-h-screen">
      <div className="container mx-auto px-4 py-5 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-balance leading-tight">
                Encuentra tu lugar perfecto para vivir
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold mb-1">Alquiler</div>
                    <div className="text-sm text-muted-foreground truncate">Medellín</div>
                  </div>
                </div>

                {/* Bañoa*/}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <Toilet className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold mb-1">Baños</div>
                    <div className="text-sm text-muted-foreground">2</div>
                  </div>
                </div>

                {/* Parqueadero */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <CircleParking className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold mb-1">Parqueadero</div>
                    <div className="text-sm text-muted-foreground">N/A</div>
                  </div>
                </div>

                {/* Habitaciones*/}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold mb-1">Habitaciones</div>
                    <div className="text-sm text-muted-foreground">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative lg:h-[600px] h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Beautiful blue house with white trim"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
</div>
   
  )
}
