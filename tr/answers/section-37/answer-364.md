## 📘 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: use ile isimleri kapsam içine alma  
#### ✅ Cevap 364: use ile isimleri kapsam içine alma

Rust'ta `use` anahtar kelimesi, modül veya fonksiyon gibi isimleri kapsam içine alarak doğrudan kullanılmasını sağlar. Böylece uzun yol (path) yazmak yerine kısa isimlerle erişim mümkün olur.

Aşağıdaki örnekte, iki modül ve her birinde bir fonksiyon tanımlanmıştır. `use` ile bu fonksiyonlar ana fonksiyonda doğrudan çağrılabilir:

```rust
mod foo {
    pub fn foo_fn() {
        println!("foo_fn called");
    }
}

mod bar {
    pub fn bar_fn() {
        println!("bar_fn called");
    }
}

use foo::foo_fn;
use bar::bar_fn;

fn main() {
    foo_fn(); // use ile doğrudan çağrılır
    bar_fn(); // use ile doğrudan çağrılır
}
```
