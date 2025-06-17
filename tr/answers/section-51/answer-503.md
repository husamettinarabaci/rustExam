## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Async Trait Metotları  
#### ✅ Cevap 503: async-trait crate ile async trait metotları yazma

Rust'ta trait metotları doğrudan async olamaz, ancak `async-trait` crate'i ile bu mümkündür.

```rust
use async_trait::async_trait;

#[async_trait]
trait MyTrait {
    async fn get_value(&self) -> i32;
}

struct MyStruct;

#[async_trait]
impl MyTrait for MyStruct {
    async fn get_value(&self) -> i32 {
        100
    }
}

#[tokio::main]
async fn main() {
    let s = MyStruct;
    let v = s.get_value().await;
    println!("Değer: {}", v);
}
```
