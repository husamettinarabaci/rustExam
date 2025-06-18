## 📘 Bölüm: Sistem Programlama İleri Konular  
### 🔹 Kategori: Platformlar Arası Sistem API'leri  
#### ✅ Cevap 799: Çoklu platform sistem API'leri

Rust ile çoklu platform sistem API'leri yazmak için koşullu derleme (`cfg` öznitelikleri) ve platforma özel modüller kullanılır. Böylece kod, farklı işletim sistemlerinde çalışabilir.

```rust
#[cfg(target_os = "windows")]
fn platform_name() {
    println!("Windows platformu");
}

#[cfg(target_os = "linux")]
fn platform_name() {
    println!("Linux platformu");
}
```
Bu örnekte, işletim sistemine göre farklı fonksiyonlar derlenmektedir.
