export async function onRequestGet() {
  return new Response("BK Functions OK", {
    headers: { "content-type": "text/plain; charset=utf-8" }
  });
}