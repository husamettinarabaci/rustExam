## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Slice ve dizilerde desen eşleme  
#### ✅ Cevap 167: Slice ve dizilerde desen eşleme

Bu örnekte, Rust'ta slice ve dizilerde desen eşlemenin nasıl yapılacağı gösterilmektedir. Uzunluğa, belirli elemanlara veya `[ilk, .., son]` gibi desenlere göre eşleme yapılabilir.

```rust
fn main() {
    let arr = [1, 2, 3, 4];
    match arr {
        [first, .., last] => println!("İlk: {}, Son: {}", first, last),
        [single] => println!("Tek eleman: {}", single),
        _ => println!("Diğer desen"),
    }
}
```
