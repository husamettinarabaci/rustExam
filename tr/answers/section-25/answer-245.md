## 📘 Bölüm: Kapanışlar ve Sahiplik  
### 🔹 Kategori: Kapanış ve Ömürler  
#### ✅ Cevap 245: Kapanış ve değişken ömürleri

Kapanış, referansla yakaladığı değişkenin ömrünü aşamaz. Borrow checker bunu denetler.

```rust
fn kapanis_yap<'a>(s: &'a str) -> impl Fn() + 'a {
    move || println!("{}", s)
}

let s = String::from("merhaba");
let f = kapanis_yap(&s);
f();
```

Yakalanan değişken düşerse, kapanış kullanılamaz.
