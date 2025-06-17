## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri  
### 🔹 Kategori: Enum Gösterimi ve FFI  
#### ❓ Soru 309: `#[repr]` ile enum gösterimi ve FFI

Aşağıdakileri yapan bir Rust kodu yazın:

- Bir enum tanımlayın ve `#[repr(u8)]` veya `#[repr(C)]` özniteliği ile gösterimini belirtin.
- Enumun C ile FFI (Foreign Function Interface) uyumlu olmasını sağlayın.
- Enumun bir C fonksiyonuna parametre olarak nasıl aktarılabileceğini gösterin (örnek C fonksiyonu Rust tarafında `extern "C"` ile tanımlanabilir).

🔧 **Görev:** Enumun bellek düzenini kontrol etmek ve FFI ile uyumlu hale getirmek için `#[repr]` özniteliğini kullanın. C ile birlikte çalışabilirlik için örnek bir FFI fonksiyonu gösterin.
