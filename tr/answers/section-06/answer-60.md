## 📚 Bölüm: Hata Yönetimi  
### 🔹 Kategori: Hata Zincirleme  
#### ✅ Cevap 60: `thiserror` veya `anyhow` ile hata zincirleme

**Açıklama:**
`thiserror` ve `anyhow` gibi crate'ler Rust'ta hata yönetimini ve zincirlemeyi kolaylaştırır.

```rust
use anyhow::{Result, Context};
use std::fs::File;

fn main() -> Result<()> {
    File::open("foo.txt").context("Dosya açılamadı")?;
    Ok(())
}
```
