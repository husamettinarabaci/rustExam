## 📘 Bölüm: Enumlar II  
### 🔹 Kategori: Option ve Enum Eşleme  
#### ✅ Cevap 115: Option üzerinde eşleme

Bu örnekte, Rust'ta Option enumu ile desen eşleme kullanılarak isteğe bağlı değerlerin nasıl güvenli şekilde ele alınacağı gösterilmektedir. `Some` ve `None` durumları ayrı ayrı kontrol edilerek hata riski ortadan kaldırılır.

```rust
fn main() {
    let belki_sayi: Option<i32> = Some(10);
    match belki_sayi {
        Some(deger) => println!("Değer: {}", deger),
        None => println!("Değer bulunamadı"),
    }
}
```
