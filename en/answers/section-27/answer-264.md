## 📘 Section: Lifetimes and Borrowing Semantics  
### 🔹 Category: Returning References from Functions Safely  
#### ✅ Answer 264: Returning references from functions safely

In Rust, to return a reference from a function, the returned reference must be tied to the lifetime of one of the function's parameters. Otherwise, the compiler will reject the code due to a potential dangling reference. Below are both invalid and valid examples.

**Invalid Example:**
```rust
fn get_ref() -> &String {
    let s = String::from("hello");
    &s // ERROR: s does not live long enough
}
```

**Valid Example:**
```rust
fn get_first<'a>(s: &'a String) -> &'a str {
    &s[0..1]
}

fn main() {
    let text = String::from("rust");
    let first = get_first(&text);
    println!("First letter: {}", first);
}
```

Here, the returned reference is tied to the lifetime of the input parameter, making it safe.
