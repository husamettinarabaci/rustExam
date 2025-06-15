## 📘 Bölüm: Traitler I  
### 🔹 Kategori: İlişkili Türlü Traitler  
#### ✅ Cevap 210: İlişkili tür içeren traitler

İlişkili türler, bir trait içinde yer tutucu bir tür tanımlamanıza ve implementasyon sırasında bunu belirtmenize olanak tanır. Bu örnekte, `Container` adında ilişkili türü `Item` olan bir trait tanımlanır. `NumberBox` struct'ı bu trait'i implement eder ve `Item`'ı `i32` olarak belirler. `get` metodu, içindeki değeri döndürür.

```rust
trait Container {
    type Item;
    fn get(&self) -> Self::Item;
}

struct NumberBox {
    value: i32,
}

impl Container for NumberBox {
    type Item = i32;
    fn get(&self) -> Self::Item {
        self.value
    }
}

fn main() {
    let nb = NumberBox { value: 42 };
    println!("{}", nb.get());
}
```
