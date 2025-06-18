## 📘 Bölüm: Derleme Zamanı Programlama Desenleri  
### 🔹 Kategori: Prosedürel Makrolarla Derleme Zamanı Hata Üretimi  
#### ✅ Cevap 1326: Prosedürel makrolarla derleme zamanı hata üretimi

Prosedürel makrolar, belirli koşullar sağlanmazsa derleme zamanı hatası üretebilir. Aşağıda, yalnızca belirli bir isimle kullanılabilen bir makro örneği verilmiştir.

```rust
// src/lib.rs
tokenstream! {
    pub fn check_name(input: TokenStream) -> TokenStream {
        let input_str = input.to_string();
        if input_str != "ALLOWED" {
            panic!("Yalnızca 'ALLOWED' ismi kullanılabilir!");
        }
        TokenStream::new()
    }
}

// main.rs
use my_macro::check_name;

check_name!(ALLOWED); // Derlenir
// check_name!(FORBIDDEN); // Derleme zamanı hatası
```
Bu örnekte, makro yanlış kullanılırsa derleme zamanı hatası oluşur.
