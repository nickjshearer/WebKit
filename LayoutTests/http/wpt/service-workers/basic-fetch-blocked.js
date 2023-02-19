function doTest(event)
{
    event.respondWith(new Response(null, { status: 200, statusText: "Hello from service worker", headers: [["Hello", "World"]] }));
}

self.addEventListener("fetch", doTest);
