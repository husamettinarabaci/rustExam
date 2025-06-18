## 📘 Section: Structs I  
### 🔹 Category: Structs with References  
#### ✅ Answer 87: Structs with references

To use references in struct fields, you must specify lifetimes (unless using 'static). Here, `Car` has a `&str` field, so we add a lifetime parameter.

```rust
struct Car<'a> {
    brand: &'a str,
    year: u16,
}

fn main() {
    let car = Car {
        brand: "Toyota",
        year: 2020,
    };
    println!("Brand: {}", car.brand);
    println!("Year: {}", car.year);
}
```
