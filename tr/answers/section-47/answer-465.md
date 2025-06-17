## 📘 Bölüm: Workspace ve Paket Organizasyonu
### 🔹 Kategori: Büyük projeleri mantıksal crate'lere ayırma
#### ✅ Cevap 465: Büyük projeleri mantıksal crate'lere ayırma

Büyük projeler, işlevsel olarak ayrılmış birden fazla crate'e bölünebilir. Örneğin, `core`, `api`, ve `cli` gibi crate'ler oluşturulabilir. Her crate kendi sorumluluğuna sahip olur ve ana workspace dosya yapısı aşağıdaki gibi olur:

```
my_workspace/
  Cargo.toml
  core/
  api/
  cli/
```

Her crate'in kendi Cargo.toml'u bulunur ve bağımsız geliştirilir.
