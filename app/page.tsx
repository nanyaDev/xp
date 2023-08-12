import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col items-stretch relative'>
      <Image src="/images/background.webp" alt="colorful background with gradients" fill className="-z-10" />
      <Header />
      <Splash /> 
      <Carousels />
      <Comparison />
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
    <div className="flex flex-col items-center">
      <div className="max-w-screen-2xl w-full flex flex-col items-stretch">
        <section className='min-h-screen flex flex-col justify-around items-stretch'>
          <div>
            <div className="flex flex-row">
              <div className="flex-1 flex flex-col gap-4 items-start">
                <h1 className="font-display text-6xl">
                  BUY<br /> 
                  DRAKE TICKETS<br /> 
                  WITHOUT THE<br /> 
                  JUNK FEES
                </h1>
                <p className="font-body font-extralight text-sm">
                  By bringing tickets onto the blockchain, XP is cutting out the<br /> 
                  middlemen to provide the fairest ticket prices on the web.
                </p>
                <button className="px-8 py-4 flex flex-row gap-2 items-center border border-white/25 rounded-lg bg-white/25">
                  <p className="font-body font-semibold text-sm">Request Early Access</p>
                </button>
                <p className="font-body font-extralight text-sm">or, connect wallet if you have an XP chip</p>
              </div>
              <div className="flex-1 relative">
                <Image src="/images/xp_tiles.png" alt="XP tiles" fill />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-display">FEATURED ON</h3>
            <div className="py-4 px-12 flex flex-row gap-8 border border-white/25 rounded-lg bg-white/25">
              <div>TENSOR</div>
              <div>TENSOR</div>
              <div>TENSOR</div>
              <div>TENSOR</div>
              <div>TENSOR</div>
              <div>TENSOR</div>
              <div>TENSOR</div>
              <div>TENSOR</div>
            </div>
            <p className="font-body font-extralight text-sm">For press or collab inquiries, contact us</p>
          </div>
        </section>
      </div>
    </div>
  )
}

const Carousels = () => {
  return (
    <section className='min-h-screen flex flex-col gap-8 justify-center items-stretch bg-darkest'>
      <div className="flex flex-col items-center gap-2">
        <p className="font-display text-2xl">RECENTLY LISTED ON XP</p>
        <p className="font-body text-xs">Sign in to view all avaiable tickets</p>
      </div>
      <Carousel>
        <EventCard name="THE OFFSPRING, SIMPLE PLAN & SUM 41" location="Soldier Field" price={130} imageSrc="/images/the_pretenders.jpg" />
        <CityCard city="CHICAGO" ticketCount={7290} icon="/images/chicago.png" />
        <EventCard name="PHISH" location="Saratoga" price={130} imageSrc="/images/the_pretenders.jpg" />
        <EventCard name="KENDRICK LAMAR" location="Soldier Field" price={130} imageSrc="/images/the_pretenders.jpg" />
      </Carousel>
      <Carousel>
        <EventCard name="BLACKHAWKS VS. FLAMES" location="Saratoga" price={130} imageSrc="/images/chicago_bears.jpg" />
        <EventCard name="PHISH" location="Saratoga" price={130} imageSrc="/images/the_pretenders.jpg" />
        <CityCard city="NEW YORK" ticketCount={7290} icon="/images/new_york.png" />
        <EventCard name="MANUEL TURIZO" location="Saratoga" price={130} imageSrc="/images/manuel_torizo.jpg" />
      </Carousel>
      <Carousel>
        <CityCard city="MIAMI" ticketCount={7290} icon="/images/miami.png" />
        <EventCard name="DAVE CHAPPELLE" location="Saratoga" price={130} imageSrc="/images/dave_chappelle.jpg" />
        <EventCard name="PHISH" location="Saratoga" price={130} imageSrc="/images/the_pretenders.jpg" />
        <EventCard name="NATE BARZGATE" location="Saratoga" price={130} imageSrc="/images/the_pretenders.jpg" />
      </Carousel>
    </section>
  )
}

const Carousel = ({ children }) => {
  return (
    <div className="flex-1 flex flex-row justify-between items-stretch gap-6">
      { children }
    </div>
  )
}

const CityCard = ({ city, ticketCount, icon }) => {
  return (
    <div className="flex-1 p-8 flex flex-col justify-between border border-white rounded-xl bg-darker">
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
          <h3 className="font-display text-4xl underline underline-offset-8" style={{textShadow: '0px 0px 40px rgba(247, 240, 199, 0.75)'}}>{city}</h3>
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
    <div className="flex-1 flex flex-col border border-white/25 rounded-lg bg-darker overflow-hidden">
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
    <section className='min-h-screen flex flex-col justify-center items-center bg-gray-900'>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-row justify-center'>
          <div className="w-1/2">BIG ROTATING CUBE THING</div>
          <div className="flex flex-col gap-8 items-start">
            <h3 className="font-display text-4xl">YOU'RE GETTING HUSTLED BY WEB2 TICKET SITES</h3>
            <p className="font-body">Maybe you paid way too much for your girlfriend's Taylor Swift tickets. Or, maybe you got scammed by those Lollpalooza tickets on Facebook, which you knew seemed shady but were too cheap to pass up.</p>
            <p className="font-body">XP gibes you 100% authenticated tickets at the fairest most transparent prices by porting verified tickets from Web2 onto the blockchain using our proprietary Tamperproof technology.</p>
            <button>
              <p className="font-display text-md">LEARN MORE</p>
            </button>
          </div>
        </div>
        <div className="p-8 flex flex-col items-center gap-4 border border-white/25 rounded-lg bg-white/25">
          <h4 className="font-display">PRICE COMPARISON</h4>
          <p className="font-body">Bruce Springsteen, Sep 1, 2023 @ Metlife Stadium, NJ</p>
          <div className="flex flex-row gap-2">
            <div className="px-4 py-2 flex flex-row gap-2 border border-red-500 rounded-md">
              <span>TICKETMASTER</span><span>$654.85</span>
            </div>
            <div className="px-4 py-2 flex flex-row gap-2 border border-red-500 rounded-md">
              <span>VIVID SEATS</span><span>$654.85</span>
            </div>
            <div className="px-4 py-2 flex flex-row gap-2 border border-red-500 rounded-md">
              <span>TICKPICK</span><span>$550.00</span>
            </div>
            <div className="px-4 py-2 flex flex-row gap-2 border border-green-500 rounded-md">
              <span>XP LOGO</span><span>$504.00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className='bg-grey-200'>
      <div className='flex flex-row justify-between'>
        <div>XP LOGO VERTICAL</div>
        <div>
          <p>XP TICKETS</p>
          <p>Sell Your Tickets</p>
          <p>Upcoming Events</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <p>STAY IN THE KNOW</p>
          <p>DISCORD TWITTER LOGO</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p>GET EARLY ACCESS</p>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email '/>
          <button>KEEP ME UPDATED</button>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center'>
        <p>XP by Captain | 2023 All Rights Reserved</p>
      </div>
    </footer>
  )
}
