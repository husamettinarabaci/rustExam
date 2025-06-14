## 📚 Section: Traits  
### 🔹 Category: Trait Bounds  
#### ✅ Answer 93: Using trait bounds in functions

**Explanation:**
Trait bounds restrict generic parameters to types that implement a trait.

```rust
trait Printable {
    fn print(&self);
}

fn print_any<T: Printable>(item: T) {
    item.print();
}

struct Data;
impl Printable for Data {
    fn print(&self) {
        println!("Data");
    }
}

fn main() {
    let d = Data;
    print_any(d);
}
```
