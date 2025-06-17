## 📘 Section: Enums, Variants, and Algebraic Data Types  
### 🔹 Category: Enums for State Machines and Transitions  
#### ✅ Answer 306: Using enums for state machines and transitions

In this example, a traffic light state machine is modeled using an enum. Each variant represents a state, and the `next` method transitions to the next state. The `main` function prints the state at each step.

```rust
enum TrafficLight {
    Red,
    Yellow,
    Green,
}

impl TrafficLight {
    fn next(&self) -> TrafficLight {
        match self {
            TrafficLight::Red => TrafficLight::Green,
            TrafficLight::Green => TrafficLight::Yellow,
            TrafficLight::Yellow => TrafficLight::Red,
        }
    }
}

fn main() {
    let mut light = TrafficLight::Red;
    for _ in 0..5 {
        println!("State: {:?}", light);
        light = light.next();
    }
}
```
