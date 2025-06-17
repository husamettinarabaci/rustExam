## 📘 Bölüm: İleri Düzey Desen Eşleme
### 🔹 Kategori: İç içe desen eşleme
#### ✅ Cevap 387: İç içe desen eşleme

Bu soruda, iç içe enum veya struct'lar üzerinde match ile desen eşleme yapılır ve içteki değerlere ulaşılır.

```rust
enum Outer {
    Inner(Option<i32>),
    None,
}

fn main() {
    let value = Outer::Inner(Some(99));
    match value {
        Outer::Inner(Some(n)) => println!("Inner value: {}", n),
        Outer::Inner(None) => println!("No inner value"),
        Outer::None => println!("No value"),
    }
}
```
