## 📘 Bölüm: Traitler I  
### 🔹 Kategori: Birden Fazla Trait Sınırı  
#### ✅ Cevap 207: Birden fazla trait sınırı

Bir generic türün birden fazla trait'i uygulamasını gerektirmek için trait sınırlarında `+` işareti kullanılır. Burada, `print_and_clone` fonksiyonu `T: Printable + Cloneable` gerektirir.

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
        println!("Etiket: {}", self.0);
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
    println!("Klonlanmış: {:?}", cloned);
}
```
