## 📘 Section: Systems Security and Hardening
### 🔹 Category: Secure Handling of Secrets and Keys
#### ✅ Answer 916: Safe handling of secrets and keys

Secrets and cryptographic keys should never be hardcoded or exposed in logs. Use environment variables or secret managers to store them securely. The example below demonstrates loading a secret from an environment variable and using it without exposing it in logs.

```rust
use std::env;

fn main() {
    let secret = env::var("MY_SECRET_KEY").expect("Secret key not set");
    // Use the secret for cryptographic operations, but never print it
    println!("Secret loaded and ready for use.");
}
```

Best practices:
- Never print secrets or keys.
- Use libraries like `dotenv` for local development.
- For production, use a dedicated secret manager (e.g., HashiCorp Vault, AWS Secrets Manager).
- Zero secrets from memory after use if possible.
