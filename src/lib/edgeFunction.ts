// Lightweight replacement for supabase.functions.invoke (avoids bundling supabase-js
// on public pages). Mirrors its { data, error } shape; error.context is the Response.
interface InvokeError extends Error {
  context?: Response;
}

export async function invokeEdgeFunction<T>(
  name: string,
  options: { body?: unknown } = {},
): Promise<{ data: T | null; error: InvokeError | null }> {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  try {
    const response = await fetch(`${url}/functions/v1/${name}`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options.body ?? {}),
    });
    if (!response.ok) {
      const error: InvokeError = new Error(`Edge function returned ${response.status}`);
      error.context = response;
      return { data: null, error };
    }
    const data = (await response.json().catch(() => null)) as T | null;
    return { data, error: null };
  } catch (err) {
    return { data: null, error: err instanceof Error ? err : new Error(String(err)) };
  }
}
