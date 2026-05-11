package com.ai.ecommerce.backend.service;

import com.ai.ecommerce.backend.entity.Product;
import com.ai.ecommerce.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public Product addProduct(Product product){
        return productRepository.save(product);
    }
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }
    public Product updateProduct(Long id,Product updateProduct){
        Product product = productRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Product Not Found"));

        product.setName(updateProduct.getName());
        product.setDescription(updateProduct.getDescription());
        product.setPrice(updateProduct.getPrice());
        product.setQuantity(updateProduct.getQuantity());

        return productRepository.save(product);
    }
    public String deleteProduct(Long id){
        productRepository.deleteById(id);

        return "Product Deleted Successfully.";

    }
}
