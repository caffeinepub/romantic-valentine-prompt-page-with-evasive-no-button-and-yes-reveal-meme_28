export default function Gift1View() {
  const messages = [
    "I will always love you no matter what",
    "You are the best part of my life",
    "You will forever be my only option",
    "I can't imagine my life without you"
  ];

  return (
    <div className="relative">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="relative space-y-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-rose-600 text-center">
          For You 💐
        </h2>

        {/* Bouquet centerpiece */}
        <div className="flex justify-center animate-in zoom-in duration-500">
          <img 
            src="/assets/generated/rose-bouquet-ribbon.dim_1024x1024.png" 
            alt="Rose bouquet"
            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Message bubbles around bouquet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {messages.map((message, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-rose-200 animate-in slide-in-from-bottom duration-500"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <p className="text-rose-700 text-center font-medium text-lg">
                {message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
