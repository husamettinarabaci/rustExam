## 📘 Bölüm: Ömürler I  
### 🔹 Kategori: Ömür Çıkarım Kuralları  
#### ✅ Cevap 73: Ömür çıkarım kuralları

**Açıklama:**
Rust'ın ömür çıkarım kuralları, derleyicinin ömürleri otomatik olarak tahmin etmesini sağlar. Bir fonksiyon tek bir referans parametresi alıp, referansa bağlı olmayan bir değer döndürüyorsa, ömür belirtimi gerekmez.

```rust
fn uzunluk(s: &str) -> usize {
    s.len()
}

fn main() {
    let metin = "merhaba dünya";
    let len = uzunluk(metin);
    println!("Uzunluk: {}", len);
}
```

// Açıklama:
// Fonksiyonun döndürdüğü değer referansa bağlı olmadığı için ömür belirtimi gerekmez.
// Rust'ın ömür çıkarım kuralları bu durumu otomatik olarak yönetir.
