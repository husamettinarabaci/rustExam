## 📘 Section: Traits I  
### 🔹 Category: Multiple Trait Bounds  
#### ✅ Answer 207: Multiple trait bounds

You can require a generic type to implement multiple traits by using the `+` syntax in the trait bounds. Here, `print_and_clone` requires `T: Printable + Cloneable`.

```rust
trait Printable {
    fn print(&self);
}

trait Cloneable {
    fn clone_value(&self) -> Self;
}

#[derive(Debug)]
struct Label(String);

impl Printable for Label {
    fn print(&self) {
        println!("Label: {}", self.0);
    }
}

impl Cloneable for Label {
    fn clone_value(&self) -> Self {
        Label(self.0.clone())
    }
}

fn print_and_clone<T: Printable + Cloneable>(item: T) -> T {
    item.print();
    item.clone_value()
}

fn main() {
    let label = Label(String::from("Rustacean"));
    let cloned = print_and_clone(label);
    println!("Cloned: {:?}", cloned);
}
```
