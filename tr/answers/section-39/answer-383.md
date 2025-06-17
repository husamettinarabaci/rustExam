## 📘 Bölüm: İleri Düzey Desen Eşleme
### 🔹 Kategori: Koşullu eşleme için `if let` kullanımı
#### ✅ Cevap 383: Koşullu eşleme için `if let` kullanımı

Bu soruda, Option veya Result tipi bir değer üzerinde `if let` ile desen eşleme yapılır. Bu, değerin varlığına göre farklı işlemler yapmayı sağlar.

```rust
fn main() {
    let maybe_num = Some(42);
    if let Some(n) = maybe_num {
        println!("Value: {}", n);
    } else {
        println!("No value found");
    }
}
```
