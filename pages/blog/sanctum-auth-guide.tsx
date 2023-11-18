import { blogData } from "@/data/blogs";
import CoverImage from "@/public/blog/sanctum-auth-guide/cover.png";
import LetsStartImage from "@/public/blog/sanctum-auth-guide/letsstart.png";
import RoutesImage from "@/public/blog/sanctum-auth-guide/routes.png";
import DummyUserImage from "@/public/blog/sanctum-auth-guide/create-dummy-user.png";
import LoadingFrontendImage from "@/public/blog/sanctum-auth-guide/loading.png";
import StatefulRequestImage from "@/public/blog/sanctum-auth-guide/stateful-request.png";
import CorsErrorImage from "@/public/blog/sanctum-auth-guide/cors-error.png";
import FrontendUrlImage from "@/public/blog/sanctum-auth-guide/frontend-url.png";
import AuthStatusReceivedImage from "@/public/blog/sanctum-auth-guide/auth-status.png";
import Devtools401Image from "@/public/blog/sanctum-auth-guide/devtools-network.png";
import WrongFormImage from "@/public/blog/sanctum-auth-guide/wrong-state.png";
import LoginDebugImage from "@/public/blog/sanctum-auth-guide/login-debug.png";
import XsrfUndefinedImage from "@/public/blog/sanctum-auth-guide/xsrf-undefined.png";
import MissingXsrfImage from "@/public/blog/sanctum-auth-guide/missing-xsrf.png";
import ServerAddressImage from "@/public/blog/sanctum-auth-guide/server-address.png";
import Error401 from "@/public/blog/sanctum-auth-guide/401-error.png";

const Page = () => {
  const blog = blogData[1];

  return (
    <div className="mx-auto mt-8 rounded-md bg-gray-300 text-xl leading-10 tracking-wide lg:container dark:bg-slate-800 dark:text-white md:text-2xl md:tracking-wider">
      <article className="container mx-auto px-0 py-4 sm:px-8 lg:px-20 lg:py-10">
        <p className="text-right">{blog.date}</p>
        <h1 className="mt-8 text-center text-4xl font-extrabold lg:text-5xl">{blog.title}</h1>
        <br />
        <br />
        <Introduction />
        <br />
        <br />
        <TableOfContents />
        <br />
        <br />
        <Requirements />
        <br />
        <br />
        <LetsStart />
        <br />
        <br />
        <ScaffoldAuthRoutes />
        <br />
        <br />
        <MakeDummyUser />
        <br />
        <br />
        <CreateFrontend />
        <br />
        <br />
        <LaravelStatefulRequests />
        <br />
        <br />
        <CheckingAuth />
        <br />
        <br />
        <AttemptingLoggingInAsDummyUser />
        <br />
        <br />
        <LocalhostVs127 />
      </article>
    </div>
  );
};

const Introduction = () => {
  return (
    <section>
      <a id="introduction" href="#introduction">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Introduction</h2>
      </a>
      <br />
      <p>
        Are you trying to authenticate your SPA with Laravel Sanctum?
        <br />
        <br />
        419 CSRF error! CORS error!
        <br />
        It's all frustrating.
        <br />
        <br />
        Let's start with a fresh installation of Laravel, and walk through the fundamentals.
        <br />
        <br />
        We'll learn how to authenticate any SPA (React, Angular, Vue, etc.) using Laravel's session cookies and CSRF protection. We'll also
        set up Postman to test authenticated routes.
      </p>
      <br />
      <br />
      <img className="mx-auto rounded-lg" src={CoverImage.src} height="750" width="506" />
    </section>
  );
};

const TableOfContents = () => {
  return (
    <section>
      <a id="table-of-contenets" href="#table-of-contents">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Table of Contents</h2>
      </a>
      <br />
      <ol className="ml-12 leading-relaxed">
        <li>
          <a href="#requirements" className="underline">
            Requirements
          </a>
        </li>
        <li>
          <a href="#lets-start" className="underline">
            Let's Start
          </a>
        </li>
        <li>
          <a href="#scaffold-auth-routes" className="underline">
            Scaffold Auth Routes
          </a>
        </li>
        <li>
          <a href="#make-dummy-user" className="underline">
            Make a Dummy User
          </a>
        </li>
        <li>
          <a href="#create-frontend" className="underline">
            Create the Frontend
          </a>
        </li>
        <li>
          <a href="#laravel-stateful-requests" className="underline">
            Sending Stateful Requests to a Laravel API
          </a>
        </li>
        <li>
          <a href="#checking-auth" className="underline">
            Checking the User's Auth Status
          </a>
        </li>
        <li>
          <a href="#attempt-logging-in" className="underline">
            Attempting to Log in as the Dummy User
          </a>
        </li>
        <li>
          <a href="#localhost-vs-127" className="underline">
            Localhost vs 127.0.0.1
          </a>
        </li>
      </ol>
    </section>
  );
};

const Requirements = () => {
  return (
    <section>
      <a id="requirements" href="#requirements">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Requirements</h2>
      </a>
      <br />
      <ul className="ml-12">
        <li>Your frontend & backend must share the same top level domain. Subdomains are OK. localhost is OK.</li>
        <li>Familiarity with Laravel and a JavaScript framework. My example will use React, but it's fairly vanilla.</li>
      </ul>
    </section>
  );
};

const LetsStart = () => (
  <section>
    <a id="lets-start" href="#lets-start">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Let's Start!</h2>
    </a>
    <br />
    <p>
      First, we'll need to create two projects. One for Laravel, and one for the SPA. <br />
      <br />
      Let's do this in a new directory.
      <br />
      <br />
    </p>
    <pre className="overflow-x-auto bg-gray-400 dark:bg-slate-700">mkdir learn-sanctum</pre>
    <pre className="overflow-x-auto bg-gray-400 dark:bg-slate-700">cd learn-sanctum</pre>
    <br />
    <br />
    <p>
      I will install Laravel with Composer &amp; React with Vite. <br />
      But I encourage you to install Laravel your preferred way &amp; use the frontend of your choice.
      <br />
      <br />
      <br />
      After you've installed Laravel & the frontend, start both dev servers, and we're ready to continue!
    </p>
    <br />
    <img loading="lazy" className="mx-auto rounded-lg" src={LetsStartImage.src} width="959" height="527" />
  </section>
);

const ScaffoldAuthRoutes = () => {
  return (
    <section>
      <a id="scaffold-auth-routes" href="#scaffold-auth-routes">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Scaffold Auth Routes</h2>
      </a>
      <br />
      <p>
        To authenticate our SPA, Laravel needs authentication routes. <br />
        <br />
        These are backend routes like <span className="bg-gray-400 font-mono dark:bg-slate-700">/login</span>,{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">/register</span>,{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">/logout</span> for the frontend to hit.
        <br />
        We're in luck because Laravel can generate this boilerplate if we install{" "}
        <a href="https://laravel.com/docs/10.x/starter-kits#laravel-breeze" target="_blank" className="underline">
          Laravel Breeze.
        </a>
        <br />
        <br />
        Install the Composer package:
      </p>
      <pre className="overflow-x-auto bg-gray-400 dark:bg-slate-700">composer require laravel/breeze --dev</pre>
      <br />
      <p>Run the artisan command to enable the package:</p>
      <pre className="overflow-x-auto bg-gray-400 dark:bg-slate-700">php artisan breeze:install</pre>
      <br />
      <p>
        and select the "API Only" option.
        <br />
        <br />
        That was easy! You should now have authentication routes for your backend.
        <br />
        <br />
        You can check by running the artisan command:
      </p>
      <pre className="overflow-x-auto bg-gray-400 dark:bg-slate-700">php artisan route:list</pre>
      <br />
      <br />
      <img loading="lazy" className="mx-auto rounded-lg" src={RoutesImage.src} height="348" width="570" />
    </section>
  );
};

const MakeDummyUser = () => {
  return (
    <section>
      <a id="make-dummy-user" href="#make-dummy-user">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Make a Dummy User</h2>
      </a>
      <br />
      <p>
        To sign in as a User, we'll need a User (duh). So let's make one! <br />
        <br />
        Run the default Laravel database migrations (if you haven't)
      </p>
      <pre className="overflow-x-auto bg-gray-400 dark:bg-slate-700">php artisan migrate</pre>
      <br />
      <p>We can create a User easily with Laravel's CLI tool, Tinker:</p>
      <pre className="overflow-x-auto bg-gray-400 dark:bg-slate-700">php artisan tinker</pre>
      <br />
      <p>In Tinker, run the User factory to create a new user:</p>
      <pre className="overflow-x-auto bg-gray-400 dark:bg-slate-700">User::factory()-&gt;create();</pre>
      <br />
      <p>
        And write your new user's email down somewhere. <br />
        We'll need this when we try logging in.
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={DummyUserImage.src} height="335" width="882" />
        <br />
        Great! Now we'll switch over to the frontend.
      </p>
    </section>
  );
};

const CreateFrontend = () => {
  return (
    <section>
      <a id="create-frontend" href="#create-frontend">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Create the Frontend</h2>
      </a>
      <br />
      <p>
        Our goal is simple: Log in as the User we generated, and log out.
        <br />
        <br />
        But in practice, there are a few more steps. <br />
        <br />
        When the user first loads the SPA, the auth status is unknown! <br />
        The frontend must make a request to the backend to <strong>check</strong> its auth status.
        <br />
        <br />
        Additionally, we'll show an error message if the log in information is incorrect.
        <br />
        <br />
        So we will need 3 states to describe our UI:
      </p>
      <ol className="ml-12 leading-relaxed">
        <li className="className=bg-gray-400 font-mono dark:bg-slate-700">isLoading</li>
        <li className="className=bg-gray-400 font-mono dark:bg-slate-700">isAuthenticated</li>
        <li className="className=bg-gray-400 font-mono dark:bg-slate-700">isWrong</li>
      </ol>
      <br />
      <p>For the HTML we'll need:</p>
      <ul className="ml-12 leading-relaxed">
        <li>A log in form for unauthenticated users.</li>
        <li>A conditional error message if the log in form was incorrect.</li>
        <li>A log out button for authenticated users.</li>
      </ul>
      <p>
        <br />
        <br />
        Now let's create a minimal frontend skeleton.
        <br />
        <br />
        If you want to copy my React example:
        <br />
        Notice that no network requests are implemented yet.
        <br />
        <br />
      </p>
      <pre className="overflow-x-auto bg-gray-400 p-4 text-lg dark:bg-black">{`import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!isAuthenticated) {
    return (
      <form>
        <label htmlFor="email">email</label>
        <input required id="email" name="email" type="email" />
        &emsp;
        <label htmlFor="password">password</label>
        <input required id="password" name="password" type="password" />
        &emsp;
        <button>Login</button>

        {isWrong && <h1>WRONG!</h1>}

      </form>
    );
  } 

  return (
    <>
      <h1>Congrats, you have authenticated!</h1>
      <br />
      <form>
        <button>Logout</button>
      </form>
    </>
  );
  }
}

export default App;
`}</pre>
      <p>
        <br />
        With that, the frontend will show the loading state, as it should!
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={LoadingFrontendImage.src} height="276" width="754" />
        <br />
        The request has not yet been made to check the client's auth state.
        <br />
        Before we do that, let's examine how requests should be made to Laravel.
      </p>
    </section>
  );
};

const LaravelStatefulRequests = () => {
  return (
    <section>
      <a id="laravel-stateful-requests" href="#laravel-stateful-requests">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Sending Stateful Requests to a Laravel API</h2>
      </a>
      <p>
        <br />
        When making stateful requests to a Laravel API, the <span className="bg-gray-400 font-mono dark:bg-slate-700">XSRF-TOKEN</span>{" "}
        cookie should always be included as a request header called{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">X-XSRF-TOKEN</span>.
        <br />
        <br />
        If the client does not have an <span className="bg-gray-400 font-mono dark:bg-slate-700">XSRF-TOKEN</span> cookie, they can get one
        from Laravel's <span className="bg-gray-400 font-mono dark:bg-slate-700">/sanctum/csrf-cookie</span> route.
        <br />
        <br />
        It's also important to set the <span className="bg-gray-400 font-mono dark:bg-slate-700">Accept</span> and{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">Content-Type</span> headers as{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">application/json</span>.
        <br />
        You can get 3xx redirect responses & unexpected response data if you forget to do so!
        <br />
        <br />
        <br />
        To summarize with a diagram:
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={StatefulRequestImage.src} height="513" width="1888" />
        <br />
        <br />
        Since all of our requests will need to check for the <span className="bg-gray-400 font-mono dark:bg-slate-700">
          XSRF-TOKEN
        </span>{" "}
        cookie and update request headers, we should make a wrapper around the{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">fetch</span> function to simplify this:
      </p>
      <pre className="overflow-x-auto bg-gray-400 p-4 text-lg dark:bg-black">{`const baseUrl = "http://localhost:8000";

function getCookies() {
  return document.cookie.split(";").reduce((res, c) => {
    const [key, val] = c.trim().split("=").map(decodeURIComponent);
    try {
      return Object.assign(res, { [key]: JSON.parse(val) });
    } catch (e) {
      return Object.assign(res, { [key]: val });
    }
  }, {});
}

async function fetchWithXsrfToken(url, opts) {
  let cookies = getCookies();
  let xsrfToken = cookies["XSRF-TOKEN"];

  if (!xsrfToken) {
    const response = await fetch(baseUrl + "/sanctum/csrf-cookie", { credentials: "include" });

    if (!response.ok) {
      throw new Error("Failed to get a new csrf cookie.");
    }

    cookies = getCookies();
    xsrfToken = cookies["XSRF-TOKEN"];
  }

  if (opts === undefined) {
    opts = {};
  }

  if (opts.headers === undefined) {
    opts.headers = {
      "X-XSRF-TOKEN": xsrfToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  } else {
    opts.headers["X-XSRF-TOKEN"] = xsrfToken;

    opts.headers["Accept"] = "application/json";
    opts.headers["Content-Type"] = "application/json";
  }

  if (opts.credentials !== "include") {
    opts.credentials = "include";
  }

  return fetch(url, opts);
}
`}</pre>
      <p>
        <br />
        Cool! We can use the <span className="bg-gray-400 font-mono dark:bg-slate-700">fetchWithXsrfToken</span> function and it will
        automatically attach a valid <span className="bg-gray-400 font-mono dark:bg-slate-700">X-XSRF-TOKEN</span> header to our requests.
        <br />
        <br />
        It will also add <span className="bg-gray-400 font-mono dark:bg-slate-700">Accept: application/json</span> and{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">Content-Type: application/json</span> headers to our requests.
        <br />
        <br />
        Another thing to note in the <span className="bg-gray-400 font-mono dark:bg-slate-700">fetchWithXsrfToken</span> function, is that
        every call to the native <span className="bg-gray-400 font-mono dark:bg-slate-700">fetch</span> function has the{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">credentials</span> option set to{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">"include"</span>. This is extremely important because it allows our
        JavaScript requests to send & receive cookies <code>&#8212;</code> just like a regular browser navigation.
        <br /> <br />
        <br />
        <br />
        OK we have a helper function to make requests.
        <br /> Let's get back to where we were... sending a request to Laravel to check the user's auth status. <br />
      </p>
    </section>
  );
};

const CheckingAuth = () => {
  return (
    <section>
      <a id="checking-auth" href="#checking-auth">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Checking the User's Auth Status</h2>
      </a>
      <p>
        <br />
        We are now ready to send a request to Laravel's <span className="bg-gray-400 font-mono dark:bg-slate-700">/api/user</span> route to
        check whether the client is authenticated.
        <br />
        Laravel provides this API route by default.
        <br />
        <br />
        Here are the next steps to implement:
      </p>
      <br />
      <br />
      <ol className="ml-12 leading-relaxed">
        <li>
          From the browser, send a request to the <span className="bg-gray-400 font-mono dark:bg-slate-700">/api/user</span> route with the{" "}
          <span className="bg-gray-400 font-mono dark:bg-slate-700">fetchWithXsrfToken</span> helper function.
        </li>

        <li>
          When you receive a response, set the <span className="bg-gray-400 font-mono dark:bg-slate-700">isLoading</span> state to{" "}
          <span className="bg-gray-400 font-mono dark:bg-slate-700">false</span>.
        </li>
        <li>
          If you received a 2xx response, set <span className="bg-gray-400 font-mono dark:bg-slate-700">isAuthenticated</span> to{" "}
          <span className="bg-gray-400 font-mono dark:bg-slate-700">true</span>, otherwise set{" "}
          <span className="bg-gray-400 font-mono dark:bg-slate-700">isAuthenticated</span> to{" "}
          <span className="bg-gray-400 font-mono dark:bg-slate-700">false</span>.
        </li>
      </ol>
      <br />
      <br />
      <p>
        Since I'm using React, I will make the request to Laravel inside the{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">useEffect</span> hook.
        <br />
        Here is my implementation:
      </p>
      <pre className="overflow-x-auto bg-gray-400 p-4 text-lg dark:bg-black">{`useEffect(() => {
  fetchWithXsrfToken("http://localhost:8000/api/user", { signal })
    .then((response) => {

      setIsLoading(false);
                
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        // isAuthenticated is false by default, do nothing.
      }
    })
    .catch((err) => console.error(err));

  return () => controller.abort();
}, []);
`}</pre>
      <br />
      <br />
      <p>
        OK the request to check the User's auth status is ready! <br />
        <br />
        Our frontend will receive the auth status, and stop showing the loading state right?...
        <br />
        <br />
        <strong>Nope!</strong> If you're following along using Vite, you are likely facing the same CORS error!
        <br />
      </p>
      <br />
      <img loading="lazy" className="mx-auto rounded-lg" src={CorsErrorImage.src} height="708" width="1481" />
      <br />
      <p>
        This is because when we{" "}
        <a href="#scaffold-auth-routes" className="underline">
          installed Laravel Breeze in the 3rd section
        </a>
        , it configures Laravel to expect the frontend on <span className="bg-gray-400 font-mono dark:bg-slate-700">localhost:3000</span>.
        <br />
        <br />
        So let's fix it.
        <br />
        <br />
        To fix this I will update the <span className="bg-gray-400 font-mono dark:bg-slate-700">FRONTEND_URL</span> variable in Laravel's{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">.env</span> to match Vite's server at{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">localhost:5173</span> :
      </p>
      <br />
      <img loading="lazy" className="mx-auto rounded-lg" src={FrontendUrlImage.src} height="33" width="393" />
      <br />
      <br />
      <p>
        Save all changes, refresh your frontend and you should receive a response.
        <br />
        The server responds with the auth state, and the form is shown because we are not authenticated!
      </p>
      <br />
      <img loading="lazy" className="mx-auto rounded-lg" src={AuthStatusReceivedImage.src} height="395" width="1158" />
      <br />
      <br />
      <p>
        If you look in the DevTools console, the CORS error should be gone, and a 401 Unauthorized error is expected:
        <br />
        <br />
      </p>
      <img loading="lazy" className="mx-auto rounded-lg" src={Error401.src} height="112" width="1471" />
      <br />
      <p>
        This is great because it means our frontend and backend are communicating successfully! <br />
        We have not yet logged in, so it is expected to receive a 401. <br />
        <br />
        Let's submit the form in the next section.
      </p>
    </section>
  );
};

const AttemptingLoggingInAsDummyUser = () => {
  return (
    <section>
      <a id="attempting-logging-in" href="#attempting-logging-in">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Attempting to Log in as the Dummy User</h2>
      </a>
      <br />
      <p>
        Hope you wrote down the dummy User's email address from{" "}
        <a href="#make-dummy-user" className="underline">
          section 4
        </a>
        !
        <br />
        The default password that Laravel generates is <span className="bg-gray-400 font-mono dark:bg-slate-700">password</span>.
        <br />
        <br />
        Let's write a JavaScript event handler to submit the form as JSON to Laravel's{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">/login</span> endpoint.
        <br />
        <br />
        It will need to:
      </p>
      <ol className="ml-12 leading-relaxed [&>li]:my-4">
        <li>Prevent the default page refresh when the form is submitted.</li>
        <li>
          Send a POST request to the <span className="bg-gray-400 font-mono dark:bg-slate-700">/login</span> endpoint with the
          email/password payload <em>and cookies</em>. <br />
          To include cookies when using JavaScript's <span className="bg-gray-400 font-mono dark:bg-slate-700">fetch</span>, we can set the{" "}
          <span className="bg-gray-400 font-mono dark:bg-slate-700">credentials</span> option to{" "}
          <span className="bg-gray-400 font-mono dark:bg-slate-700">"include"</span>.<br />
          <br />
          (*We didn't <em>need</em> to do this with the requests to{" "}
          <span className="bg-gray-400 font-mono dark:bg-slate-700">/api/user</span> and{" "}
          <span className="bg-gray-400 font-mono dark:bg-slate-700">/sanctum/csrf-cookie</span> because they were{" "}
          <span className="bg-gray-400 font-mono dark:bg-slate-700">GET</span> requests. But it's a good idea to always include cookies to
          avoid unexpected errors.)
        </li>
        <li>
          If the response is a success: <br />
          <ul className="ml-12 leading-relaxed [&>li]:my-4">
            <li>
              The <span className="bg-gray-400 font-mono dark:bg-slate-700">isAuthenticated</span> state becomes{" "}
              <span className="bg-gray-400 font-mono dark:bg-slate-700">true</span>.
            </li>
            <li>
              The <span className="bg-gray-400 font-mono dark:bg-slate-700">isWrong</span> state becomes{" "}
              <span className="bg-gray-400 font-mono dark:bg-slate-700">false</span>.
            </li>
          </ul>
          Otherwise:
          <br />{" "}
          <ul className="ml-12 leading-relaxed [&>li]:my-4">
            <li>
              The <span className="bg-gray-400 font-mono dark:bg-slate-700">isWrong</span> state becomes{" "}
              <span className="bg-gray-400 font-mono dark:bg-slate-700">true</span>.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        <br />
        Here is my <span className="bg-gray-400 font-mono dark:bg-slate-700">handleLogin</span> function:
        <pre className="overflow-x-auto bg-gray-400 p-4 text-lg dark:bg-black">{`async function handleLogin(submitEvent) {
  submitEvent.preventDefault();

  const payload = {};

  const allInputs = document.querySelectorAll("input");
  for (let input of allInputs) {
    payload[input.name] = input.value;
  }

  await fetchWithXsrfToken("http://localhost:8000/login", {
    method: "POST",
    body: JSON.stringify(payload),
    credentials: "include",
  }).then((res) => {
    if (res.ok) {
      setIsAuthenticated(true);
      setIsWrong(false);
    } else {
      setIsWrong(true);
    }
  });
}
`}</pre>
        <br />
        Don't forget to set it as a <span className="bg-gray-400 font-mono dark:bg-slate-700">submit</span> event handler for the login
        form! I will leave that to you.
        <br />
        <br />
        <br />
        <br />
        <br />
        The login form is now ready to send the inputs we fill out to the{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">/login</span> route, and update the states accordingly.
        <br />
        <br />
        My dummy user's email was <span className="bg-gray-400 font-mono dark:bg-slate-700">alycia96@example.net</span> and the password, by
        default, is <span className="bg-gray-400 font-mono dark:bg-slate-700">password</span>.
        <br />
        <br />
        Try to sign is as your dummy user with the login form and....................... WRONG! The{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">isWrong</span> state is visible!
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={WrongFormImage.src} height="379" width="1458" />
        <br />
        I've put in the correct email / password, what do you mean it's wrong??? <br />
        Let's use the Chrome DevTools to debug this request.
        <br />
        <br />
        Open the DevTools, go to the <b>Network</b> tab, and click on the <b>login</b> request to see its details:
        <img loading="lazy" className="mx-auto rounded-lg" src={LoginDebugImage.src} height="1002" width="1434" />
        <br />
        It shows that I got a 419 response.
        <br />
        Laravel uses 419 responses when a CSRF token is invalid or not provided... but our{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">fetchWithXsrfToken</span> helper should from{" "}
        <a className="underline" href="#laravel-stateful-requests">
          section 6
        </a>{" "}
        be adding that to our requests, right?
        <br /> You can even see multiple requests for <span className="bg-gray-400 font-mono dark:bg-slate-700">csrf-cookie</span> in the
        screenshot above. Why am I getting a 419 error?
        <br />
        <br />
        <br />
        Let's check the request headers and verify that the <span className="bg-gray-400 font-mono dark:bg-slate-700">X-XSRF-TOKEN</span> is
        there:
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={XsrfUndefinedImage.src} height="258" width="876" />
        <br />
        <br />
        Welp, it says the header is <span className="bg-gray-400 font-mono dark:bg-slate-700">undefined</span>. No wonder I got a 419
        response back.
        <br />
        But why?? I hit the <span className="bg-gray-400 font-mono dark:bg-slate-700">/sanctum/csrf-cookie</span> route, so I should have
        the <span className="bg-gray-400 font-mono dark:bg-slate-700">XSRF-TOKEN</span> in my browser's cookies.
        <br />
        <br /> Well, let's check that we are really getting an <span className="bg-gray-400 font-mono dark:bg-slate-700">
          XSRF-TOKEN
        </span>{" "}
        in the browser.
        <br />
        <br />
        We can do that in the DevTools's <b>Application</b> tab:
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={MissingXsrfImage.src} height="1561" width="593" />
        <br />I have a <span className="bg-gray-400 font-mono dark:bg-slate-700">laravel_session</span> cookie, but I don't have a{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">XSRF-TOKEN</span> cookie!
        <br />
        This all explains why the request fails with a 419 error, but why am I not getting an{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">XSRF-TOKEN</span> from Sanctum?
        <br />
        <br />
        That was a lot to digest, and it's still unclear what's happening. <br />
        <br />
        Let's fix this in the next section.
      </p>
    </section>
  );
};

const LocalhostVs127 = () => {
  return (
    <section>
      <a id="localhost-vs-127" href="#localhost-vs-127">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Localhost vs 127.0.0.1</h2>
      </a>
      <br />
      <p>
        To recap, we are sending an email / password as JSON when the form is submitted. But we are getting a 419 error response because,{" "}
        <em>for some reason,</em> we are never receiving an <span className="bg-gray-400 font-mono dark:bg-slate-700">XSRF-TOKEN</span> from
        Laravel's Sanctum route. We verified this by looking at the <b>Network</b> and <b>Application</b> tabs in the DevTools.
        <br />
        <br />
        There's not a lot of context to solve this problem, so I will give you the solution:
        <br />
        <br />
        <span className="bg-gray-400 font-mono dark:bg-slate-700">localhost</span> and{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">127.0.0.1</span> are different domains.
        <br />
        <br />
        If you are using Laravel's built-in PHP server, the server is actually serving on{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">127.0.0.1:8000</span>.<br /> This can be verified by looking at the Remote
        Address in the DevTools <b>Network</b> tab.
        <img loading="lazy" className="mx-auto rounded-lg" src={ServerAddressImage.src} width="959" height="527" />
        <br />
        <br />
        As a special case, browsers will allow cross-origin servers to send <em>session</em> cookies via the{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">localhost</span> domain.
        <br />
        This is why my DevTools showed that I had a <span className="bg-gray-400 font-mono dark:bg-slate-700">laravel_session</span> cookie
        in the previous section.
        <br />
        <br />
        But my server (127.0.0.1) and browser (localhost) are currently on different domains.
        <br /> The <span className="bg-gray-400 font-mono dark:bg-slate-700">XSRF-TOKEN</span> cookie was not set by the browser because
        it's a <em>persistent</em> cookie from a different domain!
        <br />
        <br />
        We can solve this by running a reverse proxy like Nginx on{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">localhost</span> so the browser and server are both on the same{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">localhost</span> domain, albeit different ports. <br />
        (This works fine and is what I usually use.)
        <br />
        <br />
        But to keep it simple, we can also point the browser <span className="bg-gray-400 font-mono dark:bg-slate-700">127.0.0.1</span> and
        all requests in our JavaScript code to <span className="bg-gray-400 font-mono dark:bg-slate-700">127.0.0.1</span>.
        <br />
        <br />
        This will let our server and browser pass cookies between each other.
        <br />
        <br />
        Let's not forget to change the <span className="bg-gray-400 font-mono dark:bg-slate-700"></span>env variable
        <br />
      </p>
    </section>
  );
};

export default Page;
