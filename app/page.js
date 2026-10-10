import Image from "next/image"

// components
import ProblemComposer from "@/components/ProblemComposer"
import { ServicesBand, Thread, ClosingBand } from "@/components/HomeSections"

const Home = () => {
  return (
    <>
      <section className="pb-16 xl:pb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 xl:grid-cols-12 xl:items-end">
            <h1 className="text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.045em] xl:col-span-8">
              Tell me what is slowing you down.
            </h1>
            <div className="flex items-center gap-4 xl:col-span-4 xl:pb-2">
              <Image
                src="/assets/profile.png"
                priority
                width={144}
                height={144}
                alt=""
                className="h-20 w-20 shrink-0 rounded-full bg-black grayscale"
              />
              <p className="text-lg font-medium leading-snug">
                I am Andreas Alexander, a software developer in Jakarta. I build the app or tool that fixes it.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 xl:mt-14 xl:grid-cols-12 xl:items-start">
            <figure className="xl:col-span-7">
              <Image
                src="/assets/work/yatapos-mockup.png"
                priority
                width={1608}
                height={978}
                sizes="(min-width: 1200px) 670px, 100vw"
                className="h-auto w-full rounded-[28px] rounded-bl-md"
                alt="YataPOS cashier screen on a counter tablet, beside a barcode scanner and a receipt printer"
              />
              <figcaption className="mt-4 max-w-[34em] text-lg font-medium leading-snug">
                YataPOS, a point of sale app I built. Product catalog, barcode scanning, a cart, and cash, card, and e-wallet payments.
              </figcaption>
            </figure>
            <div className="xl:col-span-5">
              <ProblemComposer />
            </div>
          </div>
        </div>
      </section>

      <ServicesBand />
      <Thread />
      <ClosingBand />
    </>
  )
}

export default Home
