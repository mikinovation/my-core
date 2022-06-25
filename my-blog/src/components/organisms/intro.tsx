import ExternalLink from "../atoms/external-link";

const Intro = () => {
  return (
    <section className="flex-col items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">
            Mikihiro Saito(齋藤 幹大)
        </h1>
        <p className="text-xl p-2">Akong trabaho software developer sa Bohol, Philippines</p>
<p className="text-xl p-2">フィリピン・ボホール島在住の人。日本・フィリピン・ベトナムでプログラマー時々PM</p>
        <p className="text-xl p-2">大学時代(2018年)からフィリピンへ移住したり、個人事業主として活動</p>
<p className="text-xl p-2">主にtoBの業務システムの開発をメインに携わっております</p>
        <hr className="my-6"/>
        <div>
            <p className="text-xl p-2">
                <label className="pr-2">Twitter :</label>
                <ExternalLink href="https://twitter.com/bohol_engineer" target="_blank" rel="noopener noreferrer">@bohol_engineer</ExternalLink>
            </p>
            <p className="text-xl p-2">
                <label className="pr-2">GitHub :</label>
                <ExternalLink href="https://github.com/mikinovation">mikinovation</ExternalLink>
            </p>
        </div>
    </section>
  )
}

export default Intro
