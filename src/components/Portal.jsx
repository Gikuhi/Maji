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
    <div className="content-center items-center">
        <div className="h-auto w-5/5 mt-2 mb-0 items-center">
            <a href="/"><img className="w-2/5 h-2/5 mx-96" src="src/assets/images/portal logo.png" alt="Company Logo"/></a>
        </div> 
        <div className="company-paragraph">
            <h1 className="text-2xl p-2 text-center text-base"><b>Majinet Water Meter Remote Reading System</b></h1>
            <p className="mx-2">Welcome to Majinet System Portal. The Portal gives you readings of your water consumption. If you are a resident/homeowner, please log in the Resident/Homeowner page - you will need to self-register
                <br/><br/>Click on the Majinet logo to go back to the home page!</p>
        </div>
    </div>

    {/* Login container */}
    <div className="">
        
        <form method='POST' action='#'>
            <div className="bg-white px-0 py-4 w-11/12 rounded-xl w-screen shadow-xl max-w-sm mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div className="space-y-1">
                    <h1 className="text-center text-xl font-semibold text-gray-600">Estate Management</h1>
                    <hr/>
                <div className="flex items-center border-2 py-2 px-2 rounded-md mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input className="pl-2 outline-none border-none w-full" type="text" name="username" placeholder="Username" required/>

                </div>
                <div className="flex items-center border-2 py-2 px-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none w-full" type="password" name="password" id="password1" placeholder="Password" required/>
                    {/* <span className="password-toggle" onclick={togglePassword('password1')}>Show</span> */}
    
                    </div>
                    <button type="submit" value="login" id="login" className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
                <hr/>                   
                </div>

                <div className="space-y-1">
                    <h1 className="text-center text-xl font-semibold text-gray-600">Tenant</h1>
                    <hr/>
                <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input className="pl-2 outline-none border-none w-full" type="username" name="username" placeholder="Username" required/>

                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none w-full" type="password" name="password" id="password1" placeholder="Password" required/>
                    {/* <span className="password-toggle" onclick={togglePassword('password1')}>Show</span> */}
    
                    </div>
                    <button type="submit" value="login" id="login" className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
                <hr/>                   
                </div>

                <div className="space-y-1">
                    <h1 className="text-center text-xl font-semibold text-gray-600">Owner</h1>
                    <hr/>
                <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input className="pl-2 outline-none border-none w-full" type="username" name="username" placeholder="Username" required/>

                </div>
                <div className="flex items-center border-2 py-2 px-3 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <input className="pl-2 outline-none border-none w-full" type="password" name="password" id="password1" placeholder="Password" required/>
                    {/* <span className="password-toggle" onclick={togglePassword('password1')}>Show</span> */}
    
                    </div>
                    <button type="submit" value="login" id="login" className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
                <hr/>                   
                </div>

                
                </div>
                </form>
                </div>

                


        
    </>
}