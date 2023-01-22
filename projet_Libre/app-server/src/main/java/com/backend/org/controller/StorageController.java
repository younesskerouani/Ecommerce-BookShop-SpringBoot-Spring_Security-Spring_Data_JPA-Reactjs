package com.backend.org.controller;

import com.backend.org.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/ProductImage")

public class StorageController {

    @Autowired
    private StorageService storageService;


    @PostMapping
    public void uploadProductImage(@RequestParam("image") MultipartFile file) throws IOException {
        storageService.uploadProductImage(file);
    }

    @GetMapping(path="/getImage/{id}",produces = MediaType.IMAGE_PNG_VALUE)
    public ResponseEntity<?> getPhoto(@PathVariable("id") Integer id) throws Exception{
        byte[] imageData= storageService.getPhoto(id);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("Image/png"))
                .body(imageData);
    }



}
