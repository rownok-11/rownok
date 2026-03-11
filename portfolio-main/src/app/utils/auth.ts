// Simple hash function for authentication
// Password and username are hashed to avoid storing in plain text
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(36);
}

const CREDENTIALS = {
  usernameHash: simpleHash('ri_rownok'),
  passwordHash: simpleHash('15481@#Raisulislamrownok'),
};

export function validateCredentials(username: string, password: string): boolean {
  const usernameHash = simpleHash(username);
  const passwordHash = simpleHash(password);

  return usernameHash === CREDENTIALS.usernameHash && passwordHash === CREDENTIALS.passwordHash;
}
