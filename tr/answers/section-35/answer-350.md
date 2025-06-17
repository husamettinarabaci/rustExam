## 📘 Bölüm: Test ve Hata Ayıklama
### 🔹 Kategori: Test İzolasyonu ve Yan Etkiler
#### ✅ Cevap 350: Test izolasyonu ve yan etkileri anlama

Test izolasyonu, her testin diğerlerinden bağımsız olarak çalışmasını ve testlerin birbirini etkilememesini sağlar. Yan etkiler, bir testin dış dünyada (örneğin dosya sistemi, global değişkenler) değişiklik yapması ve diğer testlerin sonucunu etkilemesi anlamına gelir. Rust'ta testler paralel çalıştırıldığı için yan etkilerden kaçınmak önemlidir.

Yan etkili test örneği:

```rust
static mut COUNTER: u32 = 0;

#[test]
fn test_increment() {
    unsafe { COUNTER += 1; }
    assert!(unsafe { COUNTER } > 0);
}

#[test]
fn test_reset() {
    unsafe { COUNTER = 0; }
    assert_eq!(unsafe { COUNTER }, 0);
}
```

İzole test örneği:

```rust
#[test]
fn test_add() {
    let mut value = 0;
    value += 1;
    assert_eq!(value, 1);
}
```

İzole testlerde, her test kendi verisini kullanır ve diğer testlerden etkilenmez.
