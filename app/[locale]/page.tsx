import Image from "next/image";

import placeHolderAbout from "@/public/images/placeholder-about.jpg";

export default function Home() {
  return (
    <div className="min-h-dvh flex-1">
      <header className="relative h-[calc(100dvh-80px)]">
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-center text-4xl text-white sm:text-5xl md:text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
      </header>

      <section className="container py-14">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="w-full space-y-2 lg:w-1/2">
            <div>
              <span className="text-lg font-semibold uppercase text-muted">
                About
              </span>
              <h2 className="text-3xl md:text-4xl">Welcome to Chamana</h2>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              autem veritatis accusamus exercitationem minus quae voluptatibus
              repudiandae consequuntur veniam vel eos voluptate culpa illo
              blanditiis, eius nostrum perferendis ipsam earum similique in
              quis, dolorum obcaecati iusto! Inventore, sit? Quae dignissimos
              facere amet harum labore nulla error architecto dolorum illum
              optio. Esse, consequuntur aliquam! Cum, voluptatibus? Explicabo
              provident, sequi tenetur, error quidem doloribus enim quis ipsam
              sed libero soluta atque nostrum voluptatem, vitae veniam.
            </p>
          </div>
          <Image
            src={placeHolderAbout}
            objectFit="cover"
            quality={100}
            alt="Placeholder about"
            className="rounded-sm"
          />
        </div>
      </section>
    </div>
  );
}
