/**
 * Hello World code examples — spec section 12.
 *
 * API signatures and import paths are illustrative.
 * They match the expected shape of the published client libraries.
 * Verify against the actual released packages before launch:
 *   https://github.com/Cyoda-platform/cyoda-light-go/releases
 *
 * The example is intentionally non-domain-specific: one entity type,
 * one workflow with two transitions branching on a field value.
 */

export interface HelloWorldExample {
  language: string; // display label for tab
  langId: string;   // language identifier for syntax highlighting
  code: string;
}

export const helloWorldExamples: HelloWorldExample[] = [
  {
    language: 'Go',
    langId: 'go',
    code: `package main

import (
    "context"
    "fmt"
    "time"
    cyoda "github.com/cyoda-platform/cyoda-light-go/client"
)

func main() {
    client, _ := cyoda.NewClient("localhost:9090")
    ctx := context.Background()

    // Create a Greeting entity in the PENDING state
    entity, _ := client.CreateEntity(ctx, &cyoda.Entity{
        Type:  "Greeting",
        State: "PENDING",
        Data:  map[string]any{"hour": time.Now().Hour()},
    })

    // Workflow transitions based on the hour field
    if time.Now().Hour() < 12 {
        client.Transition(ctx, entity.ID, "TO_MORNING")
        fmt.Println("Good morning")
    } else {
        client.Transition(ctx, entity.ID, "TO_AFTERNOON")
        fmt.Println("Good afternoon")
    }
}`,
  },
  {
    language: 'Java',
    langId: 'java',
    code: `import java.time.LocalTime;
import io.cyoda.light.CyodaClient;
import io.cyoda.light.model.Entity;

public class HelloWorld {
    public static void main(String[] args) throws Exception {
        var client = CyodaClient.connect("localhost:9090");

        // Create a Greeting entity in the PENDING state
        var entity = client.createEntity(Entity.builder()
            .type("Greeting")
            .state("PENDING")
            .data("hour", LocalTime.now().getHour())
            .build());

        // Workflow transitions based on the hour field
        if (LocalTime.now().getHour() < 12) {
            client.transition(entity.getId(), "TO_MORNING");
            System.out.println("Good morning");
        } else {
            client.transition(entity.getId(), "TO_AFTERNOON");
            System.out.println("Good afternoon");
        }
    }
}`,
  },
  {
    language: 'Python',
    langId: 'python',
    code: `from datetime import datetime
import cyodalight

client = cyodalight.Client("localhost:9090")

# Create a Greeting entity in the PENDING state
entity = client.create_entity(
    type="Greeting",
    state="PENDING",
    data={"hour": datetime.now().hour}
)

# Workflow transitions based on the hour field
if datetime.now().hour < 12:
    client.transition(entity.id, "TO_MORNING")
    print("Good morning")
else:
    client.transition(entity.id, "TO_AFTERNOON")
    print("Good afternoon")`,
  },
  {
    language: 'Kotlin',
    langId: 'kotlin',
    code: `import java.time.LocalTime
import io.cyoda.light.CyodaClient
import io.cyoda.light.model.Entity

fun main() {
    val client = CyodaClient.connect("localhost:9090")

    // Create a Greeting entity in the PENDING state
    val entity = client.createEntity(
        Entity(
            type = "Greeting",
            state = "PENDING",
            data = mapOf("hour" to LocalTime.now().hour)
        )
    )

    // Workflow transitions based on the hour field
    if (LocalTime.now().hour < 12) {
        client.transition(entity.id, "TO_MORNING")
        println("Good morning")
    } else {
        client.transition(entity.id, "TO_AFTERNOON")
        println("Good afternoon")
    }
}`,
  },
];
