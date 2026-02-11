export default function Features() {
  return (
    <div
      className="bg-zinc-800 py-24 sm:py-32 border-b border-zinc-700 drop-shadow-md"
      id="features"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-white">
              Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-300 sm:text-4xl">
              New in OxyOS 1.0
            </p>
            <p className="mt-6 text-base leading-7 text-zinc-200">
              A modern continuation of the lightweight, elegant desktop approach
              OxyOS is a minimal, elegant desktop Linux distribution. Still small, still fast, but now with
              newer packages!
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-zinc-200 sm:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-9">
              <dt className="font-semibold text-zinc-300">Debian 13 base</dt>
              <dd className="mt-2">
                Read more about Debian 13's major changes{' '}
                <a
                  className="font-semibold text-gray-100 hover:text-gray-400"
                  href="https://www.debian.org/releases/trixie/release-notes/"
                >
                  here
                </a>
                .
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="font-semibold text-zinc-300">Linux 6.12</dt>
              <dd className="mt-2">2025's LTS release of the Linux kernel.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="font-semibold text-zinc-300">Pipewire Support</dt>
              <dd className="mt-2">
                A new audio daemon that replaces PulseAudio, with better
                performance and lower latency. Read more{' '}
                <a
                  className="font-semibold text-gray-100 hover:text-gray-400"
                  href="https://wiki.debian.org/PipeWire"
                >
                  here
                </a>
                .
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="font-semibold text-zinc-300">Power Profiles</dt>
              <dd className="mt-2">
                Utilizing powerprofilesctl, you can now easily switch
                between performance and power saving modes, right from your Openbox menu.
              </dd>
            </div>
            <div className="relative pl-9">
              <dt className="font-semibold text-zinc-300">ARM64 / Snapdragon X</dt>
              <dd className="mt-2">
                Native support for ARM64 laptops including Snapdragon X Elite/Plus devices.
                Includes Qualcomm firmware tools, Mesa Freedreno GPU drivers, and EFI boot.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
