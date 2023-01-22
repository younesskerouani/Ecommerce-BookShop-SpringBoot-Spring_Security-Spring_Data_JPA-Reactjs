package com.backend.org.controller;

import com.backend.org.service.CategorieService;
import com.backend.org.model.CategorieEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/category")

public class CategorieController {

    @Autowired
    private CategorieService categorieService;


    @GetMapping(path = "/get-categories")
    public List<CategorieEntity> getcategories() {
        return this.categorieService.getcategories();
    }

    @GetMapping("/get-category/{name}")
    public CategorieEntity getcategory(@PathVariable("name") String name){
        return categorieService.getcategory(name);
    }
    @PostMapping("/save-cat")
    public CategorieEntity saveProduct(@RequestBody CategorieEntity categorie) {
        return this.categorieService.saveCategorie(categorie);
    }
}
