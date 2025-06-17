## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Modül Yeniden Dışa Aktarma  
#### ✅ Cevap 294: İç içe modüllerden öğeleri yeniden dışa aktarma

Bu örnekte, iç içe modüllerde tanımlanan bir fonksiyon, üst modülde `pub use` ile yeniden dışa aktarılır. Böylece, ana fonksiyonda doğrudan üst modül üzerinden çağrılabilir. Bu yöntem, modül hiyerarşisini dışarıya daha sade bir arayüzle sunmak için kullanılır.

```rust
mod outer {
    pub mod inner {
        pub fn hello() {
            println!("Hello from inner module!");
        }
    }
    pub use self::inner::hello;
}

fn main() {
    outer::hello();
}
```
