export default function Footer() {
  return (
    <footer className="text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-zinc-400 hover:text-zinc-500">
            <span className="sr-only">Debian</span>
            <img
              src="/images/openlogo-nd.svg"
              alt="Debian Logo"
              className="h-6 w-6 brightness-200"
            />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-zinc-400">
            Made with &#10084;&#65039; in the &#127758; by{' '}
            <a className="underline" href="https://oxy.so">
              Oxy
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
