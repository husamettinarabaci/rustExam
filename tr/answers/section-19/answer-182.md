## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Option'ı Açma ve Eşleme  
#### ✅ Cevap 182: `Option`'ı açma ve eşleme

Rust'ta `Option` değerleri desen eşleme veya `unwrap_or` gibi metodlarla yönetilebilir. Burada, `ilk_al` fonksiyonu ilk elemanı `Option<i32>` olarak döndürür ve her iki yöntem de gösterilmiştir.

```rust
fn ilk_al(sayilar: &[i32]) -> Option<i32> {
    sayilar.get(0).copied()
}

fn main() {
    let dizi = [10, 20, 30];
    // Match ile kullanım
    match ilk_al(&dizi) {
        Some(deger) => println!("İlk: {}", deger),
        None => println!("Eleman yok"),
    }
    // unwrap_or ile kullanım
    let ilk = ilk_al(&dizi).unwrap_or(-1);
    println!("İlk (varsayılanla): {}", ilk);
}
```
