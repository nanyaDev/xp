import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className='flex flex-col items-stretch relative'>
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
    <header className="py-6 w-full flex flex-col items-center bg-black/40 absolute">
      <div className="max-w-screen-2xl w-full px-8 flex flex-row justify-between items-center">
        <Image alt="" src="/images/logo.png" width="64" height="64" />
        <div className='flex flex-row justify-between items-center gap-12'>
          <div className="font-body text-xs font-light">Upcoming Events</div>
          <div className="font-body text-xs font-light">Sell Your Tickets</div>
          <div className="font-body text-xs flex flex-row items-center gap-2">
            <span className="font-body text-xs font-light">Join Discord</span>
            <Image alt="" src="/images/discord.png" width="30" height="30" />
          </div>
          <button className="px-4 py-2 font-body text-xs font-semibold border border-light-beige rounded-lg bg-dark/75 backdrop-blur-md">Connect Wallet / Sign In</button>
        </div>
      </div>
    </header>
  )
}

const Splash = () => {
  return (
    <section className="flex flex-col items-center relative">
      <Image alt="" src="/images/background.png" objectFit="cover" fill className="-z-10" />
      <div className="max-w-screen-2xl w-full px-8 flex flex-col items-stretch">
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
                <button className="px-8 py-4 flex flex-row gap-2 items-center border border-white/25 rounded-lg bg-white/20 backdrop-blur-md">
                  <p className="font-body font-semibold text-sm">Request Early Access</p>
                </button>
                <p className="font-body font-extralight text-sm underline underline-offset-4 decoration-0">or, connect wallet if you have an XP chip</p>
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="flex-1 p-16 flex">
                <div className="flex-1 relative">
                  <Image alt="" src="/images/xp_tiles.png" fill objectFit="contain" objectPosition="center"/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-stretch">
            <h3 className="font-display text-center">FEATURED ON</h3>
            <div className="px-16 py-6 flex flex-row justify-evenly items-center border border-white/25 rounded-lg bg-white/20 backdrop-blur-md">
              <Image alt="" src="/images/tensor_with_text.svg" height={27} width={99} />
              <Image alt="" src="/images/solana_with_text.svg" height={14} width={98} />
              <Image alt="" src="/images/tensor_with_text.svg" height={27} width={99} />
              <Image alt="" src="/images/solana_with_text.svg" height={14} width={98} />
              <Image alt="" src="/images/tensor_with_text.svg" height={27} width={99} />
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
    <section className='min-h-screen py-16 flex flex-col gap-8 justify-center items-stretch bg-darkest overflow-hidden'>
      <div className="flex flex-col items-center gap-2">
        <p className="font-display text-4xl glow-lg">RECENTLY LISTED ON XP</p>
        <p className="font-body font-light text-xs"><span className="underline underline-offset-2 decoration-0">Sign in</span> to view all avaiable tickets</p>
      </div>
      <Carousel1>
        <EventCard name="THE OFFSPRING" location="Soldier Field" price={130} imageSrc="/images/the_offspring.jpg" />
        <CityCard city="CHICAGO" ticketCount={7290} icon="/images/chicago.png" />
        <EventCard name="LAKERS VS. WARRIORS" location="Saratoga" price={130} imageSrc="/images/lakers_vs_warriors.jpg" />
        <EventCard name="KENDRICK LAMAR" location="Soldier Field" price={130} imageSrc="/images/kendrick_lamar.jpg" />
      </Carousel1>
      <Carousel2>
        <EventCard name="BLACKHAWKS VS. FLAMES" location="Saratoga" price={130} imageSrc="/images/blackhawks_flames.jpg" />
        <EventCard name="ARIANA GRANDE" location="Saratoga" price={130} imageSrc="/images/ariana_grande.jpg" />
        <CityCard city="NEW YORK" ticketCount={7290} icon="/images/new_york.png" />
        <EventCard name="MANUEL TURIZO" location="Saratoga" price={130} imageSrc="/images/manuel_torizo.jpg" />
      </Carousel2>
      <Carousel3>
        <CityCard city="MIAMI" ticketCount={7290} icon="/images/miami.png" />
        <EventCard name="DAVE CHAPPELLE" location="Saratoga" price={130} imageSrc="/images/dave_chappelle.jpg" />
        <EventCard name="DJOKOVIC VS. ALCARAZ" location="Saratoga" price={130} imageSrc="/images/djokovic.jpg" />
        <EventCard name="NATE BARZGATE" location="Saratoga" price={130} imageSrc="/images/nate_barzgate.webp" />
      </Carousel3>
    </section>
  )
}

interface Carousel1Props {
  children: React.ReactNode;
}

const Carousel1 = ({ children }: Carousel1Props) => {
  return (
    <div className={`flex-1 flex flex-row justify-between items-stretch gap-6 animate-slide-1`}style={{ width: '200vw' }}>
      { children }
      { children }
    </div>
  )
}

interface Carousel2Props {
  children: React.ReactNode;
}

const Carousel2 = ({ children }: Carousel2Props) => {
  return (
    <div className={`flex-1 flex flex-row justify-between items-stretch gap-6 animate-slide-2`}style={{ width: '200vw' }}>
      { children }
      { children }
    </div>
  )
}

interface Carousel3Props {
  children: React.ReactNode;
}

const Carousel3 = ({ children }: Carousel3Props) => {
  return (
    <div className={`flex-1 flex flex-row justify-between items-stretch gap-6 animate-slide-3`}style={{ width: '200vw' }}>
      { children }
      { children }
    </div>
  )
}

interface CityCardProps {
  city: string;
  ticketCount: number;
  icon: string;
}


const CityCard = ({ city, ticketCount, icon }: CityCardProps) => {
  return (
    <div className="max-w-md lg:max-w-xl w-full p-8 flex flex-col justify-between border border-light-beige rounded-xl bg-darker shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/50">
      <div className="basis-1/2 pb-3 flex flex-row justify-end items-stretch">
        <div className="basis-1/4 relative">
          <Image alt="" src={icon} fill objectFit="contain" objectPosition="top right" style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
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
            <Image alt="" src="/images/arrow.png" fill objectFit="contain" objectPosition="left" style={{ filter: 'drop-shadow(0 0 40px rgba(247, 240, 199, 0.75))'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

interface EventCardProps {
  name: string;
  location: string;
  price: number;
  imageSrc: string;
}

const EventCard = ({ name, location, price, imageSrc  }: EventCardProps) => {
  return (
    <div className="max-w-md lg:max-w-xl w-full flex flex-col border border-light-beige rounded-lg bg-darker overflow-hidden shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/50">
      <div className="flex-1 relative">
        <Image alt="" src={imageSrc} fill objectFit="cover" objectPosition="top" />
        <div className="flex flex-col border border-beige rounded-md absolute bottom-4 left-4 bg-dark/50 shadow-md shadow-black/25">
          <div className="font-display text-center border-b" style={{ fontSize: '6px' }}>SEP</div>
          <div className="px-1.5 font-display text-lg text-center">13</div>
        </div>
      </div>
      <div className="px-6 py-4 flex flex-col gap-2">
        <h3 className="font-display text-md">{name}</h3>
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-body text-sm font-light">{location}</h3>
          <h3 className="flex flex-row items-center gap-2 font-body text-xs">
            <span className="text-sm font-light">from</span>
            <div className="flex flex-row gap-1">
              <Image alt="" src="/images/usdc.svg" height={18} width={18} />
              <span className="text-sm font-bold text-green-500"><span className="tracking-tighter">${price}</span> USDC</span>
            </div>
            <Image alt="" src="/images/chevron.svg" height={12} width={12} />
          </h3>
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
          <EventCard name="ARIANA GRANDE" location="Saratoga" price={504} imageSrc="/images/ariana_grande.jpg" />
          <div className="flex flex-col gap-5 relative">
            <div className="px-7 py-4 flex flex-row justify-between items-center border border-red-600 rounded-lg" style={{backgroundColor: '#271212'}}>
              <span className="font-body text-xs text-red-600 glow-red">TICKETMASTER</span>
              <span className="font-display text-xl font-extrabold leading-2 text-red-600 glow-red">$654.85</span>
            </div>
            <div className="px-7 py-4 flex flex-row justify-between items-center border border-red-600 rounded-lg" style={{backgroundColor: '#271212'}}>
              <span className="font-body text-xs text-red-600 glow-red">VIVID SEATS</span>
              <span className="font-display text-xl font-extrabold leading-2 text-red-600 glow-red">$654.85</span>
            </div>
            <div className="px-7 py-4 flex flex-row justify-between items-center border border-red-600 rounded-lg" style={{backgroundColor: '#271212'}}>
              <span className="font-body text-xs text-red-600 glow-red">TICKPICK</span>
              <span className="font-display text-xl font-extrabold leading-2 text-red-600 glow-red">$550.00</span>
            </div>
            <div className="px-7 py-4 flex flex-row justify-between items-stretch border border-green-600 rounded-lg" style={{backgroundColor: '#113823'}}>
              <span className="flex-1 relative -m-2">
                <Image alt="" src="/images/logo.png" fill objectFit="contain" objectPosition="left" />page
              </span>
              <span className="font-display text-xl font-extrabold leading-2 text-green-400 glow-green">504.00 USDC</span>
            </div>
            <p className="font-body text-sm font-light text-light-beige absolute -bottom-12 w-full text-center">SNAPSHOT TAKEN AT 15:32PM, AUG 8, 2023</p>
          </div>
        </div>
        <div className="basis-3/5 max-w-3xl px-16 py-10 flex flex-col gap-8 items-start rounded-xl bg-darker border border-light-beige">
          <h3 className="font-display text-4xl glow-lg">
            YOU&apos;RE GETTING<br /> 
            HUSTLED BY WEB2<br /> 
            TICKET SITES
          </h3>
          <p className="font-body text-sm font-light leading-7 glow-md">Maybe you paid way too much for your girlfriend&apos;s Taylor Swift tickets. Or, maybe you got scammed by those Lollpalooza tickets on Facebook, which you <span className="font-semibold italic">knew</span> seemed shady but were too cheap to pass up.</p>
          <p className="font-body text-sm font-light leading-7 glow-md">XP gives you 100% authenticated tickets at the fairest most transparent prices by porting verified tickets from Web2 onto the blockchain using our proprietary <span className="underline underline-offset-2">Tamperproof technology</span>.</p>
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
        <p className="font-body text-sm font-light">An exclusive community of fans with access to <span className="font-semibold">32,801 tickets</span> in <span className="font-semibold">89 cities</span> awaits</p>

      </div>
      <div className="w-full flex flex-row justify-center items-stretch gap-6">
        <OptionsCard optionNumber={1} introText="BUY AN XP CHIP ON" title="TENSOR" icon="/images/tensor.png" />
        <p className="flex flex-col justify-center font-body">OR</p>
        <OptionsCard optionNumber={2} introText="JOIN OUR" title="WAITLIST" icon="/images/xp.png" />
      </div>
    </section>
  )
}

interface OptionsCard {
  optionNumber: number;
  introText: string;
  title: string;
  icon: string;
}

const OptionsCard = ({ optionNumber, introText, title, icon }: OptionsCard) => {
  return (
    <div className="h-64 max-w-lg w-full p-8 flex flex-col justify-between border border-light-beige rounded-xl bg-darker shadow-lg shadow-black/25">
      <div className="basis-1/2 flex flex-row justify-between items-start relative">
          <p className="font-body text-md font-light">OPTION {optionNumber}</p>
          <div className="h-8 flex-1 relative">
            <Image alt="" src={icon} fill objectFit="contain" objectPosition="right" className="glow-icon" />
          </div>
      </div>
      <div className="basis-1/2 flex flex-col justify-end gap-3">
        <p className="font-body text-sm font-light">{introText}</p>
        <div className="flex flex-row justify-start items-stretch gap-4">
          <h3 className="font-display text-4xl underline underline-offset-8" style={{textShadow: '0px 0px 40px rgba(247, 240, 199, 0.75)'}}>{title}</h3>
          <div className="flex-1 relative">
            <Image alt="" src="/images/arrow.png" fill objectFit="contain" objectPosition="left" style={{ filter: 'drop-shadow(0 0 40px rgba(247, 240, 199, 0.75))'}}/>
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
        <Image alt="" src="/images/xp_vertical.png" width={96} height={96} className="self-center mr-16" style={{ filter: 'drop-shadow(0 0 40px rgba(247, 240, 199, 0.75))'}}/>
        <div className="flex flex-col gap-6">
          <p className="font-display">XP TICKETS</p>
          <p className="font-body text-sm font-light">About XP</p>
          <p className="font-body text-sm font-light">Upcoming Events</p>
          <p className="font-body text-sm font-light">Sell Your Tickets</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row gap-4">
            <Image alt="" src="/images/twitter.png" width={32} height={32} style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
            <Image alt="" src="/images/discord.png" width={32} height={32} style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
            <Image alt="" src="/images/threads.png" width={32} height={32} style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
            <Image alt="" src="/images/discord.png" width={32} height={32} style={{ filter: 'drop-shadow(0 0 30px rgba(247, 240, 199))'}}/>
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
