function togglePassword(passwordFieldId) {
    var passwordField = document.getElementById(passwordFieldId);
    var passwordToggle = document.querySelector("#" + passwordFieldId + " + .password-toggle");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.textContent = "Hide";
    } else {
        passwordField.type = "password";
        passwordToggle.textContent = "Show";
    }
}

export default function Portal(){
    document.title = "Portal"
    return<>
    
{/* Company Header */}
<div className="flex flex-col items-center text-base-content p-4 sm:p-8">
    <div className="w-full sm:w-3/5 md:w-2/5 lg:w-1/4 flex justify-center my-4">
        <a href="/">
            <img className="w-full h-auto" src="/images/portal logo.png" alt="Company Logo" />
        </a>
    </div> 
    <div className="company-paragraph text-center max-w-lg mx-4">
        <h1 className="text-xl sm:text-2xl p-2"><b>Majinet Water Meter Remote Reading System</b></h1>
        <p className="text-sm sm:text-base">
            Welcome to Majinet System Portal. The Portal gives you readings of your water consumption. If you are a resident/homeowner, please log in to the Resident/Homeowner page - you will need to self-register.
            <br/><br/>
            Click on the Majinet logo to go back to the home page!
        </p>
    </div>
</div>






   {/* Login container */}
<div className="text-base-content">
  <form method='POST' action='#'>
    <div className="bg-white text-base-content p-4 sm:p-10 rounded-xl max-w-lg mx-auto mt-10">
      {/* Estate Management Section */}
      <div className="space-y-4">
        <h1 className="text-center text-xl font-semibold text-gray-600">Estate Management</h1>
        <hr />
        <div className="flex items-center border-2 py-2 px-3 rounded-md mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <input className="pl-2 outline-none border-none w-full" type="text" name="username" placeholder="Username" required />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input className="pl-2 outline-none border-none w-full" type="password" name="password" id="password1" placeholder="Password" required />
        </div>
        <button type="submit" value="login" id="login" className="mt-4 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
        <hr />
      </div>

      {/* Tenant Section */}
      <div className="space-y-4 mt-8">
        <h1 className="text-center text-xl font-semibold text-gray-600">Tenant</h1>
        <hr />
        <div className="flex items-center border-2 py-2 px-3 rounded-md mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <input className="pl-2 outline-none border-none w-full" type="text" name="username" placeholder="Username" required />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input className="pl-2 outline-none border-none w-full" type="password" name="password" id="password2" placeholder="Password" required />
        </div>
        <button type="submit" value="login" id="login" className="mt-4 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
        <hr />
      </div>

      {/* Owner Section */}
      <div className="space-y-4 mt-8">
        <h1 className="text-center text-xl font-semibold text-gray-600">Owner</h1>
        <hr />
        <div className="flex items-center border-2 py-2 px-3 rounded-md mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <input className="pl-2 outline-none border-none w-full" type="text" name="username" placeholder="Username" required />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <input className="pl-2 outline-none border-none w-full" type="password" name="password" id="password3" placeholder="Password" required />
        </div>
        <button type="submit" value="login" id="login" className="mt-4 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
        <hr />
      </div>
    </div>
  </form>
</div>


                


        
    </>
}