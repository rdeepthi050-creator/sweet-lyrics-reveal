
export default function Background() {
  return (
    <div className="absolute bg-[#0a040f] inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-pink-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-200 h-100 bg-rose-500/10 rounded-full blur-[150px]" />
    </div>
  );
};