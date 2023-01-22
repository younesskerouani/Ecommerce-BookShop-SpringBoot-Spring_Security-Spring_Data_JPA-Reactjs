package com.backend.org.service;


import com.backend.org.model.CategorieEntity;
import com.backend.org.repository.CategorieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategorieService {
    @Autowired
    private CategorieRepo categorieRepo;
    public List<CategorieEntity> getcategories() {
        return this.categorieRepo.findAll();
    }
    public CategorieEntity getcategory(String name) {

        return this.categorieRepo.getCategorieEntityByCategorieNom(name);
    }
    public CategorieEntity saveCategorie(CategorieEntity categorie) {

        return this.categorieRepo.save(categorie);
    }
}