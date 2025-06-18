## 📘 Section: Lifetime System and HRTB Mastery  
### 🔹 Category: Defining structs that hold references with lifetimes  
#### ✅ Answer 715: Defining structs that hold references with lifetimes

Below is an example of a struct that holds a reference and requires a lifetime parameter.

```rust
struct Holder<'a> {
    data: &'a str,
}

fn main() {
    let s = String::from("Rust");
    let h = Holder { data: &s };
    println!("Data: {}", h.data);
}
```

The `Holder` struct uses the `'a` lifetime to ensure the reference is valid as long as the struct instance exists.
