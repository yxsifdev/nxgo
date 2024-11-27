import VersionApp from "@/components/Version";
import GitHubIcon from "@/icons/GitHub";
import LoginIcon from "@/icons/Login";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen py-4">
      <div className="flex flex-col items-center gap-y-4">
        <div className="content-center font-bold text-center line-through rounded-full text-9xl">
          N
        </div>
        <h2 className="text-2xl font-bold tracking-wider">
          ¡BIENVENIDO A NXGO!
        </h2>
        <h2 className="max-w-xl text-lg text-center text-neutral-500">
          Que esperas para tener un mejor control de tus proyectos en GitHub,
          crea notas, marcalas como hechas, pendientes o faltantes, te aseguro
          que te ayudará. ✨
        </h2>
        <div className="flex flex-wrap w-full gap-2 sm:flex-nowrap">
          <a
            href=""
            className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-white transition-colors border rounded-sm hover:bg-neutral-800/40 bg-neutral-800/30 border-neutral-800 gap-x-2"
          >
            <GitHubIcon className="stroke-white" />
            Repositorio
          </a>
          <a
            href=""
            className="inline-flex items-center justify-center w-full px-4 py-2 font-medium text-black transition-colors bg-white rounded-sm hover:bg-white/90 gap-x-2"
          >
            <LoginIcon className="stroke-neutral-900" />
            Iniciar Sesión
          </a>
        </div>
      </div>
      <VersionApp />
    </section>
  );
}
