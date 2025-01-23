package com.ordertracker.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow CORS for frontend
@RequestMapping("/inventory")
public class InventoryController {

    @GetMapping("/")
    public String getProducts() {
        return "{\"products\": [{\"id\": 1, \"stock\": 10}]}";
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> checkInventory(@PathVariable int productId) {        
        if (productId <= 0) {
            return ResponseEntity.badRequest().body("Invalid product ID");
        }

        Map<String, Object> inventory = Map.of("id", productId, "stock", 10);
        return ResponseEntity.ok(inventory);
    }

    @PutMapping("/{productId}")
    public String updateInventory(@PathVariable int productId) {
        return String.format("Inventory updated for product %d", productId);
    }
}