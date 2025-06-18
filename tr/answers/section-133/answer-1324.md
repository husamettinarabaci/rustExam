## 📘 Bölüm: Derleme Zamanı Programlama Desenleri  
### 🔹 Kategori: Koşullu Derleme için cfg Öznitelikleri  
#### ✅ Cevap 1324: `cfg` öznitelikleriyle koşullu derleme

`cfg` öznitelikleri, kodun yalnızca belirli platformlarda veya özelliklerde derlenmesini sağlar.

```rust
#[cfg(target_os = "linux")]
fn platform_message() {
    println!("Linux platformunda çalışıyor.");
}

#[cfg(target_os = "windows")]
fn platform_message() {
    println!("Windows platformunda çalışıyor.");
}

fn main() {
    platform_message();
}
```
Bu örnekte, `platform_message` fonksiyonu yalnızca ilgili platformda derlenir ve çalışır.
