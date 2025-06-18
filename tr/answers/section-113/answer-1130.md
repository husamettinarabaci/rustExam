## 📘 Bölüm: Rust'ta Aktör Frameworkleri
### 🔹 Kategori: Aktörleri harici servislerle entegre etme
#### ✅ Cevap 1130: Aktörleri harici servislerle entegre etme

Bir aktör, harici bir servise (ör. HTTP API) asenkron olarak istek gönderebilir. Bunun için genellikle async HTTP istemcisi kullanılır.

```rust
use reqwest::Client;

struct HttpActor {
    client: Client,
}

impl HttpActor {
    async fn send_request(&self, url: &str) -> Result<String, reqwest::Error> {
        let resp = self.client.get(url).send().await?.text().await?;
        Ok(resp)
    }
}
```
Bu örnekte, aktör bir HTTP isteği gönderip yanıtı işler.
