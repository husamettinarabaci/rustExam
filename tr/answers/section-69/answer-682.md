## 📘 Bölüm: Macro Rules ve Deklaratif Makrolar  
### 🔹 Kategori: macro_rules! ile tekrar ve otomasyon  
#### ✅ Cevap 682: Tekrar, desen eşleme ve meta değişkenler kullanımı

Bu soruda, `macro_rules!` ile birden fazla argümanı işleyen ve desen eşleme ile meta değişken kullanan bir makro yazılır.

```rust
macro_rules! print_all {
    ($($x:expr),*) => {
        $(println!("{}", $x);)*
    };
}

fn main() {
    print_all!(1, "hello", 3.14);
}
```
Makro, verilen tüm argümanları sırayla yazdırır. `$x:expr` bir meta değişkendir ve desen eşleme ile birden fazla argüman yakalanır.
