## 📘 Bölüm: Sistem Güvenliği ve Sertleştirme
### 🔹 Kategori: AddressSanitizer ve Diğer Denetleyicilerle Çalışma
#### ✅ Cevap 918: AddressSanitizer ve diğer denetleyicilerle çalışma

AddressSanitizer (ASan) gibi denetleyiciler, taşma ve use-after-free gibi bellek güvenliği hatalarını tespit etmeye yardımcı olur. Rust'ta ASan kullanmak için projeyi uygun bayraklarla derleyin:

```sh
RUSTFLAGS="-Zsanitizer=address" cargo run
```

Nightly derleyici ve `--target x86_64-unknown-linux-gnu` gibi bir hedef kullanmalısınız. Bellek hatası oluşturan örnek kod:

```rust
fn main() {
    let dizi = [1, 2, 3];
    unsafe {
        let _ = *dizi.as_ptr().add(10); // Sınır dışı erişim
    }
}
```

ASan bu hatayı çalışma zamanında yakalar. Diğer denetleyiciler arasında ThreadSanitizer (TSan) ve MemorySanitizer (MSan) bulunur.
