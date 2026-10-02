// Passcode that unlocks the /admin dashboard.
//
// This is a LIGHT gate, not real security: the check runs in the browser, so
// anyone could read it from the built JavaScript. It only keeps casual visitors
// out. Swap in server-side auth when a backend is added. CHANGE THIS passcode.
export const ADMIN_PASSCODE = 'asm2027'
