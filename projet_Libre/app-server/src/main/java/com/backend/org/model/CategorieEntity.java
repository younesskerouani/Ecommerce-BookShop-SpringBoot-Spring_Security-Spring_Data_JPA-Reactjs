package com.backend.org.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Table(name = "categorie")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CategorieEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "categorie_id", nullable = false)
    private Integer id;

    @Column(name = "categorie_nom", nullable = false, length = 20)
    private String categorieNom;

    @Column(name = "photo", nullable = false, length = 20)
    private String categoriePhoto;


    @JsonManagedReference
    @OneToMany(mappedBy = "categorie")
    private List<ProductEntity> products;



}