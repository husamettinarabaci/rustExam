## 📘 Bölüm: Mikroservis Mimari Desenleri  
### 🔹 Kategori: Dağıtık işlemler ve saga desenleri  
#### ✅ Cevap 1344: Dağıtık işlemler ve saga desenleri

Bu çözümde, her adım için bir trait ve saga yöneticisi struct'ı tanımlanır. Saga yöneticisi, adımları sıralı olarak çalıştırır ve başarısızlık durumunda işlemi durdurur.

```rust
trait StepOne {
    fn execute(&self) -> bool;
}

trait StepTwo {
    fn execute(&self) -> bool;
}

struct SagaManager<'a> {
    step_one: &'a dyn StepOne,
    step_two: &'a dyn StepTwo,
}

impl<'a> SagaManager<'a> {
    fn run(&self) {
        if self.step_one.execute() {
            println!("Step one succeeded");
            if self.step_two.execute() {
                println!("Step two succeeded");
            } else {
                println!("Step two failed, compensating...");
            }
        } else {
            println!("Step one failed, aborting saga");
        }
    }
}

struct PaymentStep;
struct ShippingStep;

impl StepOne for PaymentStep {
    fn execute(&self) -> bool {
        true // Simulate success
    }
}

impl StepTwo for ShippingStep {
    fn execute(&self) -> bool {
        false // Simulate failure
    }
}

fn main() {
    let payment = PaymentStep;
    let shipping = ShippingStep;
    let saga = SagaManager { step_one: &payment, step_two: &shipping };
    saga.run();
}
```
