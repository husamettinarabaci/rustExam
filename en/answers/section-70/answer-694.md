## 📘 Section: Full-Stack Rust Integration  
### 🔹 Category: Writing CLI tools that interact with web services  
#### ✅ Answer 694: Writing CLI tools that interact with web services

A Rust CLI tool can interact with web services using libraries like `reqwest` for HTTP requests. The tool can send requests and process responses.

Example:
```rust
use reqwest::blocking::get;

fn main() {
    let resp = get("https://api.github.com").unwrap().text().unwrap();
    println!("{}", resp);
}
```
This CLI tool fetches and prints the response from a web API.
