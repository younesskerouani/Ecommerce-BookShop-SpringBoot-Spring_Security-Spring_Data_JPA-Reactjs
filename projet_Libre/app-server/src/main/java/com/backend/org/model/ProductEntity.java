package com.backend.org.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Table(name = "product")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id", nullable = false)
    private Integer id;

    @Column(name = "price", nullable = false)
    private Long price;

    @Column(name="Stock",nullable = false)
    private Long stock;

    @Column(name = "productName", nullable = false)
    private String productName;

    @Column(name = "productPhoto", nullable = false)
    private String productPhoto;

    @Column(name = "productDescription", nullable = false)
    private String productDesc;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="categorie_id", nullable=false)
    private CategorieEntity categorie;

}