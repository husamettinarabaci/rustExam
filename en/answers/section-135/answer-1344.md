## 📘 Section: Microservices Architecture Patterns  
### 🔹 Category: Distributed transactions and sagas  
#### ✅ Answer 1344: Distributed transactions and sagas

This solution defines a trait for each step and a saga manager struct. The saga manager runs the steps in order and aborts or compensates on failure.

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
