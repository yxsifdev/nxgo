export default function HeaderUI() {
  return (
    <header className="flex justify-between p-4">
      <div className="flex items-center gap-x-2">
        <div>LOGO</div>
        <div className="text-3xl font-bold">NXGO</div>
      </div>
      <div>
        <a
          href="#"
          className="block px-4 py-2 font-medium border rounded bg-neutral-700/10 hover:bg-neutral-700/20 text-white/80 border-neutral-800"
        >
          Cerrar Sesión
        </a>
      </div>
    </header>
  );
}
