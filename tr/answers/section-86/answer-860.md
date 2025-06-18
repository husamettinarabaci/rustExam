## 📘 Bölüm: Bellek Güvenliği ve Statik Analiz
### 🔹 Kategori: Sözleşmeler ve Assert'lerle Kod Güvenliğini Artırma
#### ✅ Cevap 860: Sözleşmeler ve assert'lerle kod güvenliğini artırma

Sözleşme tabanlı programlama, fonksiyonların giriş ve çıkış koşullarını açıkça belirtir. Rust'ta `assert!`, `assert_eq!` gibi makrolar ile önkoşul ve sonkoşullar kontrol edilir.

```rust
fn divide(a: i32, b: i32) -> i32 {
    assert!(b != 0, "Payda sıfır olamaz"); // önkoşul
    a / b
}

fn main() {
    let result = divide(10, 2);
    assert_eq!(result, 5); // sonkoşul
}
```

Bu yaklaşım, hataların erken tespitini ve kodun güvenliğini artırır.
