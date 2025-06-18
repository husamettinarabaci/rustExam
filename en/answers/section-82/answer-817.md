## 📘 Section: Advanced Macro Design  
### 🔹 Category: Debugging macros with `cargo expand`  
#### ✅ Answer 817: Debugging macros with `cargo expand`

Below is an example showing how to inspect a macro expansion using `cargo expand`.

```rust
macro_rules! say_hello {
    () => {
        println!("Hello!");
    };
}

fn main() {
    say_hello!();
}
```

In the terminal:
```
cargo install cargo-expand
cargo expand
```

The `cargo expand` output shows the expanded macro code, which is very useful for debugging macros.
