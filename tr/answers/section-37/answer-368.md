## 📘 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: Derin iç içe öğelere erişim  
#### ✅ Cevap 368: Derin iç içe öğelere erişim

Rust'ta iç içe modüller ile hiyerarşik bir yapı oluşturabilirsiniz. En içteki modüldeki herkese açık fonksiyona tam yol ile erişebilirsiniz.

`main.rs`:
```rust
mod a {
    pub mod b {
        pub mod c {
            pub fn deep_hello() {
                println!("Derin modülden merhaba!");
            }
        }
    }
}

fn main() {
    a::b::c::deep_hello();
}
```
