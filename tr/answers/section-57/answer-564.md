## 📘 Bölüm: Düşük Seviyeli Gömülü Sistemler
### 🔹 Kategori: Gömülü için bellek düzeni ve bağlayıcı scriptleri
#### ✅ Cevap 564: Gömülü için bellek düzeni ve bağlayıcı scriptleri

Gömülü Rust projelerinde bellek düzeni `memory.x` dosyası ile tanımlanır. Bu dosya, FLASH ve RAM bölgelerini belirtir. Örnek bir `memory.x`:

```
MEMORY
{
  FLASH : ORIGIN = 0x08000000, LENGTH = 256K
  RAM : ORIGIN = 0x20000000, LENGTH = 40K
}
```

Bu script, derleyiciye kodun ve verinin nereye yerleştirileceğini söyler. Rust projesinde bu dosya genellikle kök dizinde bulunur ve `build.rs` ile bağlanır.
