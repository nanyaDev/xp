import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col items-stretch relative'>
      <Image src="/images/background.webp" alt="colorful background with gradients" fill className="-z-10" />
      <Header />
      <Splash /> 
      <Carousels />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  )
}

const Header = () => {
  return (
    <header className='absolute w-full flex flex-row justify-between items-center bg-black'>
      <Image src="/images/logo.png" alt="XP Logo" width="64" height="64" />
      <div className='flex flex-row justify-between items-center gap-24'>
        <div className="font-body font-extralight">Upcoming Events</div>
        <div className="font-body font-extralight">Sell Your Tickets</div>
        <div className="font-body flex flex-row items-center gap-2">
          <span className="font-body font-extralight">Join Discord</span>
          <Image src="/images/discord.png" alt="Discord Logo" width="64" height="64" />
        </div>
        <div className="font-body font-extralight">Connect Wallet / Sign In</div>
      </div>
    </header>
  )
}

const Splash = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="max-w-screen-2xl w-full flex flex-col items-stretch">
        <div className='min-h-screen py-16 flex flex-col items-stretch'>
          <div className="flex-1 flex flex-row items-stretch">
            <div className="flex-1 flex flex-col justify-center items-start gap-8">
              <h1 className="font-display text-6xl glow-lg">
                BUY<br /> 
                DRAKE TICKETS<br /> 
                WITHOUT THE<br /> 
                JUNK FEES
              </h1>
              <p className="font-body font-extralight text-sm">
                By bringing tickets onto the blockchain, XP is cutting out the<br /> 
                middlemen to provide the fairest ticket prices on the web.
              </p>
              <div className="flex flex-col items-start gap-3">
                <button className="px-8 py-4 flex flex-row gap-2 items-center border border-white/25 rounded-lg bg-white/20">
                  <p className="font-body font-semibold text-sm">Request Early Access</p>
                </button>
                <p className="font-body font-extralight text-sm underline underline-offset-4 decoration-0">or, connect wallet if you have an XP chip</p>
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 p-16 flex">
                <div className="flex-1 relative">
                  <Image src="/images/xp_tiles.png" alt="XP tiles" fill objectFit="contain" objectPosition="center"/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-stretch">
            <h3 className="font-display text-center">FEATURED ON</h3>
            <div className="px-16 py-6 flex flex-row justify-evenly items-center border border-white/25 rounded-lg bg-white/20">
              <Image src="/images/tensor_with_text.svg" height={27} width={99} />
              <Image src="/images/solana_with_text.svg" height={14} width={98} />
              <Image src="/images/tensor_with_text.svg" height={27} width={99} />
              <Image src="/images/solana_with_text.svg" height={14} width={98} />
              <Image src="/images/tensor_with_text.svg" height={27} width={99} />
            </div>
            <p className="text-center font-body font-extralight text-sm">For press or collab inquiries, <span className="underline underline-offset-4 decoration-0">contact us</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Carousels = () => {
  return (
    <section className='min-h-screen py-16 flex flex-col gap-8 justify-center items-stretch bg-darkest'>
      <div className="flex flex-col items-center gap-2">
        <p className="font-display text-4xl glow-lg">RECENTLY LISTED ON XP</p>
        <p className="font-body font-light text-xs"><span className="underline underline-offset-2 decoration-0">Sign in</span> to view all avaiable tickets</p>
      </div>
      <CarouselLeft>
        <EventCard name="THE OFFSPRING, SIMPLE PLAN & SUM 41" location="Soldier Field" price={130} imageSrc="/images/the_pretenders.jpg" />
        <CityCard city="CHICAGO" ticketCount={7290} icon="/images/chicago.png" />
        <EventCard name="PHISH" location="Saratoga" price={130} imageSrc="/images/the_pretenders.jpg" />
        <EventCard name="KENDRICK LAMAR" location="Soldier Field" price={130} imageSrc="/images/the_pretenders.jpg" />
      </CarouselLeft>
      <CarouselRight>
        <EventCard name="BLACKHAWKS VS. FLAMES" location="Saratoga" price={130} imageSrc="/images/chicago_bears.jpg" />
        <EventCard name="PHISH" location="Saratoga" price={130} imageSrc="/images/the_pretenders.jpg" />
        <CityCard city="NEW YORK" ticketCount={7290} icon="/images/new_york.png" />
        <EventCard name="MANUEL TURIZO" location="Saratoga" price={130} imageSrc="/images/manuel_torizo.jpg" />
      </CarouselRight>
      <CarouselLeft>
        <CityCard city="MIAMI" ticketCount={7290} icon="/images/miami.png" />
        <EventCard name="DAVE CHAPPELLE" location="Saratoga" price={130} imageSrc="/images/dave_chappelle.jpg" />
        <EventCard name="PHISH" location="Saratoga" price={130} imageSrc="/images/the_pretenders.jpg" />
        <EventCard name="NATE BARZGATE" location="Saratoga" price={130} imageSrc="/images/the_pretenders.jpg" />
      </CarouselLeft>
    </section>
  )
}

const CarouselLeft = ({ children }) => {
  return (
    <div className="flex-1 flex flex-row justify-between items-stretch gap-6 animate-slide-left" style={{ width: '200vw' }}>
      { children }
      { children }
    </div>
  )
}

const CarouselRight = ({ children }) => {
  return (
    <div className="flex-1 flex flex-row justify-between items-stretch gap-6 animate-slide-right" style={{ width: '200vw' }}>
      { children }
      { children }
    </div>
  )
}

const CityCard = ({ city, ticketCount, icon }) => {
  return (
    <div className="flex-1 p-8 flex flex-col justify-between border border-light-beige rounded-xl bg-darker shadow-lg shadow-black/25">
      <div className="basis-1/2 pb-3 flex flex-row justify-end items-stretch">
        <div className="basis-1/4 relative">
          <Image src={icon} fill objectFit="contain" objectPosition="top right" style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col justify-end gap-3">
        <div className="flex flex-col justify-end">
          <p className="font-body text-sm font-light">SEE ALL</p>
          <p className="font-body text-sm font-light">{ticketCount} TICKETS IN</p>
        </div>
        <div className="flex flex-row justify-start items-stretch gap-4">
          <h3 className="font-display text-4xl underline underline-offset-8 glow-lg">{city}</h3>
          <div className="flex-1 relative">
            <Image src="/images/arrow.png" fill objectFit="contain" objectPosition="left" style={{ filter: 'drop-shadow(0 0 40px rgba(247, 240, 199, 0.75))'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const EventCard = ({ name, location, price, imageSrc }) => {
  return (
    <div className="w-96 flex-1 flex flex-col border border-light-beige rounded-lg bg-darker overflow-hidden shadow-lg shadow-black/25">
      <div className="basis-3/5 relative">
        <Image src={imageSrc} alt="" fill objectFit="cover" objectPosition="top" />
      </div>
      <div className="basis-2/5 px-6 pt-5 pb-4">
        <h3 className="font-display text-xl">{name}</h3>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-body text-sm font-light">{location}</h3>
            <div className="flex flex-col">
              <h3 className="font-body text-xs">from</h3>
              <h3 className="font-body text-xs">{price} USDC</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Comparison = () => {
  return (
    <section className='min-h-screen p-16 flex flex-row justify-center items-center bg-darkest'>
      <div className="flex flex-row justify-center items-stretch gap-16">
        <div className="basis-2/5 max-w-md flex flex-col justify-between gap-4">
          <EventCard name="NATE BARZGATE" location="Saratoga" price={130} imageSrc="/images/the_pretenders.jpg" />
          <div className="flex flex-col gap-5">
            <div className="px-7 py-3 flex flex-row justify-between items-center border border-red-600 rounded-lg" style={{backgroundColor: '#271212'}}>
              <span className="font-body text-xs text-red-600" style={{textShadow: '0px 0px 40px rgba(255, 0, 0, 0.50)'}}>TICKETMASTER</span>
              <span className="font-body text-xl font-extrabold leading-2 text-red-600">$654.85</span>
            </div>
            <div className="px-7 py-3 flex flex-row justify-between items-center border border-red-600 rounded-lg" style={{backgroundColor: '#271212'}}>
              <span className="font-body text-xs text-red-600" style={{textShadow: '0px 0px 40px rgba(255, 0, 0, 0.50)'}}>TICKETMASTER</span>
              <span className="font-body text-xl font-extrabold leading-2 text-red-600">$654.85</span>
            </div>
            <div className="px-7 py-3 flex flex-row justify-between items-center border border-red-600 rounded-lg" style={{backgroundColor: '#271212'}}>
              <span className="font-body text-xs text-red-600" style={{textShadow: '0px 0px 40px rgba(255, 0, 0, 0.50)'}}>TICKETMASTER</span>
              <span className="font-body text-xl font-extrabold leading-2 text-red-600">$654.85</span>
            </div>
            <div className="px-4 py-2 flex flex-row gap-2 border border-green-500 rounded-md">
              <span>XP LOGO</span><span>$504.00</span>
            </div> 
            <div className="flex flex-row justify-center">
              <p className="font-body text-sm font-light text-light-beige">SNAPSHOT TAKEN AT 15:32PM, AUG 8, 2023</p>
            </div>
          </div>
        </div>
        <div className="basis-3/5 max-w-3xl px-16 py-10 flex flex-col gap-8 items-start rounded-xl bg-darker border border-light-beige">
          <h3 className="font-display text-4xl glow-lg">
            YOU'RE GETTING<br /> 
            HUSTLED BY WEB2<br /> 
            TICKET SITES
          </h3>
          <p className="font-body text-sm font-light leading-7 glow-md">Maybe you paid way too much for your girlfriend's Taylor Swift tickets. Or, maybe you got scammed by those Lollpalooza tickets on Facebook, which you knew seemed shady but were too cheap to pass up.</p>
          <p className="font-body text-sm font-light leading-7 glow-md">XP gibes you 100% authenticated tickets at the fairest most transparent prices by porting verified tickets from Web2 onto the blockchain using our proprietary Tamperproof technology.</p>
          <p className="font-display text-xl glow-lg">THIS IS THE WAY.</p>
          <p className="mt-8 font-display text-sm glow-lg underline underline-offset-2">WHY BLOCKCHAIN?</p>
        </div>
      </div>
    </section>
  )
}

const CTA = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center gap-8 bg-darkest'>
      <div className="flex flex-col items-center gap-2">
        <h4 className="font-display text-md glow-md">JOIN US AS WE BUILD</h4>
        <h3 className="font-display text-4xl glow-lg">GET EARLY ACCESS TO XP</h3>
        <p className="font-body text-sm font-light">An exclusive community of fans with access to 32,801 tickets in 89 cities awaits</p>
      </div>
      <div className="w-full flex flex-row justify-center items-stretch gap-6">
        <OptionsCard optionNumber={1} introText="BUY AN XP CHIP ON" title="TENSOR" icon="/images/tensor.png" />
        <p className="flex flex-col justify-center font-body">OR</p>
        <OptionsCard optionNumber={2} introText="JOIN OUR" title="WAITLIST" icon="/images/logo.png" />
      </div>
    </section>
  )
}

const OptionsCard = ({ optionNumber, introText, title, icon }) => {
  return (
    <div className="h-64 max-w-lg w-full p-8 flex flex-col justify-between border border-light-beige rounded-xl bg-darker shadow-lg shadow-black/25">
      <div className="basis-1/2 flex flex-row justify-between items-start relative">
          <p className="font-body text-md font-light">OPTION {optionNumber}</p>
          <Image src={icon} width={64} height={64} style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
      </div>
      <div className="basis-1/2 flex flex-col justify-end gap-3">
        <p className="font-body text-sm font-light">{introText}</p>
        <div className="flex flex-row justify-start items-stretch gap-4">
          <h3 className="font-display text-4xl underline underline-offset-8" style={{textShadow: '0px 0px 40px rgba(247, 240, 199, 0.75)'}}>{title}</h3>
          <div className="flex-1 relative">
            <Image src="/images/arrow.png" fill objectFit="contain" objectPosition="left" style={{ filter: 'drop-shadow(0 0 40px rgba(247, 240, 199, 0.75))'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='h-96 flex flex-col bg-darker px-24 border-t border-light-beige'>
      <div className='flex-1 flex flex-row justify-start items-center gap-12 border-b border-light-beige'>
        <Image src="/images/xp_vertical.png" width={96} height={96} className="self-center mr-16" style={{ filter: 'drop-shadow(0 0 40px rgba(247, 240, 199, 0.75))'}}/>
        <div className="flex flex-col gap-6">
          <p className="font-display">XP TICKETS</p>
          <p className="font-body text-sm font-light">About XP</p>
          <p className="font-body text-sm font-light">Upcoming Events</p>
          <p className="font-body text-sm font-light">Sell Your Tickets</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4">
            <Image src="/images/twitter.png" width={32} height={32} style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
            <Image src="/images/discord.png" width={32} height={32} style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
            <Image src="/images/threads.png" width={32} height={32} style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
            <Image src="/images/discord.png" width={32} height={32} style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
          </div>
          <p className="font-body text-sm font-light">Tamperproof</p>
          <p className="font-body text-sm font-light">Captain Labs</p>
          <p className="font-body text-sm font-light">Contact Us</p>
        </div>
        <div className='flex-1 flex flex-row justify-end'>
          <div className="max-w-md w-full flex flex-col gap-3">
          <p className="font-display text-xl">STAY IN THE KNOW</p>
            <input type='text' placeholder='Name' className="px-5 py-2.5 rounded-lg bg-dark font-body text-sm font-light placeholder-beige border border-light-beige" />
            <input type='text' placeholder='Email' className="px-5 py-2.5 rounded-lg bg-dark font-body text-sm font-light placeholder-beige border border-light-beige" />
            <button className="py-4 rounded-lg bg-beige font-display text-dark">REQUEST EARLY ACCESS</button>
          </div>
        </div>
      </div>
      <div className='py-8 flex flex-row justify-center items-center'>
        <p className="font-body text-sm font-light">
          XP by Captain
          <span className="text-light-beige"> / 2023 All Rights Reserved</span>
        </p>
      </div>
    </footer>
  )
}
