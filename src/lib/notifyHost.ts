// Sends an e-mail notification to the host through the Vercel function /api/notify.
// Returns true when the e-mail was accepted by the mail provider.
export async function notifyHost(payload: Record<string, unknown>): Promise<boolean> {
  try {
    const response = await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch {
    return false;
  }
}
