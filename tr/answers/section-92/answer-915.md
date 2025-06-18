## 📘 Bölüm: Sistem Güvenliği ve Sertleştirme
### 🔹 Kategori: Sandboxing ve Yetenek Tabanlı Güvenlik
#### ✅ Cevap 915: Sandboxing ve yetenek tabanlı güvenlik

Sandboxing, kodun yalnızca kontrollü bir ortamda çalışmasını sağlayarak güvenlik risklerini azaltır. Rust'ta tip sistemiyle hassas API'lere erişimi kısıtlayabilir veya işletim sistemi seviyesinde (ör. ayrı bir işlemde sınırlı izinlerle çalıştırma) sandboxing uygulayabilirsiniz. Aşağıdaki örnekte, güvenilmeyen kod ayrı bir child process'te çalıştırılarak izole edilir:

```rust
use std::process::Command;

fn sandboxta_calistir() {
    let output = Command::new("/usr/bin/env")
        .arg("echo")
        .arg("Sandbox'tan merhaba!")
        .output()
        .expect("İşlem başlatılamadı");
    println!("Sandbox çıktısı: {}", String::from_utf8_lossy(&output.stdout));
}

fn main() {
    sandboxta_calistir();
}
```

Daha gelişmiş sandboxing için container, seccomp veya işletim sistemi özel API'leri kullanılabilir. Yetenek tabanlı güvenlikte ise fonksiyonlara veya eklentilere yalnızca ihtiyaç duydukları kaynaklar verilerek erişim sınırlandırılır.
