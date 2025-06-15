## 📘 Bölüm: Jenerikler I  
### 🔹 Kategori: Jenerik ilişkili türler  
#### ✅ Cevap 219: Jenerik ilişkili türler

İlişkili türü olan bir trait, implement edenlerin somut bir tür belirtmesini sağlar. Burada, `Container` trait'i ilişkili tür olarak `Item` kullanır ve `NumberBox` için implement edilmiştir.

```rust
trait Container {
    type Item;
    fn contains(&self, item: &Self::Item) -> bool;
}

struct NumberBox {
    value: i32,
}

impl Container for NumberBox {
    type Item = i32;
    fn contains(&self, item: &i32) -> bool {
        self.value == *item
    }
}

fn main() {
    let kutu = NumberBox { value: 10 };
    println!("10 içeriyor mu? {}", kutu.contains(&10));
    println!("5 içeriyor mu? {}", kutu.contains(&5));
}
```
Bu örnek, ilişkili türlerin trait'lerde nasıl kullanılacağını ve bir yapı için nasıl implement edileceğini gösterir.
