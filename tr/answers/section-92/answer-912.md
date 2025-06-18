## 📘 Bölüm: Sistem Güvenliği ve Sertleştirme
### 🔹 Kategori: Zamanlama saldırılarına karşı koruma
#### ✅ Cevap 912: Zamanlama saldırılarına karşı koruma

Zamanlama saldırısı, işlemlerin süresindeki farklılıklardan yararlanarak gizli verilerin (ör: şifre) açığa çıkmasına neden olabilir. Bunu önlemek için, gizli veriler üzerinde dallanma veya kısa devre yapmayan sabit zamanlı işlemler kullanılmalıdır.

Sabit zamanlı karşılaştırma örneği:

```rust
fn sabit_zamanli_esit(a: &[u8], b: &[u8]) -> bool {
    if a.len() != b.len() {
        return false;
    }
    let mut sonuc = 0u8;
    for (&x, &y) in a.iter().zip(b.iter()) {
        sonuc |= x ^ y;
    }
    sonuc == 0
}
```
