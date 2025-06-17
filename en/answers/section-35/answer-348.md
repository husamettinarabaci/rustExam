## 📘 Section: Testing and Debugging
### 🔹 Category: Debugging Tools
#### ✅ Answer 348: Debugging with dbg! and println!

The `dbg!` macro prints the value of an expression along with file and line information, making it useful for quick debugging. The `println!` macro prints only the value or message you specify. `dbg!` returns the value it prints, while `println!` just outputs to the terminal.

```rust
fn main() {
    let x = 42;
    dbg!(x); // Prints value with file and line info
    println!("Value of x: {}", x); // Prints only the value
}
```

Sample output:

```
[src/main.rs:3] x = 42
Value of x: 42
```
