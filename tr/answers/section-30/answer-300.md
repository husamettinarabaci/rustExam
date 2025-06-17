## 📘 Bölüm: Modüller ve Crate Yapısı  
### 🔹 Kategori: Gerçek dünyada idiomatik modül yapısı kullanımı  
#### ✅ Cevap 300: Gerçek dünyada idiomatik modül yapısı kullanımı

Gerçek dünyada büyük Rust projelerinde modül yapısı, kodun okunabilirliğini ve sürdürülebilirliğini artırmak için mantıksal olarak bölünür. Her ana modül ayrı bir dosya veya klasör olarak tanımlanır. `mod` ile modül tanımlanır, `use` ile içeri aktarılır, `pub` ile dışa açılır. Aşağıda örnek bir dosya yapısı ve kod gösterilmiştir:

```
my_crate/
├── src/
│   ├── lib.rs
│   ├── network/
│   │   ├── mod.rs
│   │   └── client.rs
│   └── utils.rs
```

`lib.rs`:
```rust
pub mod network;
pub mod utils;
```

`network/mod.rs`:
```rust
pub mod client;

pub fn connect() {
    // ...
}
```

`network/client.rs`:
```rust
pub fn send_request() {
    // ...
}
```

`utils.rs`:
```rust
pub fn helper() {
    // ...
}
```

Bu yapı, modüllerin mantıksal olarak ayrılmasını ve kolayca yeniden kullanılmasını sağlar. `pub` ile dışa açılan fonksiyonlar ve modüller, crate dışından erişilebilir olur.
