
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
        <div className='salepitch-container'>
          <h2>Everything you need out of a password manager</h2>
          <div className='salepitch-inner-container'>

            <div>
              <h4>Easy</h4>
              <p className='secondary-title'>Powerful security within minutes</p>
              <p>For those who want to do more,secure more, and collaborate more, Bitwarden is fast and easy to set up for both individuals and businesses.</p>
            </div>

            <div>
              <h4>Convienent</h4>
              <p  className='secondary-title'>Unlimited passwords, unlimited devices</p>
              <p>Cross platform access for mobile, browser, and desktop apps. Supported in over 50 languages.</p>
            </div>

            <div>
              <h4>Secure</h4>
              <p  className='secondary-title'>Protect what's important to you</p>
              <p>Zero knowledge, end-to-end encryption guides the Bitwarden open source approach to trust, accountability, and security.</p>
            </div>

          </div>
        </div>
      </div>
     </section>
     
     <section>
      <div className='customers'>
        <div className='customers-container'>
          <h2>Bitwarden helps businesses run quickly and securely</h2>
          <div className='customers-inner-container'>

            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum odio cum</p>
              <a href=''>Read More</a>
            </div>

            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum odio cum</p>
              <a href=''>Read More</a>
            </div>

            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum odio cum</p>
              <a href=''>Read More</a>
            </div>

          </div>
        </div>
      </div>
     </section>
<div className='trial-banner'>
  <div className='trial-banner-container'>
    <h2>Work more productively and power up your protection</h2>
    <a className='trial-button' href=''>Start an Enterprise Trial</a>
  </div>
</div>
     <section>
      <div className='features-container'>
        <div>
          <h2>Generate, consolidate, and autofill strong and secure passwords for all your accounts</h2>
          <p>Bitwarden gives you power to create and manage unique passwords, so you can strengthen privacy and boost productivity online from any device or location.</p>
          <a href=''>How Bitwarden Works</a>
        </div>

        <div>
          <h2>Securely share encrypted information directly with anyone</h2>
          <p>Bitwarden Send is a feature that allows all users to transmit data directly to others, while maintaining end-to-end encrypted security and limiting exposure.</p>
          <a href=''>About Bitwarden send</a>
        </div>

        <div>
          <h2>Protect more than your passwords</h2>
          <p>Store all types of sensitive data, transmit it securely to anyone, access vault health reports—and much more.</p>
        </div>

        <div>
          <h2>Gain peace of mind with comprehensive compliance</h2>
          <p>Protect your online data using a password manager you can trust. Bitwarden conducts regular third-party security audits and is compliant with GDPR, SOC 2, HIPAA, Privacy Shield, and CCPA standards.</p>
          <a href=''>More on Security & Compliance</a>
        </div>
      </div>
     </section>
     <div className='report'>
  <div className='report-container'>
    <h5>451 Research PDF Download</h5>
    <h4>2022 Enterprise Password Management Report</h4>
    <a className='report-button' href=''>Start an Enterprise Trial</a>
  </div>
</div>
     <section>
      <section>
        <h2>Choose the plan that fits your needs</h2>
        <div>
          <button>Business</button>
          <button>Personal</button>
        </div>
        <div>
          <div>
            Pricing shown in USD and based on an annual subscription.
          <div>
            <article>
              <h3>Teams Organization</h3>
            </article>
            <article>
              <h3>Enterprise Organization</h3>
            </article>

          </div>
          </div>
        </div>
      </section>
      <div>
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
