import Giscus from "@giscus/react";

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
import WrongFormImage from "@/public/blog/sanctum-auth-guide/wrong-state.png";
import Error401 from "@/public/blog/sanctum-auth-guide/401-error.png";
import ErrorMessageImage from "@/public/blog/sanctum-auth-guide/error-messages.png";
import FirstAuthenticatedImage from "@/public/blog/sanctum-auth-guide/authenticated.png";
import RefreshAuthImage from "@/public/blog/sanctum-auth-guide/refresh-error.png";
import StatefulDomainsImage from "@/public/blog/sanctum-auth-guide/stateful-domains.png";
import PersistentAuthImage from "@/public/blog/sanctum-auth-guide/persistent-auth.png";
import LogoutImage from "@/public/blog/sanctum-auth-guide/logout.png";
import NewCollectionImage from "@/public/blog/sanctum-auth-guide/postman-collection.png";
import CollectionVariableImage from "@/public/blog/sanctum-auth-guide/collection-variable.png";
import PreRequestScriptImage from "@/public/blog/sanctum-auth-guide/pre-request-script.png";
import PostmanHeadersImage from "@/public/blog/sanctum-auth-guide/postman-headers.png";
import PostmanUserRouteImage from "@/public/blog/sanctum-auth-guide/postman-user-route.png";
import SSRDiagramImage from "@/public/blog/sanctum-auth-guide/ssr-flow.png";
import { useDarkModeProvider } from "@/contexts/DarkModeProvider";
import { CodeWithSyntaxHighlight } from "@/components/CodeWithSyntaxHighlight";

const Page = () => {
  const blog = blogData[1];

  const { isDarkMode } = useDarkModeProvider();
  const giscusTheme = isDarkMode ? "dark_high_contrast" : "light_high_contrast";

  return (
    <div className="mx-auto mt-8 rounded-md bg-slate-300 text-xl leading-10 tracking-wide lg:container dark:bg-zinc-900 dark:text-white md:text-2xl md:tracking-wider">
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
        <MakingLoginRequests />
        <br />
        <br />
        <SanctumStatefulDomains />
        <br />
        <br />
        <LoggingOutTheUser />
        <br />
        <br />
        <PostmanSetup />
        <br />
        <br />
        <NoteAboutSSR />
        <br />
        <br />
        <Conclusion />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <Giscus
          id="comments"
          repo="BoilingSoup/blogfolio"
          repoId="R_kgDOKvJjow"
          category="Announcements"
          categoryId="DIC_kwDOKvJjo84CbFAu"
          mapping="pathname"
          // term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={giscusTheme}
          lang="en"
          loading="eager"
        />
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
          <a href="#logging-in" className="underline">
            Making Login Requests
          </a>
        </li>
        <li>
          <a href="#configure-stateful-domains" className="underline">
            Configuring Sanctum Stateful Domains
          </a>
        </li>
        <li>
          <a href="#logging-out" className="underline">
            Logging Out the User
          </a>
        </li>
        <li>
          <a href="#postman-setup" className="underline">
            Setting up Postman for Laravel with Cookie Authentication
          </a>
        </li>
        <li>
          <a href="#about-ssr" className="underline">
            A Note About SSR
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
      <ul className="ml-12 [&>li]:my-2">
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
        Run the default Laravel database migrations (if you haven't):
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
        Now let's create a minimal frontend skeleton. No network requests will be implemented yet.
        <br />
        <br />
        If you want to copy my React example:
        <br />
        <br />
      </p>
      <CodeWithSyntaxHighlight>{`import { useState } from "react";

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

export default App;
`}</CodeWithSyntaxHighlight>
      <p>
        <br />
        With that, the frontend will show the loading state <code>&#8212;</code> as it should!
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
      <CodeWithSyntaxHighlight>{`const baseUrl = "http://localhost:8000";

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
`}</CodeWithSyntaxHighlight>
      <p>
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
        JavaScript requests to send & receive cookies <code>&#8212;</code> just like a regular browser navigation would.
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
      <CodeWithSyntaxHighlight>{`useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

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
`}</CodeWithSyntaxHighlight>
      <br />
      <br />
      <p>
        OK the request to check the User's auth status is ready! <br />
        <br />
        Let's save & reload the frontend, and it will stop showing the loading state right?...
        <br />
        <br />
        <strong>Nope!</strong> If you're following along using Vite, you are likely facing a CORS error!
        <br />
        (If you didn't use Vite and don't have a CORS error, you can{" "}
        <a className="underline" href="#logging-in">
          skip to the next section.
        </a>
        )
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
        <span className="bg-gray-400 font-mono dark:bg-slate-700">http://localhost:5173</span> :
      </p>
      <br />
      <img loading="lazy" className="mx-auto rounded-lg" src={FrontendUrlImage.src} height="33" width="393" />
      <br />
      <br />

      <p>
        This should fix the CORS error. <br />
        * Note that if you don't provide the protocol (http://) or the correct port for Vite, you will have issues.
        <br />
        <br />
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
        This is great! It means our frontend and backend are communicating successfully! <br />
        We have not yet logged in, so it is expected to receive a 401. <br />
        <br />
        Let's try logging in <code>&#8212;</code> in the next section.
      </p>
    </section>
  );
};

const MakingLoginRequests = () => {
  return (
    <section>
      <a id="logging-in" href="#logging-in">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Making Login Requests</h2>
      </a>
      <br />
      <p>
        I hope you wrote down the dummy User's email address from{" "}
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
          email/password payload. <br />
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
      </p>
      <CodeWithSyntaxHighlight>{`async function handleLogin(submitEvent) {
    submitEvent.preventDefault();

    const payload = {};

    const allInputs = document.querySelectorAll("input");
    for (let input of allInputs) {
        payload[input.name] = input.value;
    }

    await fetchWithXsrfToken("http://localhost:8000/login", {
        method: "POST",
        body: JSON.stringify(payload),
    }).then((response) => {
        if (response.ok) {
            setIsAuthenticated(true);
            setIsWrong(false);
        } else {
            setIsWrong(true);
        }
    });
}
`}</CodeWithSyntaxHighlight>
      <p>
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
        First, let's try to login as the dummy user with an <em>invalid</em> password: <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={WrongFormImage.src} height="339" width="1143" />
        <br />
        The <span className="bg-gray-400 font-mono dark:bg-slate-700">isWrong</span> state becomes{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">true</span> and we see the error state!
        <br />
        <br />
        * As a side note, the validation error message from the server is available in the response. <br />
        &nbsp; (I kept my code simple for demonstration.)
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={ErrorMessageImage.src} height="317" width="1033" />
        <br />
        The server recognized that there is no user with the invalid credentials we provided! <br />
        <br />
        <br />
        <br />
        Let's try sending the correct email / password this time.
        <br />
        <br /> I am logging in as my dummy user <span className="bg-gray-400 font-mono dark:bg-slate-700">alycia96@example.net</span> with
        the default password, <span className="bg-gray-400 font-mono dark:bg-slate-700">password</span>:
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={FirstAuthenticatedImage.src} height="265" width="779" />
        <br />
        And we get a successful response! <br />
        High 5s all around! We can go home now.... RIGHT?
        <br />
        <br />
        <br />
        Not quite, but we're getting close! <br />
        <br />
        We still have one more issue.
        <br />
        <br />
        <br />
        Try refreshing the page and the user is....... unauthenticated!? <br />
        Why am I receiving a 401 error if I authenticated a moment ago?
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={RefreshAuthImage.src} height="1028" width="1505" />
        <br />
        <br />
        This is really simple to fix, let's do it in the next section.
      </p>
    </section>
  );
};

const SanctumStatefulDomains = () => {
  return (
    <section>
      <a id="configure-stateful-domains" href="#configure-stateful-domains">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Configuring Sanctum Stateful Domains</h2>
      </a>
      <p>
        <br />
        So far, our frontend and backend are communicating successfully, but we have one problem.
        <br />
        The user's session is not persisting when the page is reloaded.
        <br />
        <br />
        To solve this we need to add one more env variable called{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">SANCTUM_STATEFUL_DOMAINS</span> in Laravel's{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">.env</span> file.
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={StatefulDomainsImage.src} height="42" width="577" /> <br />
        The value should be similar to the <span className="bg-gray-400 font-mono dark:bg-slate-700">FRONTEND_URL</span> variable we set
        earlier, <em>but without the protocol</em> (http://).
        <br />
        <br />
        Small errors like adding the protocol or forgetting the port will cause issues so make sure you get it right!
        <br />
        <br />
        With that set, save all changes & refresh your frontend.
        <br />
        And this time.... the session persists successfully!
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={PersistentAuthImage.src} height="1348" width="1027" /> <br />
        <br />
        Wer're almost done! Let's wrap this up and implement the Logout functionality.
      </p>
    </section>
  );
};

const LoggingOutTheUser = () => {
  return (
    <section>
      <a id="logging-out" href="#logging-out">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Logging Out the User</h2>
      </a>
      <br />
      <p>
        Logging out the user is simple as there is no JSON payload. <br />
        All we need to do is send a POST request to the <span className="bg-gray-400 font-mono dark:bg-slate-700">/logout</span> route and
        Laravel will invalidate the session.
        <br /> <br />
        One thing to note, by default, Laravel's session cookies have the{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">http-only</span> attribute for extra protection against XSS attacks. This
        means that we can't delete the session purely from the client-side using JavaScript.
        <br />
        <br />
        (i.e. <span className="bg-gray-400 font-mono dark:bg-slate-700">document.cookie = null</span> will not delete{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">http-only</span> cookies)
        <br />
        <br />
        <br />
        That said, let's implement the <span className="bg-gray-400 font-mono dark:bg-slate-700">handleLogout</span> function to call when
        the Logout button is clicked. <br />
        It will simply send a POST request to the <span className="bg-gray-400 font-mono dark:bg-slate-700">/logout</span> route and update
        the UI state:
      </p>
      <br />
      <br />
      <CodeWithSyntaxHighlight>{`async function handleLogout(submitEvent) {
    submitEvent.preventDefault();

    await fetchWithXsrfToken("http://localhost:8000/logout", {
        method: "POST",
    }).then((response) => {
        if (response.ok) {
            setIsAuthenticated(false);
        }
    });
}
`}</CodeWithSyntaxHighlight>
      <p>
        <br />
        Don't forget to wire up the <span className="bg-gray-400 font-mono dark:bg-slate-700">handleLogout</span> function to the logout
        form's <span className="bg-gray-400 font-mono dark:bg-slate-700">submit</span> event!
        <br />
        <br />
        Fairly simple yea? OK let's give it a try.
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={LogoutImage.src} height="951" width="1341" />
        <br />
        And there we have it! The logout was successful with a 204 response, and the UI was updated.
        <br />
        Of course, try refreshing and verify that the user is truly unauthenticated.
        <br />
        <br />
        Congrats if you made it here!
        <br /> You should now have a good understanding of how to use Laravel Sanctum to authenticate your SPAs.
        <br />
        <br />
        <br />
        <br />
        The following sections will have some additional information about authenticating clients that are <em>not</em> web browsers.
        <br />
      </p>
    </section>
  );
};

const PostmanSetup = () => {
  return (
    <section>
      <a id="postman-setup" href="#postman-setup">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Setting Up Postman for Laravel with Cookie Authentication</h2>
      </a>
      <p>
        <br />A tool like Postman is virtually a must-have while developing an API. <br />
        You can test out your API routes without writing hefty lines of JavaScript to call your server.
        <br />
        <br />
        However, it is important to note that Postman and similar clients are <b>not</b> web browsers, so some default browser behaviors may
        need to be explicitly configured.
        <br />
        <br />
        <br />
        It's simpler if I show you, so open up Postman and create a new Collection for our API.
        <br />I also created 3 new requests for demonstration later: <span className="bg-gray-400 font-mono dark:bg-slate-700">
          login
        </span>, <span className="bg-gray-400 font-mono dark:bg-slate-700">user</span>,{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">logout</span>.
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={NewCollectionImage.src} height="362" width="258" />
        <br />
        In the Collection settings, we need to define a <em>collection variable</em>.<br /> I'll call it{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">csrf-token</span>, and the value can be empty.
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={CollectionVariableImage.src} height="687" width="1381" />
        <br />
        This is a variable that Postman will manage, and we'll use it to supply our requests with the{" "}
        <span className="bg-gray-400 font-mono dark:bg-slate-700">X-XSRF-TOKEN</span> header.
        <br />
        <br />
        <br />
        Next, click on the Collection's <span className="bg-gray-400 font-mono dark:bg-slate-700">Pre-request Script</span> tab, and add
        this script like so:
      </p>
      <CodeWithSyntaxHighlight>
        {`pm.sendRequest({
    url: "http://localhost:8000/sanctum/csrf-cookie",
    method: "GET",
}, function(error, response, {cookies}){
    pm.collectionVariables.set("csrf-token", cookies.get("XSRF-TOKEN"))
});`}
      </CodeWithSyntaxHighlight>
      <p>
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={PreRequestScriptImage.src} height="857" width="1380" />
        <br />
        <br />
        This configures Postman to fetch a new <span className="bg-gray-400 font-mono dark:bg-slate-700">XSRF-TOKEN</span> cookie before
        requests <code>&#8212;</code> similar to what I did with the React app.
        <br />
        <br />
        <br />
        <br />
        When you make requests, supply your request with the headers:
        <br />
      </p>
      <ul className="ml-12 leading-relaxed">
        <li>
          <span className="bg-gray-400 font-mono dark:bg-slate-700">Accept: application/json</span>
        </li>
        <li>
          <span className="bg-gray-400 font-mono dark:bg-slate-700">Content-Type: application/json</span>
        </li>
      </ul>
      <p>
        <br />
        Additionally, we need to add the <span className="bg-gray-400 font-mono dark:bg-slate-700">X-XSRF-TOKEN</span> header, and we should
        add a <span className="bg-gray-400 font-mono dark:bg-slate-700">Referer</span> header as well.
        <br />
        <br />
        If you aren't familiar with the <span className="bg-gray-400 font-mono dark:bg-slate-700">Referer</span> header, it is a default
        header that web browsers send. <br />
        But since we're using Postman, it isn't sent automatically. We want to <em>emulate</em> the browser behavior by setting this header
        manually.
        <br />
        <br />
        In conclusion, <em>all</em> your Postman API requests should have these headers added. <br />
        I've blurred out some other headers that Postman provides as they are not important:
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={PostmanHeadersImage.src} height="534" width="922" />
        <br />
        The value for the <span className="bg-gray-400 font-mono dark:bg-slate-700">Referer</span> header is the same as the value for
        Laravel's <span className="bg-gray-400 font-mono dark:bg-slate-700">FRONTEND_URL</span> env variable.
        <br />
        And we provide the <span className="bg-gray-400 font-mono dark:bg-slate-700">X-XSRF-TOKEN</span> header by referencing the
        collection variable <span className="bg-gray-400 font-mono dark:bg-slate-700">{"{{csrf-token}}"}</span>.
        <br />
        <br />
        <br />
        OK that's all we need to set up Postman for Laravel Sanctum!
        <br />
        Here's an example of receiving a successful response:
        <br />
        <br />
        <img loading="lazy" className="mx-auto rounded-lg" src={PostmanUserRouteImage.src} height="732" width="1413" />
      </p>
    </section>
  );
};

const NoteAboutSSR = () => {
  return (
    <section>
      <a id="about-ssr" href="#about-ssr">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">A Note About Server-Side Rendering (SSR)</h2>
      </a>
      <br />
      <p>Up until this point, our focus was on client-side rendering (CSR) and fetching from the browser.</p>
      And for good reason! If you want to server render your UI, the concepts are almost the same!
      <br />
      <br />
      The only difference is that you have <em>another</em> server between the browser and your Laravel server.
      <br />
      <br />
      If there is enough interest maybe I will write an article specifically on SSR.
      <br />
      But for now, I will leave you with this diagram to figure it out:
      <br />
      <br />
      <img loading="lazy" className="mx-auto rounded-lg" src={SSRDiagramImage.src} height="563" width="1856" />
      <br />
      <br />
    </section>
  );
};

const Conclusion = () => {
  return (
    <section>
      <a id="about-ssr" href="#about-ssr">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-blue-400">Conclusion</h2>
      </a>
      <br />
      <p>
        Whew that was lot!
        <br />
        <br />
        We learned how to troubleshoot CORS, 419 CSRF errors, implemented some authentication features, and learned how to manage cookies &
        authentication in non-browser clients.
        <br />
        <br />
        This is information that I wish I had when I was starting with Laravel API development, and I hope it has helped you! Leave a
        comment if you have any questions or feedback!{" "}
      </p>
    </section>
  );
};

// export default function MyApp() {
//   return (
//   );
// }
export default Page;
