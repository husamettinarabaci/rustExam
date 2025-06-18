## 📘 Bölüm: Mikroservisler ve Servis Mesh'leri
### 🔹 Kategori: OpenTelemetry ile Dağıtık Loglama ve İzleme
#### ✅ Cevap 1238: Durum ve oturum tutarlılığı yönetimi

Dağıtık mikroservislerde durum ve oturum tutarlılığı, stateless servis tasarımı ve ağ bölünmeleri nedeniyle zordur. Yaygın çözümler arasında ortak bir veri deposu (Redis gibi) veya stateless JWT token'lar kullanmak bulunur.

```rust
// Örnek: Actix-web ile JWT oturum doğrulama
use actix_web::{web, App, HttpServer, HttpRequest, HttpResponse};
use jsonwebtoken::{decode, DecodingKey, Validation, Algorithm};

fn validate_jwt(token: &str, secret: &[u8]) -> bool {
    decode::<serde_json::Value>(token, &DecodingKey::from_secret(secret), &Validation::new(Algorithm::HS256)).is_ok()
}

// Handler içinde: İstek başlığından oturum token'ı kontrol edilir
```

Bu yöntem, servisler arası stateless oturum doğrulamasına olanak tanır. Alternatif olarak, Redis ile oturum verisi saklanabilir.
