export default function Home() {
  return (
    <main className='flex flex-col items-stretch'>
      <header className='absolute w-full flex flex-row justify-between items-center'>
        <div>XP LOGO</div>
        <div className='flex flex-row justify-between items-center gap-8'>
          <div>Upcoming Events</div>
          <div>Sell Your Tickets</div>
          <div>Join Discord</div>
          <div>Connect Wallet / Sign In</div>
        </div>
      </header>
      <section className='min-h-screen flex flex-col justify-center items-center bg-red-200'>
        <p>FIND VERIFIED TICKETS - MINUS JUNK FEES</p>
        <h1>WELCOME TO XP</h1>
        <h3>XP is an event marketplace created for fans - by fans. With thousands of tickets already available, we’re opening early access to select fans</h3>
        <div>
          <p>GOT AN XP CHIP FROM TENSOR?</p>
          <p>Connect your wallet to unlock early access to XP and get an XP Cash reward. You can use XP Cash to get tickets to your favorite live events!</p>
          <button>Connect Wallet</button>
        </div>
        <button>XP Request Early Access</button>
      </section>
      <section className='min-h-screen flex flex-col justify-center items-center bg-green-200'>
        <p>RECENTLY LISTED</p>
        <p>Request early access to view all available tickets</p>
      </section>
      <section className='min-h-screen flex flex-col justify-center items-center bg-blue-200'>
        <p>32,874 TICKETS ACROSS 90 CITIES</p>
        <p>JOIN A COMMUNITY OF EXCLUSIVE BUYERS AND SELLERS</p>
        <div className='flex flex-row'>
          <div>
            <p>THE EXCHANGE</p>
            <p>Buy and sell tickets 100% securely within the XP community. Tickets are 100% verified by XP on the public ledger. Transactions happen instantly on-chain.</p>
          </div>
          <div>
            <p>THE CONCIERGE</p>
            <p>Even if what you’re looking for isn’t on the exchange, XP can help. Leverage our network of ticket brokers to find the exact tickets you need.</p>
            <button>XP Request Early Access</button>
          </div>
        </div>
      </section>
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
    </main>
  )
}
