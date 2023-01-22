package com.backend.org.repository;


import com.backend.org.model.CategorieEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepo extends JpaRepository<CategorieEntity, Integer > {
   CategorieEntity getCategorieEntityByCategorieNom(String name);
}
