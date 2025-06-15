## 📘 Bölüm: Closure ve Sahiplik
### 🔹 Kategori: Closure ve Özyineleme
#### ✅ Cevap 250: Closure ve özyineleme

Rust'ta closure'lar doğrudan kendini çağırarak özyineleme yapamaz (isimli self-referans yoktur). Bunun için fonksiyon işaretçisi veya closure'ı parametre olarak geçmek gerekir. İşte faktoriyel için bir çözüm:

```rust
fn main() {
    fn faktoriyel(f: &dyn Fn(&dyn Fn(&dyn Fn(i32) -> i32, i32) -> i32, i32) -> i32, n: i32) -> i32 {
        if n == 0 { 1 } else { n * f(f, n - 1) }
    }
    let sonuc = faktoriyel(&faktoriyel, 5);
    println!("Faktoriyel: {}", sonuc); // Çıktı: Faktoriyel: 120
}
```

**Kısıtlama:**
Rust'ta closure'lar kendilerine isim verip doğrudan özyineleme yapamaz. Çözüm olarak yardımcı fonksiyon veya closure'ı parametre olarak geçmek gerekir.
