## 📘 Section: Pattern Matching and Control Flow  
### 🔹 Category: Exhaustive pattern matching requirements  
#### ✅ Answer 288: Understanding exhaustive pattern matching requirements

In Rust, `match` expressions must be exhaustive, meaning every possible value must be handled. If any variant is missing, the compiler will produce an error. This ensures safety and prevents unhandled cases at runtime.

Below is an example with a missing match arm (which causes a compiler error), and a corrected version that covers all variants:

```rust
// Missing match arm (will not compile):
enum Color {
    Red,
    Green,
    Blue,
}

fn print_color(color: Color) {
    match color {
        Color::Red => println!("Red"),
        Color::Green => println!("Green"),
        // Color::Blue is missing! Compiler error.
    }
}

// Correct usage:
fn print_color_fixed(color: Color) {
    match color {
        Color::Red => println!("Red"),
        Color::Green => println!("Green"),
        Color::Blue => println!("Blue"),
    }
}
```
