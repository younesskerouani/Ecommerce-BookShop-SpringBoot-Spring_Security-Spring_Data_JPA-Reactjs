package com.backend.org.controller;

import com.backend.org.service.ProductService;
import com.backend.org.model.ProductEntity;
import com.backend.org.payload.ProdDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/Product")

public class ProductController {
    @Autowired
    private ProductService productService;


    @GetMapping("/testprod")
    public String test() {
        return "test controller";
    }


    @PostMapping("/save-prod")
    public ProductEntity saveProduct(@RequestBody ProductEntity product) {
        return this.productService.saveproduct(product);
    }

    @GetMapping(path = "/get-products")
    public Iterable<ProductEntity> getProducts() {
        return this.productService.getProducts();
    }

    @GetMapping("/get-product/{id}")
    public Optional<ProductEntity> getProductById(@PathVariable Integer id) {
//        Optional<ProductEntity> product = productDao.getProductById(id);

        return this.productService.getProductById(id);
    }

    @PostMapping("/test10")
    public  void EditMultiStock(@RequestBody List<ProdDto> ps){
        productService.EditMultiStock(ps);
    }

    //count nombre of products
    @GetMapping("/getNombreOfProducts")
    public long getNombreOfProducts(){
        return this.productService.getNombreOfProducts();
    }

    // Delete Product
    @DeleteMapping("/deleteProduct/{id}")
    public void deleteProduct(@PathVariable Integer id){
        productService.deleteProductByid(id);
    }

}
