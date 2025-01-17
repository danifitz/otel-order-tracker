package com.ordertracker.controller;

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
    public String checkInventory(@PathVariable int productId) {
        return String.format("Product %d is in stock", productId);
    }

    @PutMapping("/{productId}")
    public String updateInventory(@PathVariable int productId) {
        return String.format("Inventory updated for product %d", productId);
    }
}