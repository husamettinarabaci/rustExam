## 📘 Bölüm: Derleme Zamanı Motorları ve Metaprogramlama
### 🔹 Kategori: Tip Düzeyinde Programlama
#### ✅ Cevap 1272: `PhantomData` ile tip düzeyinde programlama

`PhantomData`, değer saklamadan tip bilgisini kodlamanızı sağlar. Örnek:

```rust
use std::marker::PhantomData;

struct BenimTipim<T> {
    _isaretci: PhantomData<T>,
}

fn tipi_kullan<T>() {
    let _x = BenimTipim::<T> { _isaretci: PhantomData };
    // Tip bilgisi derleme zamanında korunur
}
```

Bu, sıfır boyutlu tipler ve tip düzeyinde programlama için kullanışlıdır.
