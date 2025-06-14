## 📚 Bölüm: Jenerikler  
### 🔹 Kategori: Jenerik Enumlar  
#### ✅ Cevap 73: Jenerik enum oluşturmak

**Açıklama:**
Jenerik enumlar, farklı türde değerleri temsil edebilir. `Option<T>` buna örnektir.

```rust
enum MyOption<T> {
    Some(T),
    None,
}

fn main() {
    let x = MyOption::Some(10);
    let y: MyOption<i32> = MyOption::None;
}
```
