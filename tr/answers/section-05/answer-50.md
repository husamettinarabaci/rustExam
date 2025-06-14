# Answer 50

## 📗 Bölüm: Fonksiyonlar I  
### 🔹 Kategori: Güvensiz Kod  
#### ✅ Cevap 50: `unsafe` anahtar kelimesinin amacı

**Açıklama:**
`unsafe` anahtar kelimesi, Rust'ın güvenlik garantilerinin devre dışı bırakıldığı ve sorumluluğun geliştiriciye geçtiği kod bloklarını belirtmek için kullanılır.

**Örnek:**
```rust
let ptr = 42 as *const i32;
unsafe {
    println!("Değer: {}", *ptr);
}
```
Burada ham pointer ile işlem yapmak için `unsafe` gereklidir.
