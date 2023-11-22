export const minimalSkeleton = `import { useState } from "react";

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
`;

export const fetchWrapper = `const baseUrl = "http://localhost:8000";

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
`;

export const fetchUser = `useEffect(() => {
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
`;

export const handleLogin = `async function handleLogin(submitEvent) {
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
`;

export const handleLogout = `async function handleLogout(submitEvent) {
    submitEvent.preventDefault();

    await fetchWithXsrfToken("http://localhost:8000/logout", {
        method: "POST",
    }).then((response) => {
        if (response.ok) {
            setIsAuthenticated(false);
        }
    });
}
`;

export const postmanPrefetchScript = `pm.sendRequest({
    url: "http://localhost:8000/sanctum/csrf-cookie",
    method: "GET",
}, function(error, response, {cookies}){
    pm.collectionVariables.set("csrf-token", cookies.get("XSRF-TOKEN"))
});`;
