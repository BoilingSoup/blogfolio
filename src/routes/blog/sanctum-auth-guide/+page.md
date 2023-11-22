---
layout: blog-default
title: Master Cookie Authentication with Laravel Sanctum
date: Oct 30, 2023
---

<script>
  import CoverImage from "$blog/sanctum-auth-guide/cover.png"
  import LetsStartImage from "$blog/sanctum-auth-guide/letsstart.png"
  import RoutesImage from "$blog/sanctum-auth-guide/routes.png";
  import DummyUserImage from "$blog/sanctum-auth-guide/create-dummy-user.png";
  import LoadingFrontendImage from "$blog/sanctum-auth-guide/loading.png";
  import StatefulRequestImage from "$blog/sanctum-auth-guide/stateful-request.png";
  import CorsErrorImage from "$blog/sanctum-auth-guide/cors-error.png";
  import FrontendUrlImage from "$blog/sanctum-auth-guide/frontend-url.png";
  import AuthStatusReceivedImage from "$blog/sanctum-auth-guide/auth-status.png";
  import WrongFormImage from "$blog/sanctum-auth-guide/wrong-state.png";
  import Error401 from "$blog/sanctum-auth-guide/401-error.png";
  import ErrorMessageImage from "$blog/sanctum-auth-guide/error-messages.png";
  import FirstAuthenticatedImage from "$blog/sanctum-auth-guide/authenticated.png";
  import RefreshAuthImage from "$blog/sanctum-auth-guide/refresh-error.png";
  import StatefulDomainsImage from "$blog/sanctum-auth-guide/stateful-domains.png";
  import PersistentAuthImage from "$blog/sanctum-auth-guide/persistent-auth.png";
  import LogoutImage from "$blog/sanctum-auth-guide/logout.png";
  import NewCollectionImage from "$blog/sanctum-auth-guide/postman-collection.png";
  import CollectionVariableImage from "$blog/sanctum-auth-guide/collection-variable.png";
  import PreRequestScriptImage from "$blog/sanctum-auth-guide/pre-request-script.png";
  import PostmanHeadersImage from "$blog/sanctum-auth-guide/postman-headers.png";
  import PostmanUserRouteImage from "$blog/sanctum-auth-guide/postman-user-route.png";
  import SSRDiagramImage from "$blog/sanctum-auth-guide/ssr-flow.png";

  import SectionTitle from "../SectionTitle.svelte";
  import InlineCode from "../InlineCode.svelte";
  import BlockCode from "../BlockCode.svelte";
  import EmDash from "../EmDash.svelte";
  import CodeWithSyntaxHighlight from "../CodeWithSyntaxHighlight.svelte";
  
  import javascript from "svelte-highlight/languages/javascript";
  import { minimalSkeleton, fetchWrapper, fetchUser, handleLogin, handleLogout, postmanPrefetchScript } from "./constants"

  const tableOfContents = [ 
      { hash: "requirements", title: "Requirements" },
      { hash: "lets-start", title: "Let's Start" },
      { hash: "scaffold-auth-routes", title: "Scaffold Auth Routes" },
      { hash: "make-dummy-user", title: "Make a Dummy User" },
      { hash: "create-frontend", title: "Create the Frontend" },
      { hash: "laravel-stateful-requests", title: "Sending Stateful Requests to a Laravel API" },
      { hash: "checking-auth", title: "Checking the User's Auth Status" },
      { hash: "logging-in", title: "Making Login Requests" },
      { hash: "configure-stateful-domains", title: "Configuring Sanctum Stateful Domains" },
      { hash: "logging-out", title: "Logging Out the User" },
      { hash: "postman-setup", title: "Setting up Postman for Laravel with Cookie Authentication" },
      { hash: "about-ssr", title: "A Note About SSR" },
      { hash: "conclusion", title: "Conclusion" },
  ]
</script>

<SectionTitle hash="introduction" title="Introduction" />
<br/>
Are you trying to authenticate your SPA with Laravel Sanctum?  
<br/> 
<br/> 
419 CSRF error! CORS error!
<br/> 
It's all frustrating.
<br/> 
<br/>
Let's start with a fresh installation of Laravel, and walk through the fundamentals.
<br/>
<br/>
We'll learn how to authenticate any SPA (React, Angular, Vue, etc.) using Laravel's session cookies and CSRF protection. We'll also
set up Postman to test authenticated routes.
<br />
<br />
<br />
<img class="mx-auto rounded-lg" alt="cover image" src={CoverImage} height="750" width="506" />

<br />
<br />

<section>
<SectionTitle hash="table-of-contents" title="Table of Contents" />
<br />
<ol class="ml-12 leading-relaxed">
  {#each tableOfContents as section, i}
    <li>
      <a href="#{section.hash}" class="underline">
        {section.title}
      </a>
    </li>
  {/each}
</ol>
</section>

<br />
<br />

<section>
<SectionTitle hash="requirements" title="Requirements" />
<br/>

<ul class="ml-12 [&>li]:my-2">
<li>Your frontend & backend must share the same top level domain. Subdomains are OK. localhost is OK.</li>
<li>Familiarity with Laravel and a JavaScript framework. My example will use React, but it's fairly vanilla.</li>
</ul>
</section>

<br />
<br />

<SectionTitle hash="lets-start" title="Let's Start" />
<br />
First, we'll need to create two projects. One for Laravel, and one for the SPA. <br />
<br />
Let's do this in a new directory.
<br />
<br />

<BlockCode>mkdir learn-sanctum</BlockCode>
<br/>

<BlockCode>cd learn-sanctum</BlockCode>
<br/>
<br/>
I will install Laravel with Composer &amp; React with Vite.
<br />
But I encourage you to install Laravel your preferred way &amp; use the frontend of your choice.
<br />
<br />
<br />
After you've installed Laravel & the frontend, start both dev servers, and we're ready to continue!
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="servers ready" src={LetsStartImage} width="959" height="527" />

<br />
<br />

<SectionTitle hash="scaffold-auth-routes" title="Scaffold Auth Routes" />
<br />
To authenticate our SPA, Laravel needs authentication routes. 
<br />
<br />
These are backend routes like <InlineCode>/login</InlineCode>, <InlineCode>/register</InlineCode>, <InlineCode>/logout</InlineCode> for the frontend to hit.
<br />
We're in luck because Laravel can generate this boilerplate if we install <a href="https://laravel.com/docs/10.x/starter-kits#laravel-breeze" target="_blank" class="underline">Laravel Breeze.</a>
<br />
<br />
Install the Composer package:
<br/>

<BlockCode>composer require laravel/breeze --dev</BlockCode>
<br/>
Run the artisan command to enable the package:

<BlockCode>php artisan breeze:install</BlockCode>
<br/>
and select the "API Only" option.
<br />
<br />
That was easy! You should now have authentication routes for your backend.
<br />
<br />
You can check by running the artisan command:
<BlockCode>php artisan route:list</BlockCode>
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="authentication routes scaffolded" src={RoutesImage} height="348" width="570" />

<br />
<br />

<SectionTitle hash="make-dummy-user" title="Make a Dummy User" />
<br/>
To sign in as a User, we'll need a User (duh). So let's make one!
<br />
<br />
Run the default Laravel database migrations (if you haven't):
<BlockCode>php artisan migrate</BlockCode>
<br />
We can create a User easily with Laravel's CLI tool, Tinker:
<BlockCode>php artisan tinker</BlockCode>
<br />
In Tinker, run the User factory to create a new user:
<BlockCode>User::factory()-&gt;create();</BlockCode>
<br />
And write your new user's email down somewhere.
<br />
We'll need this when we try logging in.
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="dummy user generated" src={DummyUserImage} height="335" width="882" />
<br />
Great! Now we'll switch over to the frontend.
<br />

<br />
<br />

<SectionTitle hash="create-frontend" title="Create the Frontend" />
<br />
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
<br/>
<ol class="inline-block ml-12 leading-relaxed">
<li class="bg-gray-400 font-mono dark:bg-slate-700">isLoading</li>
<li class="bg-gray-400 font-mono dark:bg-slate-700">isAuthenticated</li>
<li class="bg-gray-400 font-mono dark:bg-slate-700">isWrong</li>
</ol>
<br/>
<br/>
For the HTML we'll need:
<ul class="ml-12 leading-relaxed">
<li>A log in form for unauthenticated users.</li>
<li>A conditional error message if the log in form was incorrect.</li>
<li>A log out button for authenticated users.</li>
</ul>
<br/>
<br/>
Now let's create a minimal frontend skeleton. No network requests will be implemented yet.
<br/>
<br />
If you want to copy my React example:
<br/>
<br/>
<CodeWithSyntaxHighlight language={javascript} code={minimalSkeleton} />
<br/>
With that, the frontend will show the loading state <EmDash /> as it should!
<br/>
<br/>
<img loading="lazy" class="mx-auto rounded-lg" alt="loading state of our frontend" src={LoadingFrontendImage} height="276" width="754" />
<br/>
The request has not yet been made to check the client's auth state.
<br />
Before we do that, let's examine how requests should be made to Laravel.

<br />
<br />

<SectionTitle hash="laravel-stateful-requests" title="Sending Stateful Request to a Laravel API" />
<br />
When making stateful requests to a Laravel API, the <InlineCode>XSRF-TOKEN</InlineCode> cookie should always be included as a request header called <InlineCode>X-XSRF-TOKEN</InlineCode>.
<br />
If the client does not have an <InlineCode>XSRF-TOKEN</InlineCode> cookie, they can get one
from Laravel's <InlineCode>/sanctum/csrf-cookie</InlineCode> route.
<br />
<br />
It's also important to set the <InlineCode>Accept</InlineCode> and <InlineCode>Content-Type</InlineCode> headers as <InlineCode>application/json</InlineCode>.
<br/>
You can get 3xx redirect responses & unexpected response data if you forget to do so!
<br/>
<br/>
<br/>
To summarize with a diagram:
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="request cycle flow diagram" src={StatefulRequestImage} height="513" width="1888" />
<br />
<br />
Since all of our requests will need to check for the <InlineCode>XSRF-TOKEN</InlineCode> cookie and update request headers, we should make a wrapper around the <InlineCode>fetch</InlineCode> function to simplify this:
<CodeWithSyntaxHighlight language={javascript} code={fetchWrapper} />
Cool! We can use the <InlineCode>fetchWithXsrfToken</InlineCode> function and it will
automatically attach a valid <InlineCode>X-XSRF-TOKEN</InlineCode> header to our requests.
<br/>
<br/>
It will also add <InlineCode>Accept: application/json</InlineCode> and <InlineCode>Content-Type: application/json</InlineCode> headers to our requests.
<br/>
<br/>
Another thing to note in the <InlineCode>fetchWithXsrfToken</InlineCode> function, is that
every call to the native <InlineCode>fetch</InlineCode> function has the <InlineCode>credentials</InlineCode> option set to <InlineCode>"include"</InlineCode>. 
This is extremely important because it allows our
JavaScript requests to send & receive cookies <EmDash /> just like a regular browser navigation would.
<br/>
<br/>
<br/>
<br/>
OK we have a helper function to make requests.
<br /> Let's get back to where we were... sending a request to Laravel to check the user's auth status.
<br />

<br />
<br />

<SectionTitle hash="checking-auth" title="Checking the User's Auth Status" />
<br />
We are now ready to send a request to Laravel's <InlineCode>/api/user</InlineCode> route to
check whether the client is authenticated.
<br />
Laravel provides this API route by default.
<br />
<br />
Here are the next steps to implement:
<br />
<br />
<br />
<ol class="ml-12 leading-relaxed">
<li>
From the browser, send a request to the <InlineCode>/api/user</InlineCode> route with the <InlineCode>fetchWithXsrfToken</InlineCode> helper function.
</li>

<li>
When you receive a response, set the <InlineCode>isLoading</InlineCode> state to <InlineCode>false</InlineCode>.
</li>
<li>
If you received a 2xx response, set <InlineCode>isAuthenticated</InlineCode> to <InlineCode>true</InlineCode>, otherwise set <InlineCode>isAuthenticated</InlineCode> to <InlineCode>false</InlineCode>.
</li>
</ol>
<br />
<br />
Since I'm using React, I will make the request to Laravel inside the <InlineCode>useEffect</InlineCode> hook.
<br />
<br />
Here is my implementation:
<CodeWithSyntaxHighlight language={javascript} code={fetchUser} />
<br />
<br />
OK the request to check the User's auth status is ready!
<br />
<br />
Let's save & reload the frontend, and it will stop showing the loading state right?...
<br />
<br />
<strong>Nope!</strong> If you're following along using Vite, you are likely facing a CORS error!
<br/>
(If you didn't use Vite and don't have a CORS error, you can{" "}
<a class="underline" href="#logging-in">
skip to the next section.
</a>
)
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="cors error screenshot" src={CorsErrorImage} height="708" width="1481" />
<br />
This is because when we <a href="#scaffold-auth-routes" class="underline">
installed Laravel Breeze in the 3rd section
</a>
, it configures Laravel to expect the frontend on <InlineCode>localhost:3000</InlineCode>.
<br />
<br />
So let's fix it.
<br />
<br />
To fix this I will update the <InlineCode>FRONTEND_URL</InlineCode> variable in Laravel's <InlineCode>.env</InlineCode> to match Vite's server at <InlineCode>http://localhost:5173</InlineCode> :
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="FRONTEND_URL env variable" src={FrontendUrlImage} height="33" width="393" />
<br />
<br />
This should fix the CORS error.
<br />
* Note that if you don't provide the protocol (http://) or the correct port for Vite, you will have issues.
<br/>
<br/>
Save all changes, refresh your frontend and you should receive a response.
<br />
The server responds with the auth state, and the form is shown because we are not authenticated!
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="successful response screenshot" src={AuthStatusReceivedImage} height="395" width="1158" />
<br />
<br />
If you look in the DevTools console, the CORS error should be gone, and a 401 Unauthorized error is expected:
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="screnshot of 401 error" src={Error401} height="112" width="1471" />
<br />
This is great! It means our frontend and backend are communicating successfully! <br />
We have not yet logged in, so it is expected to receive a 401. <br />
<br />
Let's try logging in <EmDash /> in the next section.
<br />
<br />
<br />
<SectionTitle hash="logging-in" title="Making Login Request" />
<br />
I hope you wrote down the dummy User's email address from <a href="#make-dummy-user" class="underline">section 4</a>!
<br />
The default password that Laravel generates is <InlineCode>password</InlineCode>.
<br />
<br />
Let's write a JavaScript event handler to submit the form as JSON to Laravel's{" "}
<InlineCode>/login</InlineCode> endpoint.
<br />
<br />
It will need to:
<ol class="ml-12 leading-relaxed [&>li]:my-4">
    <li>Prevent the default page refresh when the form is submitted.</li>
    <li>Send a POST request to the <InlineCode>/login</InlineCode> endpoint with the email/password payload.</li>
    <li>If the response is a success: 
        <br />
        <ul class="ml-12 leading-relaxed [&>li]:my-4">
            <li>The <InlineCode>isAuthenticated</InlineCode> state becomes <InlineCode>true</InlineCode>.</li>
            <li>The <InlineCode>isWrong</InlineCode> state becomes <InlineCode>false</InlineCode>.</li>
        </ul>
        Otherwise:
        <br />
        <ul class="ml-12 leading-relaxed [&>li]:my-4">
            <li>The <InlineCode>isWrong</InlineCode> state becomes <InlineCode>true</InlineCode>.</li>
        </ul>
    </li>
</ol>
<br />
Here is my <InlineCode>handleLogin</InlineCode> function:
<CodeWithSyntaxHighlight language={javascript} code={handleLogin} />
<br />
Don't forget to set it as a <InlineCode>submit</InlineCode> event handler for the login
form! I will leave that to you.
<br />
<br />
<br />
<br />
<br />
The login form is now ready to send the inputs we fill out to the{" "}
<InlineCode>/login</InlineCode> route, and update the states accordingly.
<br />
<br />
First, let's try to login as the dummy user with an <em>invalid</em> password: <br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="form showing the isWrong state" src={WrongFormImage} height="339" width="1143" />
<br />
The <InlineCode>isWrong</InlineCode> state becomes <InlineCode>true</InlineCode> and we see the error state!
<br />
<br />
* As a side note, the validation error message from the server is available in the response. <br />
&nbsp; (I kept my code simple for demonstration.)
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="screenshot of validation error message received from server" src={ErrorMessageImage} height="317" width="1033" />
<br />
The server recognized that there is no user with the invalid credentials we provided! <br />
<br />
<br />
<br />
Let's try sending the correct email / password this time.
<br /> 
I am logging in as my dummy user <InlineCode>alycia96@example.net</InlineCode> with
the default password, <InlineCode>password</InlineCode>:
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="successful authentication screenshot" src={FirstAuthenticatedImage} height="265" width="779" />
<br />
<br />
And we get a successful response!
<br />
High 5s all around! We can go home now.... RIGHT?
<br />
<br />
<br />
Not quite, but we're getting close!
<br />
<br />
We still have one more issue.
<br />
<br />
<br />
Try refreshing the page and the user is....... unauthenticated!?
<br />
Why am I receiving a 401 error if I authenticated a moment ago?
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="Fetch user receives 401 error on refresh" src={RefreshAuthImage} height="1028" width="1505" />
<br />
<br />
This is really simple to fix, let's do it in the next section.
<br />

<br />
<br />

<SectionTitle hash="configure-stateful-domains" title="Configuring Sanctum Stateful Domains" />
<br />
So far, our frontend and backend are communicating successfully, but we have one problem.
<br />
The user's session is not persisting when the page is reloaded.
<br />
<br />
To solve this we need to add one more env variable called <InlineCode>SANCTUM_STATEFUL_DOMAINS</InlineCode> in Laravel's <InlineCode>.env</InlineCode> file.
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="screenshot of SANCTUM_STATEFUL_DOMAINS env variable" src={StatefulDomainsImage} height="42" width="577" /> <br />
The value should be similar to the <InlineCode>FRONTEND_URL</InlineCode> variable we set
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
<img loading="lazy" class="mx-auto rounded-lg" alt="screenshot of auth persisted on refresh" src={PersistentAuthImage} height="1348" width="1027" /> <br />
<br />
We're almost done! Let's wrap this up and implement the Logout functionality.

<br />
<br />

<SectionTitle hash="logging-out" title="Logging Out the User" />
<br />
Logging out the user is simple as there is no JSON payload. 
<br />
All we need to do is send a POST request to the <InlineCode>/logout</InlineCode> route and
Laravel will invalidate the session.
<br /> <br />
One thing to note, by default, Laravel's session cookies have the{" "}
<InlineCode>http-only</InlineCode> attribute for extra protection against XSS attacks. This
means that we can't delete the session purely from the client-side using JavaScript.
<br />
<br />
(i.e. <InlineCode>document.cookie = null</InlineCode> will not delete{" "}
<InlineCode>http-only</InlineCode> cookies)
<br />
<br />
<br />
That said, let's implement the <InlineCode>handleLogout</InlineCode> function to call when
the Logout button is clicked.
<br />
It will simply send a POST request to the <InlineCode>/logout</InlineCode> route and update
the UI state:
<br />
<br />
<CodeWithSyntaxHighlight language={javascript} code={handleLogout} />
<br />
Don't forget to wire up the <InlineCode>handleLogout</InlineCode> function to the logout
form's <InlineCode>submit</InlineCode> event!
<br />
<br />
Fairly simple yea? OK let's give it a try.
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="screenshot of logout success response" src={LogoutImage} height="951" width="1341" />
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

<br />
<br />
<SectionTitle hash="postman-setup" title="Setting Up Postman for Laravel with Cookie Authentication" />
<br />
A tool like Postman is virtually a must-have while developing an API.
<br />
You can test out your API routes without writing hefty lines of JavaScript to call your server.
<br />
<br />
However, it is important to note that Postman and similar clients are <b>not</b> web browsers, so some default browser behaviors may
need to be explicitly configured.
<br />
<br />
<br />
It's simpler if I show you, so open up Postman and create a new Collection for our API.
<br />
I also created 3 new requests for demonstration later: <InlineCode>login</InlineCode>, <InlineCode>user</InlineCode>,<InlineCode>logout</InlineCode>.
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="creating new collection in Postman" src={NewCollectionImage} height="362" width="258" />
<br />
In the Collection settings, we need to define a <em>collection variable</em>.<br /> I'll call it{" "}
<InlineCode>csrf-token</InlineCode>, and the value can be empty.
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="creating a new collection variable in Postman" src={CollectionVariableImage} height="687" width="1381" />
<br />
This is a variable that Postman will manage, and we'll use it to supply our requests with the{" "}
<InlineCode>X-XSRF-TOKEN</InlineCode> header.
<br />
<br />
<br />
Next, click on the Collection's <b>Pre-request Script</b> tab, and add
this script like so:
<CodeWithSyntaxHighlight language={javascript} code={postmanPrefetchScript} />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="adding a pre-request script in a Postman Collection" src={PreRequestScriptImage} height="857" width="1380" />
<br />
<br />
This configures Postman to fetch a new <InlineCode>XSRF-TOKEN</InlineCode> cookie before
requests <EmDash /> similar to what I did with the React app.
<br />
<br />
<br />
<br />
When you make requests, supply your request with the headers:
<br />
<ul class="ml-12 leading-relaxed">
    <li><InlineCode>Accept: application/json</InlineCode></li>
    <li><InlineCode>Content-Type: application/json</InlineCode></li>
</ul>
<br />
Additionally, we need to add the <InlineCode>X-XSRF-TOKEN</InlineCode> header, and we should
add a <InlineCode>Referer</InlineCode> header as well.
<br />
<br />
If you aren't familiar with the <InlineCode>Referer</InlineCode> header, it is a default
header that web browsers send. <br />
But since we're using Postman, it isn't sent automatically. We want to <em>emulate</em> the browser behavior by setting this header
manually.
<br />
<br />
In conclusion, <em>all</em> your Postman API requests should have these headers added. 
<br />
I've blurred out some other headers that Postman provides as they are not important:
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="screenshot of necessary headers in a Postman request for Laravel" src={PostmanHeadersImage} height="534" width="922" />
<br />
The value for the <InlineCode>Referer</InlineCode> header is the same as the value for
Laravel's <InlineCode>FRONTEND_URL</InlineCode> env variable.
<br />
And we provide the <InlineCode>X-XSRF-TOKEN</InlineCode> header by referencing the
collection variable <InlineCode>{"{{csrf-token}}"}</InlineCode>.
<br />
<br />
<br />
OK that's all we need to set up Postman for Laravel Sanctum!
<br />
Here's an example of receiving a successful response:
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="screenshot of a successful authenticated response from the /api/user route" src={PostmanUserRouteImage} height="732" width="1413" />

<br />
<br />

<SectionTitle hash="about-ssr" title="A Note About Server-Side Rendering (SSR)" />
<br />
Up until this point, our focus was on client-side rendering (CSR) and fetching from the browser.
<br/>
And for good reason! If you want to server render your UI, the concepts are almost the same!
<br/>
<br/>
The only difference is that you have <em>another</em> server between the browser and your Laravel server.
<br />
<br />
If there is enough interest maybe I will write an article specifically on SSR.
<br />
But for now, I will leave you with this diagram to figure it out:
<br />
<br />
<img loading="lazy" class="mx-auto rounded-lg" alt="extended flow diagram with a SSR server in between the User and the Laravel server" src={SSRDiagramImage} height="563" width="1856" />
<br />
<br />

<SectionTitle hash="conclusion" title="Conclusion" />
<br />
Phew that was lot!
<br />
<br />
We learned how to troubleshoot CORS and 419 CSRF errors. We also implemented some authentication features, and learned how to manage cookies &
authentication in non-browser clients.
<br />
<br />
This is information that I wish I had when I was starting with Laravel API development, and I hope it has helped you! Leave a
comment if you have any questions or feedback!
