## 📘 Bölüm: Kapanışlar ve Sahiplik  
### 🔹 Kategori: Yakalanan Değişkeni Değiştirme  
#### ✅ Cevap 243: Kapanışta yakalanan değişkeni değiştirme

Kapanış, değişkeni değiştirmek için `FnMut` trait'ini uygular ve değişken mutably olmalıdır.

```rust
let mut x = 0;
let mut bir_ekle = || { x += 1; };
bir_ekle();
println!("x = {}", x);
```

Bu tür kapanışlar `FnMut` trait'ini uygular.
