## 📘 Bölüm: Sahiplik ve Ödünç Alma I  
### 🔹 Kategori: Değiştirilebilir Referanslar ve Ödünç Alma Kuralları  
#### ✅ Cevap 67: Değiştirilebilir referanslar ve ödünç alma kuralları

Rust'ta bir değişkene aynı anda yalnızca bir değiştirilebilir referans alınabilir. Bu, veri yarışlarını önler ve bellek güvenliğini sağlar. Aynı kapsamda ikinci bir değiştirilebilir referans oluşturmaya çalışmak derleme hatasına yol açar. Ancak, farklı scope'lar kullanarak farklı zamanlarda birden fazla değiştirilebilir referans alınabilir.

```rust
fn main() {
    let mut x = 10;
    {
        let r1 = &mut x;
        *r1 += 5;
        println!("İlk değiştirilebilir referans: {}", r1);
    } // r1 burada scope dışına çıkar
    {
        let r2 = &mut x;
        *r2 += 10;
        println!("İkinci değiştirilebilir referans: {}", r2);
    }
    // Aşağıdaki satırları açarsanız derleme hatası alırsınız:
    // let r1 = &mut x;
    // let r2 = &mut x;
    // println!("{} {}", r1, r2);
    println!("Son değer: {}", x);
}
```

Bu örnek, aynı anda yalnızca bir değiştirilebilir referans alınabileceğini, ancak farklı kapsamlar kullanılarak zamanla yeni referanslar oluşturulabileceğini gösterir.
