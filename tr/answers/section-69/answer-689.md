## 📘 Bölüm: Macro Rules ve Deklaratif Makrolar  
### 🔹 Kategori: Test ve benchmark kodu için makrolar  
#### ✅ Cevap 689: Test ve benchmark kodu için makrolar

Bu soruda, test fonksiyonları üretmek için bir makro yazılır. Makro, verilen isimde bir test fonksiyonu oluşturur.

```rust
macro_rules! make_test {
    ($name:ident, $body:block) => {
        #[test]
        fn $name() $body
    };
}

make_test!(my_test, {
    assert_eq!(2 + 2, 4);
});
```
Bu makro ile kolayca yeni test fonksiyonları tanımlanabilir.
