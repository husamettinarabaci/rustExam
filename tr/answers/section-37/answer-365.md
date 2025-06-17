## 📘 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: pub use ile yeniden dışa aktarma  
#### ✅ Cevap 365: pub use ile yeniden dışa aktarma

Bu örnekte, bir fonksiyon bir modülde tanımlanır ve başka bir modülde `pub use` ile yeniden dışa aktarılır. Böylece ana fonksiyonda doğrudan bu fonksiyonu çağırabiliriz.

```rust
mod utils {
    pub fn greet() {
        println!("Hello from utils::greet!");
    }
}

mod prelude {
    pub use crate::utils::greet;
}

fn main() {
    prelude::greet();
}
```
