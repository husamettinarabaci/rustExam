## 📘 Bölüm: Fonksiyonlar I  
### 🔹 Kategori: Fonksiyon Parametreleri  
#### ✅ Cevap 48: Varsayılan argümanlı fonksiyon (simüle)

Rust'ta doğrudan varsayılan argüman desteği yoktur, ancak `Option` parametreleri ve desen eşleme ile bu davranış simüle edilebilir.

```rust
fn print_number(num: Option<i32>) {
    match num {
        Some(n) => println!("Number: {}", n),
        None => println!("Default is 42"),
    }
}

fn main() {
    print_number(Some(7));
    print_number(None);
}
```
