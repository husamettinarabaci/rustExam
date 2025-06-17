## 📘 Section: Modules and Visibility  
### 🔹 Category: Splitting modules into different files  
#### ✅ Answer 366: Splitting modules into different files

In this example, a module is defined in a separate file and used in the main file. This allows us to call a function from the module in the main function.

`src/main.rs`:
```rust
mod greetings;

fn main() {
    greetings::say_hello();
}
```

`src/greetings.rs`:
```rust
pub fn say_hello() {
    println!("Hello from greetings module!");
}
```
