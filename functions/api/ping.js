export async function onRequest({ request }) {
  return new Response(JSON.stringify({ ok: true, at: new Date().toISOString() }), {
    headers: { "content-type": "application/json" }
  });
}