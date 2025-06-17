## 📘 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: İç içe modüllerle kod organizasyonu  
#### ✅ Cevap 363: İç içe modüllerle kod organizasyonu

Rust'ta modüller, kodunuzu mantıksal olarak bölmek ve düzenlemek için kullanılır. Modüller başka modüller (alt modüller) içerebilir. Her modül kendi fonksiyonlarını ve değişkenlerini tanımlayabilir. Alt modüllerdeki öğelere erişmek için yol (path) kullanılır.

Aşağıdaki örnekte, iç içe modüller ve erişim gösterilmiştir:

```rust
mod outer {
    pub fn outer_fn() {
        println!("outer_fn called");
    }
    pub mod inner {
        pub fn inner_fn() {
            println!("inner_fn called");
        }
    }
}

fn main() {
    outer::outer_fn();           // outer modülündeki fonksiyon
    outer::inner::inner_fn();    // inner alt modülündeki fonksiyon
}
```
