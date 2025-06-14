## 📚 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: Modül Dosyaları  
#### ✅ Cevap 87: Modülleri dosyalara ayırmak

**Açıklama:**
Modüller ayrı dosyalara bölünebilir. `main.rs` içinde `mod mymod;` ile `mymod.rs` veya `mymod/mod.rs` eklenir.

```rust
// main.rs
mod mymod;

fn main() {
    mymod::selam();
}

// mymod.rs
yaygin fn selam() {
    println!("Dosyadan selam");
}
```
