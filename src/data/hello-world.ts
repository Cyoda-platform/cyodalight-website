/**
 * Hello World code examples — spec section 12.
 *
 * TODO: All four examples below use PLACEHOLDER module paths and API signatures.
 * These MUST be rewritten against the actual published client libraries before launch.
 * See spec section 26 Pre-Build Checklist:
 *   - Go module path for client library confirmed
 *   - Java client library (Maven/Gradle coordinates) confirmed
 *   - Python client library (pip package name) confirmed
 *   - Kotlin client library confirmed
 *   - Hello World API shape validated against real API
 *
 * The example is intentionally non-domain-specific: one entity, one workflow,
 * two branches on time of day, one printed result.
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
    // TODO: Replace [GO_MODULE_PATH] with confirmed Go module path
    code: `package main

import (
    "context"
    "fmt"
    "time"
    cyoda "[GO_MODULE_PATH]" // TODO: confirm
)

func main() {
    client, _ := cyoda.NewClient("localhost:8080")
    ctx := context.Background()

    // Create a Greeting entity
    entity, _ := client.CreateEntity(ctx, &cyoda.Entity{
        Type:  "Greeting",
        State: "PENDING",
        Data: map[string]any{
            "hour": time.Now().Hour(),
        },
    })

    // Workflow branches on the hour field
    if time.Now().Hour() < 12 {
        client.Transition(ctx, entity.ID, "MORNING")
        fmt.Println("Good morning")
    } else {
        client.Transition(ctx, entity.ID, "AFTERNOON")
        fmt.Println("Good afternoon")
    }
}`,
  },
  {
    language: 'Java',
    langId: 'java',
    // TODO: Replace with confirmed Java client library API
    code: `import java.time.LocalTime;
// TODO: replace with confirmed Maven/Gradle import
import io.cyoda.light.CyodaClient; // [PLACEHOLDER]
import io.cyoda.light.Entity;       // [PLACEHOLDER]

public class HelloWorld {
    public static void main(String[] args) throws Exception {
        var client = CyodaClient.connect("localhost:8080");

        // Create a Greeting entity
        var entity = client.createEntity(Entity.builder()
            .type("Greeting")
            .state("PENDING")
            .data("hour", LocalTime.now().getHour())
            .build());

        // Workflow branches on the hour field
        if (LocalTime.now().getHour() < 12) {
            client.transition(entity.getId(), "MORNING");
            System.out.println("Good morning");
        } else {
            client.transition(entity.getId(), "AFTERNOON");
            System.out.println("Good afternoon");
        }
    }
}`,
  },
  {
    language: 'Python',
    langId: 'python',
    // TODO: Replace with confirmed Python client library (pip package)
    code: `from datetime import datetime
# TODO: replace with confirmed pip package name
import cyodalight as cyoda  # [PLACEHOLDER]

client = cyoda.Client("localhost:8080")

# Create a Greeting entity
entity = client.create_entity(
    type="Greeting",
    state="PENDING",
    data={"hour": datetime.now().hour}
)

# Workflow branches on the hour field
if datetime.now().hour < 12:
    client.transition(entity.id, "MORNING")
    print("Good morning")
else:
    client.transition(entity.id, "AFTERNOON")
    print("Good afternoon")`,
  },
  {
    language: 'Kotlin',
    langId: 'kotlin',
    // TODO: Replace with confirmed Kotlin client library (shared with Java or separate)
    code: `import java.time.LocalTime
// TODO: replace with confirmed Kotlin/Java dependency
import io.cyoda.light.CyodaClient // [PLACEHOLDER]
import io.cyoda.light.entity       // [PLACEHOLDER]

fun main() {
    val client = CyodaClient.connect("localhost:8080")

    // Create a Greeting entity
    val entity = client.createEntity(
        Entity(
            type = "Greeting",
            state = "PENDING",
            data = mapOf("hour" to LocalTime.now().hour)
        )
    )

    // Workflow branches on the hour field
    if (LocalTime.now().hour < 12) {
        client.transition(entity.id, "MORNING")
        println("Good morning")
    } else {
        client.transition(entity.id, "AFTERNOON")
        println("Good afternoon")
    }
}`,
  },
];
