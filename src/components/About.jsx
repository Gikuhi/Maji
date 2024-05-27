
const targets = [
  { element: document.getElementById('homesCount'), count: 21, suffix: 'K+' },
  { element: document.getElementById('engagementsCount'), count: 100, suffix: 'K+' },
  { element: document.getElementById('businessCount'), count: 10, suffix: 'K+' },
  { element: document.getElementById('partnersCount'), count: 8, suffix: '+' },
  { element: document.getElementById('instructorsCount'), count: 1, suffix: 'K+' }
];

// Find the maximum count among all targets
const maxCount = Math.max(...targets.map(target => target.count));

// Function to animate count-up effect
function animateCountUp(target, duration) {
  let currentCount = 0;
  const increment = Math.ceil(target.count / (duration / 10));

  const interval = setInterval(() => {
    currentCount += increment;
    if (currentCount >= target.count) {
      clearInterval(interval);
      currentCount = target.count;
      target.element.textContent = currentCount + target.suffix;
    } else {
      target.element.textContent = currentCount;
    }
  }, 10);
}

// Animate count-up for each target with adjusted duration
targets.forEach(target => {
  animateCountUp(target, maxCount / 100); // Adjust duration based on max count
});

export default function About(){

  document.title = "About"
    return<>
    {/* Navbar */}
    <div className="navbar bg-base-100">
  <div className="navbar-start">

    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/"><span className="menu-text">Home</span></a></li>
        <li><a href="/products"><span className="menu-text">Products</span></a></li>
        <li><a href="/solutions"><span className="menu-text">Solutions</span></a></li>
        <li><a href="/partners"><span className="menu-text">Partners</span></a></li>
        <li><a href="/case_study"><span className="menu-text">Case Study</span></a></li>
        <li><a href="/about"><span className="menu-text">About</span></a></li>
        <li><a href="/contact"><span className="menu-text">Contact</span></a></li>
        {/* <li><a href="/portal"><span className="menu-text">System Portal</span></a></li> */}
      </ul>
    </div>
  </div>
  <div className="navbar-center">
 <a className="w-fit h-fit btn btn-ghost text-xs">
    <a href="/"><img src="src/assets/images/majinet logo.png" alt="Logo"/></a>
    </a>
  </div>

  <div className="navbar-end ">
  <a href="/portal"><span className="menu-text text-lg">System Portal</span></a>
  </div>
</div>


    {/* About Us Pane */}
    <section className="bg-gray-100">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg">
                Majinet Smart Water Meter Systems Limited is a Kenyan company that specializes in supply installation support and maintenance of smart water meters. As the word “smart” implies, our
                meters are digital Internet of Things (IoT) devices and the reading is automated and done remotely via our own LORAWAN network, Safaricom NBIOT , Liquid Telecom LPWAN Sigfox network as well
                as other carriers available. Our ISO certified smart water meters transmit water consumption data remotely and are battery powered to last up to 16 years.
                <br/><br/><br/>
                Smart Ultrasonic water metering is the latest technology in the world of water management that <br/> now automates water management and consumption data bringing about efficiency and accuracy.
                For years, the mechanical meter has been the natural choice. But in today's digital world where the
                need for communication and connectivity increases by the day, Ultra Sonic Smart metering is the <br/> future and the advantages are many. The ultrasonic meter has no moving parts, contrary to the
                mechanical meters that rely on a moving pendant.
            
                    </p>
            </div>
            <div class="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>

        {/* Our mission */}
    <div className="bg-sky-800">
    <div className="">
    <img src="src/assets/images/about us&mission2.png" alt=""></img>
    {/* <img src="src/assets/images/mission photo.png" alt=""/> */}
    </div>
    </div>

        {/* Counters */}
        <div className="dark:bg-gray-900">
  <div className="pt-12 bg-gray-50 dark:bg-gray-900 sm:pt-20">
    <div className="pb-12 mt-10 bg-gray-50 dark:bg-gray-900 sm:pb-16">
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-gray-900"></div>
        <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-5">
            <div
                className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400" id="item-1">
                  Homes
                </dt>
                <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                  aria-describedby="item-1" id="homesCount">
                  0
                </dd>
              </div>
              <div
                className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400" id="item-1">
                  Engagements
                </dt>
                <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                  aria-describedby="item-1" id="engagementsCount">
                  0
                </dd>
              </div>
              <div
                className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400" id="item-1">
                  Business Saved
                </dt>
                <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                  aria-describedby="item-1" id="businessCount">
                  0
                </dd>
              </div>
              <div
                className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                  Partners
                </dt>
                <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                  id="partnersCount">
                  0
                </dd>
              </div>
              <div
                className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                  Certified Instructors
                </dt>
                <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                  id="instructorsCount">
                  0
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> 

    {/* Additional content pane  */}
    <div className="bg-amber-500 w-lvw h-lvw">
      <h4 className="text-lg text-center pt-3  ">From experiment to global movement</h4>
      <p className="text-base ml-3 pb-3"> Long-range telemetry technology is simple to deploy, 
        with no technical training or network configuration necessary. 
        <br/>Installation time is equivalent to that of standard water meters.</p>
    </div>

      {/* Footer */}
      <footer className="footer p-10 bg-base-300 text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a href="/products"className="link link-hover">Products</a>
    <a href="/solutions"className="link link-hover">Solutions</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a href="/about" className="link link-hover">About us</a>
    <a href="/contact" className="link link-hover">Contact</a>
    <a href="/case_study"className="link link-hover">Case Study</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.linkedin.com/company/majinet-smart-water-meters/about/">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      <a href="https://www.facebook.com/majinetsolutions/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg></a>
      <a href="https://twitter.com/Majinetsolution">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>      </a>
      <a href="https://www.instagram.com/majinetsolutions/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="24" width="24" fill="#000000"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
      </a>

    </div>
  </nav>
</footer>
    </>
}