## 📘 Bölüm: Unsafe Kod Desenleri ve Güvenlik
### 🔹 Kategori: FFI fonksiyonlarını güvenli şekilde implementasyon
#### ✅ Cevap 653: FFI fonksiyonlarını güvenli şekilde implementasyon

FFI (Foreign Function Interface) ile Rust, C fonksiyonlarını çağırabilir. `extern "C"` ile tanımlanır ve giriş/çıkışlar güvenlik için doğrulanmalıdır.

```rust
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    unsafe {
        let x = abs(-5);
        println!("{}", x);
    }
}
```

Güvenlik için: pointer'ları doğrulayın, null kontrolü yapın ve değişmezleri dokümante edin. Dış kodun Rust güvenlik garantilerini sağlamayacağını varsayın.
