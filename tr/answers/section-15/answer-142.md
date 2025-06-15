## 📘 Bölüm: Crate'ler ve Harici Paketler  
### 🔹 Kategori: Cargo ve Bağımlılıklar  
#### ✅ Cevap 142: `Cargo.toml` dosyasına bağımlılık ekleme

Rust'ta bir bağımlılık eklemek için `Cargo.toml` dosyasındaki `[dependencies]` bölümüne paket adı ve sürümünü yazarsınız. Örneğin, `rand` paketini `0.8` sürümüyle eklemek için:

```toml
[dependencies]
rand = "0.8"
```

`cargo build` komutunu çalıştırdığınızda, Cargo belirtilen paketi ve bağımlılıklarını [crates.io](https://crates.io) üzerinden indirir, derler ve projenize ekler. Böylece harici kütüphaneleri kolayca kullanabilirsiniz.
