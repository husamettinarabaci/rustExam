## 📘 Section: Generics I  
### 🔹 Category: Generic Methods in impl  
#### ✅ Answer 214: Generic methods in `impl`

You can define methods that are generic over their parameter types, even if the struct itself is not generic. In this example, the struct `Printer` has a method `print_any` that is generic over type `T` and prints any value that implements `Display`.

```rust
struct Printer;

impl Printer {
    fn print_any<T: std::fmt::Display>(&self, value: T) {
        println!("{}", value);
    }
}

fn main() {
    let p = Printer;
    p.print_any(123);
    p.print_any("hello");
    p.print_any(3.14);
}
```
