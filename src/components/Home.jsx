import { get } from '@vercel/edge-config';

export default function Home(){
    return<>
    {/* Navbar */}
<div className="navbar bg-base-100 container mx-auto">
  <div className="navbar-start flex justify-between w-full lg:w-auto">

    {/* Mobile Dropdown Menu */}
    <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/"><span className="menu-text">Home</span></a></li>
        <li><a href="/products"><span className="menu-text">Products</span></a></li>
        <li><a href="/solutions"><span className="menu-text">Solutions</span></a></li>
        <li><a href="/partners"><span className="menu-text">Partners</span></a></li>
        <li><a href="/case_study"><span className="menu-text">Case Study</span></a></li>
        <li><a href="/about"><span className="menu-text">About</span></a></li>
        <li><a href="/contact"><span className="menu-text">Contact</span></a></li>
      </ul>
    </div>
    
    {/* Laptop Menu */}
    <div className="dropdown hidden lg:flex space-x-4">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul tabIndex={0} className="menu menu-horizontal p-0 space-x-4">
        <li><a href="/"><span className="menu-text">Home</span></a></li>
        <li><a href="/products"><span className="menu-text">Products</span></a></li>
        <li><a href="/solutions"><span className="menu-text">Solutions</span></a></li>
        <li><a href="/partners"><span className="menu-text">Partners</span></a></li>
        <li><a href="/case_study"><span className="menu-text">Case Study</span></a></li>
        <li><a href="/about"><span className="menu-text">About</span></a></li>
        <li><a href="/contact"><span className="menu-text">Contact</span></a></li>
      </ul>
    </div>
  </div>

  <div className="navbar-center">
    <a className="w-fit h-fit btn btn-ghost text-xs">
      <a href="/"><img src="/images/majinet logo.png" alt="Logo" /></a>
    </a>
  </div>

  <div className="navbar-end">
    <a href="/portal"><span className="menu-text text-lg">System Portal</span></a>
  </div>
</div>
    
    {/* Carousel */}
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/images/carousel 1.1.png .jpeg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/images/carousel 2.1.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    <br/>
    <br/>
    {/* Partners Section */}
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Our Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-md sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <a href="https://liquid.tech/">
          <img
            className="col-span-2 max-h-24 w-full sm:max-h-12 sm:w-full object-contain lg:col-span-1"
            src="/images/liquid.png"
            alt="Liquid Tech"
          />
          </a>

          <a href="https://www.shengdawatermeter.com/?gad_source=1&gclid=Cj0KCQiA2KitBhCIARIsAPPMEhK0EpBMWw6Hxi8iKO2en1WJdwfKKBm_kQSuTWkwac_BzrlqoS1jzaYaAm5rEALw_wcB">
          <img
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            src="/images/shengda.png"
            alt="Shengda Water Meter"
          />
          </a>

         <a href="https://www.netpaq.co.ke/">
          <img
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            src="/images/netpaq.png"
            alt="Netpaq"
          />
          </a>

          <a href="https://www.safaricom.co.ke/">
          <img
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            src="/images/safcom.png"
            alt="Safaricom"
          />
          </a>

         <a href="https://www.bovetech.com/allproducts.php?gad_source=1&gclid=Cj0KCQiA2KitBhCIARIsAPPMEhLFLDpzRGfZtXGoR-IEwGax6DpoMsp1dLu7hZY-xSJezmZRMT3itUUaAv6DEALw_wcB">
          <img
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            src="/images/bove.png"
            alt="Bove Tech"
          />
          </a>

          <a href="https://lomogantech.co.ke/">
          <img
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            src="/images/lomogan majinet.png"
            alt="Lomogan Tech"
          />
          </a>
        </div>
      </div>
    </div>

    {/* Explore Products */}
    <div className="bg-white py-24 sm:py-0" >
    <div className="mx-auto max-w-md sm:max-w-xl px-4 sm:px-6 lg:px-8">
    <a href="/products"> <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Explore Our Products
        </h2></a>
    </div>

    <div className="mx-auto mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:max-w-none lg:grid-cols-4">
    {/* Product 1  */}
    <div className="card bg-base-100 shadow-xl">
  <figure><img src="/images/shengda white.png" alt="Shengda Ultrasonic Water Meter" className="w-full h-auto" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Shengda Ultrasonic Water Meter
    </h2>
    <a href="/shengda_ultrasonic" target="_blank" class="btn btn-primary">Read More</a>

  </div>
</div>
    {/* Product 2 */}
    <div className="card bg-base-100 shadow-xl">
  <figure><img src="/images/B 39.png" alt="B-39 VW-M bulk Ultrasonic Water Meter" className="w-full h-auto"/></figure>
  <div className="card-body">
    <h2 className="card-title">
    B-39 VW-M bulk Ultrasonic Water Meter
    </h2>
    <a href="/b_39vw" target="_blank" class="btn btn-primary">Read More</a>

  </div>
</div>
    {/* Product 3 */}
    <div className="card bg-base-100 shadow-xl">
  <figure><img src="/images/Beco Ultrasonnic .png" alt="Beco Y Ultrasonic Water Meter" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Beco Y Ultrasonic Water Meter
    </h2>
    <a href="/beco_y" target="_blank" class="btn btn-primary">Read More</a>

  </div>
</div>
    {/* Product 4 */}
    <div className="card bg-base-100 shadow-xl">
  <figure><img src="/images/Beco X.png" alt="Beco X Ultrasonic Water Meter" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Beco X Ultrasonic Water Meter
    </h2>
    <a href="/beco_x" target="_blank" class="btn btn-primary">Read More</a>

  </div>
</div>
    </div>
    </div>
    <br/>
    <br/>

    <div>
    <img src="/images/about us index.png" alt="About Us" className="w-full h-auto"/>
    </div>

    <br/>
    <br/>

    {/* Footer */}
    <footer className="footer p-10 bg-blue-900 text-zinc-950">
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