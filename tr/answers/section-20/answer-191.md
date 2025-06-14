## 📘 Bölüm: Güvensiz Rust ve İleri Özellikler  
### 🔹 Kategori: Unsafe Blokları  
#### ✅ Cevap 191: Rust'ta unsafe blok kullanımı

Unsafe bloklar, derleyicinin güvenliğini garanti edemediği işlemler için gereklidir. Raw pointer dereference etmek gibi işlemler dikkatli kullanılmazsa tanımsız davranışa yol açabilir.

```rust
fn deref_raw(ptr: *const i32) -> i32 {
    unsafe { *ptr }
}
```
