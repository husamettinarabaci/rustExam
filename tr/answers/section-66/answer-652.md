## 📘 Bölüm: Unsafe Kod Desenleri ve Güvenlik
### 🔹 Kategori: Raw pointer'ları çözmek için `unsafe` blokları kullanma
#### ✅ Cevap 652: Raw pointer'ları çözmek için `unsafe` blokları kullanma

Raw pointer'lar (`*const T`, `*mut T`) yalnızca `unsafe` bloklarında çözülebilir. Çünkü derleyici bu pointer'ın geçerliliğini veya hizalamasını garanti edemez.

```rust
fn main() {
    let x = 42;
    let ptr = &x as *const i32;
    unsafe {
        println!("{}", *ptr); // Güvenli çünkü ptr geçerli ve kapsamda
    }
}
```

Geçersiz veya sarkan pointer'ları çözmek tanımsız davranışa yol açar. Daima pointer'ın geçerli ve doğru hizalanmış olduğundan emin olun.
