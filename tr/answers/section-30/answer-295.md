## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Büyük Projelerde Yol Kullanımı  
#### ✅ Cevap 295: Büyük projelerde `crate::` ve `super::` yollarını kullanma

Bu örnekte, birden fazla modül içeren bir projede hem `crate::` hem de `super::` yolları ile üst düzeydeki bir fonksiyona erişim gösterilmektedir. `crate::` kök crate'den, `super::` ise bir üst modülden başlar. Bu, modül hiyerarşisinde esnek erişim sağlar.

```rust
mod utils {
    pub fn greet() {
        println!("Hello from utils!");
    }
}

mod features {
    pub mod feature_a {
        pub fn call_greet() {
            // crate::utils::greet() ile erişim
            crate::utils::greet();
            // super::super::utils::greet() ile erişim
            super::super::utils::greet();
        }
    }
}

fn main() {
    features::feature_a::call_greet();
}
```
