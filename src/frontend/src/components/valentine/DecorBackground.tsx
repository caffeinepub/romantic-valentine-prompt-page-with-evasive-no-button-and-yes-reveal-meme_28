export default function DecorBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Pastel gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50" />
      
      {/* Heart doodle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/assets/generated/heart-doodle-pattern-tile.dim_512x512.png)',
          backgroundSize: '256px 256px',
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  );
}
