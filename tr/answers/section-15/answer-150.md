## 📚 Bölüm: Crate'ler ve Harici Paketler  
### 🔹 Kategori: Cargo ve Bağımlılıklar  
#### ✅ Cevap 150: Derleme betikleri kullanımı

**Açıklama:**

- `build.rs` dosyası, Cargo'nun crate'i derlemeden önce çalıştırdığı isteğe bağlı bir derleme betiğidir. Kod üretimi, yerel kod derleme veya ortam değişkeni ayarlama gibi işler için kullanılır.
- Mesaj yazdıran örnek bir `build.rs`:
  ```rust
  fn main() {
      println!("cargo:warning=Özel build script çalışıyor!");
  }
  ```
- Cargo, proje kökünde `build.rs` varsa otomatik olarak algılar ve çalıştırır. Betik, Cargo ile özel `println!` yönergeleriyle (örn. `cargo:rerun-if-changed=...`) iletişim kurabilir.
- Build script'ler gelişmiş derleme özelleştirmeleri ve otomasyon için kullanılır.
