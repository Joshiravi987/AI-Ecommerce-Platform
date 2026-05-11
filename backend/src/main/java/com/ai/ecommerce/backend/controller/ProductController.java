package com.ai.ecommerce.backend.controller;

import com.ai.ecommerce.backend.entity.Product;
import com.ai.ecommerce.backend.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
        @RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return  productService.addProduct(product);
    }

    @GetMapping
    public List<Product> getAllProducts(){
        return  productService.getAllProducts();
    }

    @PutMapping("/{id}")
    public Product updateProduct(
        @PathVariable Long id,
                @RequestBody Product product
    ){
        return productService.updateProduct(id,product);
    }
@DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id){

        return productService.deleteProduct(id);
}
}