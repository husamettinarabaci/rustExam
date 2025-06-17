## 📘 Bölüm: Desen Eşleme ve Kontrol Akışı  
### 🔹 Kategori: Enumlar ve Desen Eşleme  
#### ✅ Cevap 282: Kısa desen eşleme için `if let` ve `while let` kullanımı

Bu soruda, Rust'ta `if let` ve `while let` ile kısa desen eşleme teknikleri gösterilmektedir. `if let`, belirli bir enum varyantını kolayca kontrol etmek için kullanılırken, `while let` ise bir koleksiyon üzerinde belirli varyantlar gelene kadar yineleme yapmak için kullanılır.

```rust
enum Item {
    Number(i32),
    Text(String),
    None,
}

fn main() {
    let value = Item::Number(42);
    if let Item::Number(n) = value {
        println!("Number: {}", n);
    }

    let items = vec![
        Item::Number(1),
        Item::Text("hello".to_string()),
        Item::Number(2),
        Item::None,
    ];
    let mut iter = items.into_iter();
    while let Some(Item::Number(n)) = iter.next() {
        println!("Found number: {}", n);
    }
}
```
