
import './App.css'

function App() {

  return (
    <>
     <header>
      <div className='banner'>
        <div className='banner-container'>
          <span>Make the switch to Bitwarden with this helful resource</span>
        </div>
      </div>
      <nav className='header-container'>
      <div className='nav-left'>
        <h1>bitwarden</h1>
        <ul>
          <li><a href=''>Personal</a></li>
          <li><a href=''>Business</a></li>
          <li><a href=''>Developers</a></li>
          <li><a href=''>Pricing</a></li>
          <li><a href=''>Help</a></li>

        </ul>
      </div>

      <div >
        <ul className='nav-right'>
        <li><a href=''>Business Sales</a></li>
        <li><a href=''>Get Started</a></li>
        <li><a href=''>Log In</a></li>

      </ul>
      </div>
      </nav>
     </header>
<main>
     <section>
      <div className='hero'>
        <div className='hero-container'>
        <h1>Move fast and securely with the password manager trusted
          by millions.
        </h1>
        <p>Drive collaboration,boost productivity,and experience the power of open
          source with Bitwarden, the easiest way to secure all your passwords and sensitive information
        </p>
        <a href=''>Get Started Today</a>
        <a href=''>View Plans & Pricing</a>
</div>
      </div>
     </section>

<div className='learnmore-banner'>
<div>
  <span>Bitwarden Passwordless.dev is now available!
    <a href=''>Learn more</a>
  </span>
</div>
</div>
     <section>
      <div>
        <div>
          <h2>Everything you need out of a password manager</h2>
          <div>
            <div>Easy</div>
            <div>Convienent</div>
            <div>Secure</div>

          </div>
        </div>
      </div>
     </section>
     
     <section>
      <div>
        <div>
          <h2>Bitwarden helps businesses run quickly and securely</h2>
        </div>
      </div>
     </section>

     <section>
      <div>
        <h2>Generate, consolidate, and autofill strong and secure passwords for all your accounts</h2>
      </div>
     </section>

     <section>
      <div>
        <h2>CHoose the plan that fits your needs</h2>
      </div>
     </section>

     <footer>
      <h3>Bitwarden</h3>
     </footer>
     </main>
    </>
  )
}

export default App
