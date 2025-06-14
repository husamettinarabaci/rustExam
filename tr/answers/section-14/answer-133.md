## 📘 Bölüm: Modüller ve Paketler  
### 🔹 Kategori: İç İçe Modüller  
#### ✅ Cevap 133: İç içe modüller

**Açıklama:**
Modüller birbirinin içinde tanımlanabilir. `::` ile erişilir.

```rust
mod dis {
    pub mod ic {
        pub fn merhaba() {}
    }
}
fn main() {
    dis::ic::merhaba();
}
```
