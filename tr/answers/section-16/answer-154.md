## 📚 Bölüm: Koleksiyonlar: Vektörler  
### 🔹 Kategori: Vektör Temelleri  
#### ✅ Cevap 154: Vektör üzerinde yineleme

Rust'ta vektör üzerinde yinelemek için `for` döngüsü kullanılır. Elemanların referansları üzerinden yineleyip her birini yazdırabilirsiniz.

```rust
fn main() {
    let meyveler = vec!["elma", "muz", "kiraz"];
    for meyve in &meyveler {
        println!("{}", meyve);
    }
}
```
